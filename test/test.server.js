const chai = require('chai');
const expect = chai.expect;
const http = require('chai-http');
chai.use(http);
var request = require('supertest');
//start app
const app = require('../server');
const router = require('../routes/post_route')
const conn = require('../config/db')
const post =  require('../models/post_model')
const section = require('../models/section_model')
const user = require('../models/user_model')


// ------------------- TESTER LE SERVEUR ET LE ROUTER -------------------
describe('App', () => {
  it('Should exists', () => {
    expect(app).to.be.a('function');})
})

describe('Router', () => {
    it('Should exists', () => {
      expect(router).to.be.a('function');})
})


// ------------------- TESTER PROCEDURE POSTS --------------------



describe('POST, GET, UPDATE, DELETE a post', () => {
  it('Should GET all posts', (done) => {
      chai.request(app)
          .get('/api/post/')
          .end((err, res) => {
    
            expect(res).to.have.status(200);
            done();
      });
    });
  it('Should ADD a post', (done) => {
      let newPost = {
        "posterId": "1",
        "message": "knfdnfldknldnkq",
        "titre": "kjbdfkbdhfdfkn",
        "prix": 250,
        "superficie": 40,
        "departement": "PARIS",
        "lng": 456,
        "lat": 4567,
        "type": "appartement",
        "status": "ons",
        "clientId" : "2",
        "nbr_personne": 3,
        "likers": [],
        "comments": []
    }
        chai.request(app)
            .post('/api/post/')
            .send(newPost)
            .end((err, res) => {
      
              expect(res).to.have.status(201);
              done();
        });
    });
  });
  it('Should UPDATE a post on /api/post/<id> PUT', function(done) {
      chai.request(app)
        .get('/api/section/')
        .end(function(err, res){
          chai.request(app)
            .put('/api/post/'+ res.body[0]._id)
            .send({"message": "testing message update",
              "status": "test update",
              "clientId": "2",})
            .end((err, res) => {
              
              expect(res).to.have.status(200);
              done();
          });
        });
  it('Should DELETE a post on /api/post/<id> DELETE', function(done) {
          chai.request(app)
            .get('/api/post/')
            .end(function(err, res){
              chai.request(app)
                .delete('/api/post/'+ res.body[0]._id)
                .end((err, res) => {
                
                  expect(res).to.have.status(200);
                  done();
          });
        });    
      });
    });
    
    
  


// ------------------- TESTER PROCEDURE SECTIONS ------------------

describe('Sections', () => {
 

describe('POST, GET, UPDATE, DELETE a section', () => {
  it('Should GET all sections', (done) => {
      chai.request(app)
          .get('/api/section/')
          .end((err, res) => {
    
            expect(res).to.have.status(200);
            done();
      });
  });
  it('Should ADD a section', (done) => {
    let newSection = {
      "sectionId": "2",
      "titre": "cabane",
      "paragraph": "une belle cabane face à la mer",
      "reverse": true
  }
      chai.request(app)
          .post('/api/section/')
          .send(newSection)
          .end((err, res) => {
    
            expect(res).to.have.status(201);
            done();
      });
  });
  it('Should UPDATE a section on /api/section/<id> PUT', function(done) {
    chai.request(app)
      .get('/api/section/')
      .end(function(err, res){
        chai.request(app)
          .put('/api/section/'+ res.body[0]._id)
          .send({"titre": "test",
            "paragraph" : "test cabane"})
          .end((err, res) => {
          
            expect(res).to.have.status(200);
            done();
        });
      });
    });
    it('Should DELETE a section on /api/section/<id> DELETE', function(done) {
        chai.request(app)
          .get('/api/section/')
          .end(function(err, res){
            chai.request(app)
              .delete('/api/section/'+ res.body[0]._id)
              .end((err, res) => {
              
                expect(res).to.have.status(200);
                done();
        });
      });    
    });
  
  });

}); 

// ------------------- TESTER PROCEDURE UTILISATEURS -----------------

describe('User REGISTER, LOGIN, GET, UPDATE, DELETE', () => {
  it('Should GET all users', (done) => {
    
      chai.request(app)
          .get('/api/user/')
          .end((err, res) => {
    
            expect(res).to.have.status(200);
            done();
    });
  });

      
    
    
});
    

  it('Should REGISTER user', (done) => {
        let user = {
            "pseudo" : "tester1123",
            "email"  : "tester123232@gmail.com",
            "tel": 652584596,
            "password": "test112343234", 
            "role" : "propriétaire"
      }
          chai.request(app)
              .post('/api/user/register')
              .send(user)
              .end((err, res) => {
        
                expect(res).to.have.status(201);
                done();
          });
      });
  it('Should LOGIN as a client and Returns a 200 response', (done) => {
        let user = {
          "email"  : "tester123232@gmail.com",
          "password": "test112343234", 
            
      }
          chai.request(app)
              .post('/api/user/register')
              .send(user)
              .end((err, res) => {
        
                expect(res).to.have.status(200);
                done();
        });
      });
      

  it('Should UPDATE a SINGLE user on /api/user/<id> PUT', function(done) {
  chai.request(app)
    .get('/api/user/')
    .end(function(err, res){
      chai.request(app)
        .put('/api/user/'+res.body[0]._id)
        .send({"role": "propriétaire","pseudo": "test2883"})
        .end((err, res) => {
        
          expect(res).to.have.status(200);
          done();
      });
    });

  
});
  it('should DELETE user on /api/user/<id> Delete', function(done) {
  chai.request(app)
    .get('/api/user/')
    .end(function(err, res){
      chai.request(app)
        .delete('/api/user/'+res.body[0]._id)
        .end((err, res) => {
        
          expect(res).to.have.status(200);
          done();
    });
  });
});

