const mongoose = require("mongoose");

  mongoose
  .connect(
   process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER_PASS}.mongodb.net/atypikhouse`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log("Erreur de connexion à MongoDB", err));



