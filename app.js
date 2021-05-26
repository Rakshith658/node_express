const express = require('express')
const {products} = require('./data')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const NP =products.map(prod =>{
        const {id,name,image}=prod;
        return{id,name,image}
    })
    res.json(NP)
})
app.get('/api/products/:ProductID',(req,res)=>{
    const {ProductID}=req.params;
    const SinglProduts =products.find(prod => prod.id ===Number(ProductID))
    if (!SinglProduts) {
        return res.status(404).send("The Page not found")
    }
    return res.json(SinglProduts)
})


app.listen(5050,()=>{
    console.log('server listen to port 5050');
})