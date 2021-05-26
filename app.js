const express =require('express')
const logger = require('./logger')
const authorize = require('./authorze')

const app = express()

// app.use([logger,authorize])


app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/product',[logger,authorize],(req,res)=>{
    console.log(req.user);
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    res.send('items')
})

app.listen(5050,()=>{console.log('server up')})