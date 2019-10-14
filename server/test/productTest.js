const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')
const Product = require('../models/product')
const ObjectId = require('mongodb').ObjectID

chai.use(chaiHttp)

// after(function(){
//     return Product.deleteMany({})
// })

describe('Product Test', () => {
    // describe('/products', function(done) {
    //     it('Should have name, description, stock, price, image to add a product', function() {
    //         let body = {
    //             name: 'Blue Eyes White Dragon',
    //             description: 'Greatest card of all time',
    //             stock: 1,
    //             price: 5000000000000
    //         }
    //         chai.request(app)
    //             .post('/products')
    //             .send(body)
    //             .end (function (err, res) {
    //                 console.log(res.body)
    //                 expect(err).to.be.null
    //                 expect(res).to.have.status(201)
    //                 expect(res.body).to.have.property('name')
    //                 expect(res.body).to.have.property('description')
    //                 expect(res.body).to.have.property('stock')
    //                 expect(res.body).to.have.property('price')
    //             })
    //     })
    // })

    // describe('/products', function(done) {
    //     it('Should return all products data', function() {
    //         chai.request(app)
    //             .get('/products')
    //             .end(function (err, res) {
    //                 expect(err).to.be.null
    //                 expect(res).to.have.status(200)
    //             })
    //     })
    // })

    describe('/products', function(done) {
        it('Should have name, description, stock, price, image to edit a product', function() {
            let body = {
                name: 'Elemental Hero Neos',
                description: 'One of the most iconic card of all time',
                stock: 5,
                price: 2500000000000,
                _id: ObjectId('5da444d20475cd2186050d84')
            }



            chai.request(app)
                .put('/products')
                .send(body)
                .end(function(err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                })
        })
    })

    
})