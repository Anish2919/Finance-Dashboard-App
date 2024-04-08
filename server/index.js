import express from 'express'; 
import morgan from 'morgan';
import mongoose from 'mongoose'; 
import helmet from 'helmet'; 
import dotenv from 'dotenv'; 
import bodyParser from 'body-parser';


/** CONFIGURATIONS */
dotenv.config(); 

// Initialize Express application
const app = express();  
// Use helmet middleware to set various HTTP headers for security 
app.use(helmet());  
// Use helmet middleware to set cross-origin resource policy (CORP) header 
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));  
// Use morgan middleware for logging HTTP requests 
app.use(morgan('common')); 
// Parse incomming JSON requests and make it available in req.body 
app.use(bodyParser.json()); 
// Parse URL-encoded data from incoming requests and make it availabe in req.body
app.use(bodyParser.urlencoded({extended: false})); 

const PORT = process.env.PORT || 9000; 

mongoose.connect(process.env.MONGOSE_URL)
    .then(async() => {
        app.listen(PORT, () => console.log(`App is running at: ${PORT}`)); 
    })
    .catch((e) => console.log('error from  mongodb: ', e)); 