const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/vidly')
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(err=>console.error('Could nott connect to MongoDB..',err));