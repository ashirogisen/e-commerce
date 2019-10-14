// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const expect = chai.expect
// const app = require('../app')
// const User = require('../models/user')

// chai.use(chaiHttp)

// after(function() {
//     return User.deleteMany({})
// })

// describe('User Test', () => {
//     describe('/register', function(done) {
//         it('Should have name, password, email, address to register', function() {
//             let body = {
//                 name: 'RizkiAiman',
//                 password: 'asd',
//                 email: 'asd@mail.com',
//                 address: 'Kuningan'
//             }
//             chai.request(app)
//                 .post('/register')
//                 .send(body)
//                 .end (function (err, res) {
//                     console.log(res.body)
//                     expect(err).to.be.null
//                     expect(res.body.password).to.not.equal(body.password)
//                     expect(res).to.have.status(201)
//                     expect(res.body).to.have.property('name')
//                     expect(res.body).to.have.property('password')
//                     expect(res.body).to.have.property('email')
//                     expect(res.body).to.have.property('address')
//                 })
//         })
            
//     })
//     describe('/login', function(done) {
//         it('Should return email and password to login', function() {
//             let body = {
//                 email: 'asd@mail.com',
//                 password: 'asd'
//             }
//             chai.request(app)
//                 .post('/login')
//                 .send(body)
//                 .end (function (err, res) {
//                     console.log(res.body)
//                     expect(err).to.be.null
//                     expect(res).to.have.status(200)
//                 })

//         })

//     })
    
    
    
// })