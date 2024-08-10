import express from 'express'; 
import morgan from 'morgan';
import mongoose from 'mongoose'; 
import helmet from 'helmet'; 
import dotenv from 'dotenv'; 
import bodyParser from 'body-parser';
import KpiRoutes from './router/kpi.js'; 
import ProductRoutes from './router/product.js'; 
import KPI from './modals/KPI.js';
import Product from './modals/Product.js';
import { kpis, products, transactions } from './data/data.js';
import cors from 'cors'; 

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

/**CONFIGURING CORS */
const corsOptions = {
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions)); 

/** ROUTES */
app.use("/kpi", KpiRoutes); 
app.use("/product", ProductRoutes); 

const PORT = process.env.PORT || 9000; 

/** MONGOOSE SETUP */
// mongoose.connect(process.env.MONGOSE_URL)
// .then(async() => {
//     app.listen(PORT, () => console.log(`App is running at: ${PORT}`)); 
    
//     // dropping database before creating new
//     // note: it's only for development purpose. 
//     // await mongoose.connection.db.dropDatabase(); 
    
//     // inserting data from our local database to the mongoose atlas. 
//     // KPI.insertMany(kpis); 
// })
// .catch((e) => console.log('error from  mongodb: ', e)); 


mongoose.connect('mongodb://0.0.0.0:27017/', {
    dbName: "FinanceApp"
})
    .then(async () => {
        await app.listen(PORT, () => console.log(`App is running at port: ${PORT}`));  
        
        // // dropiing database before creating new 
        // await mongoose.connection.db.dropDatabase(); 

        // // // inserting new data from our local database to the mongoose atlas 
        // KPI.insertMany(kpis); 
        // Product.insertMany(products); 
1    })
    .catch(e => console.log(`error from mongoose: ${e.message}`)); 
    
    