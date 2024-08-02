const express = require('express');
const hbs = require('hbs');
const app = express()
app.set('view engine','hbs')
const demo = {naem : 'abc',age:20}
app.get('/',(req,res)=>{
    res.render('demo',{demo:demo})
})
app.listen(8001);
console.log("Server Start..")