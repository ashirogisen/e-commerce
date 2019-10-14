if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const errorHandler = require('./middlewares/errorHandler')
const user_routes = require('./routes/userRoutes')
const product_routes = require('./routes/productRoutes')
const cart_routes = require('./routes/cartRoutes')
const category_routes = require('./routes/categoryRoutes')
const transaction_routes = require('./routes/transactionRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

mongoose.connect("mongodb://localhost/e-commerceTest", {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true})
    .then(_=> {
        console.log("Mongoose successfully connected");
    })
    .catch(console.log)

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', user_routes)
app.use('/products', product_routes)
app.use('/carts', cart_routes)
app.use('/categories', category_routes)
app.use('/transaction', transaction_routes)

app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log(`App is running on PORT ${PORT}`)
})

module.exports = app