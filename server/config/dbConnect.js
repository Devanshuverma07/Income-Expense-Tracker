const mongoose = require('mongoose');


const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://devansh00990:vruIpDA65nbq95po@cluster0.k0rstca.mongodb.net/?retryWrites=true&w=majority');
        console.log("DB Connected Success!!!!");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

dbConnect();