const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://jslempa:thisismypassword1@student-cluster.m84wwej.mongodb.net/?retryWrites=true&w=majority&appName=student-cluster')
.then(() => console.log('Succesfully connected to MongoDB.'))
.catch((e) => {
console.error('Connection error', e.message)
})
mongoose.set('debug', true)

const db = mongoose.connection
module.exports = db