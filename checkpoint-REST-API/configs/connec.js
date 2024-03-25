const mongoose = require ('mongoose');

const conndb = async()=>{
    try {
        await mongoose.connect('mongodb+srv://ff.qtv8y87.mongodb.net/?retryWrites=true&w=majority');
        console.log('we are connected to the world');
    } catch (error) {
       console.log(error); 
    }
}

module.exports = conndb
