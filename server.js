const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user_route');
const postRoutes = require('./routes/post_route');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/middleware');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51IQafJDRHvU06AUoyvDxQUsVuvq58MJCDXzx5VZw4OqtkHCpAuXaOR9TJzwdCf56bEeuLqTGsUd5CX7MQvLJfo9w00QPnJOnbT");
const uuid = require("uuid");

const app = express();

const cors_options = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'methods': 'POST,DELETE,GET,HEAD,PUT,PATCH',
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'preflightContinue': false
}
app.use(cors(cors_options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// Routes d'accès aux utilisateurs et aux posts
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

// MIDDLEWARE
app.use(express.json())


// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});




// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Ecoute sur le port ${process.env.PORT}`);
})