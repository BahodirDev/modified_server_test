const express = require('express');
const mongoose =require('mongoose');
const dot = require('dotenv');
const cors = require('cors');
const app = express();
const server = require('./routes/index');
dot.config();
// app
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:false}));

app.use('/',server);

mongoose.connect(process.env.MONGO_URI,()=>{
    console.log('DB connected =>', process.env.MONGO_URI);
})

const PORT =  process.env.PORT || 5000 
app.listen(PORT,()=>{
    console.log('server started on port '+ PORT );
})