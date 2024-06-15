const mongoose = require ('mongoose');

const conndb = async()=>{
    try {
        await mongoose.connect('Your Link');
        console.log('we are connected to the world');
    } catch (error) {
       console.log(error); 
    }
}

module.exports = conndb
