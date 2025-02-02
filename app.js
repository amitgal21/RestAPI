const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.oekhlw5.mongodb.net/mydatabase`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});



const articlesRoutes = require('./api/routes/articels');
const categoriesRoutes = require('./api/routes/categories');
const usersRoutes = require('./api/routes/users');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type,Accept,Authorization");
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Headers", "PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({})
    }
    next();
});



//routes

app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/users', usersRoutes);

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;