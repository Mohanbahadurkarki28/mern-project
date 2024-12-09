const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
//const {Category, Order, User } = require('./models')


const app = express()

app.use(routes)
// const category = require('./models/catagory.model')

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });


app.listen(5000, async () => {
    console.log(`Server is started at http://localhost:5000`)
    console.log('press Ctrl+C to stop.....')

    await mongoose.connect('mongodb+srv://Mohan:Mohan86555@mern.hmof1.mongodb.net/mern?retryWrites=true&w=majority&appName=MERN')
    console.log('MongoDB connected...')

    /* const user = await User.find()
    console.log('user',user)

    const categories = await Category.find()
    console.log('categories', categories)

    const orders = await Order.find()
    console.log('Orders', orders) */
})


/* 
Types of Middleware
1) -Application  -- Hamile lekhne code lai application middleware vaninxa
2) -Router  -- Hamile routing garda use hune lai routing middleware vaninxa
3) -Built-In/First part  -- Exprrss ko library maa use garne lai build-In/First party middleware vaninxa
4) -Third party --Express ko bayek aru third party bata ayeko package lai third party middleware vaninxa
5) -Error-handling  -- Error response kasari handle garinxa teslai error handeling vaninxa
*/