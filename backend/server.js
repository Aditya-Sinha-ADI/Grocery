const app = require('./app')
const dotenv = require('dotenv');



dotenv.config({path : "./config.env"});
app.listen(process.env.port,()=>{

    console.log(`Server is running on port ${process.env.port}`);
    
})