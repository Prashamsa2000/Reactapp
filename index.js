const express=require('express')
const app=express()
const dbConnect=require('./db')

require('dotenv').config();
dbConnect()

const port=5000
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('helloo')
})


app.use('/api/auth', require('./routes.js/Auth'))


app.listen(port,()=>{
    console.log(`listenning ${port}`);
    
})