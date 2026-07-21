import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js';
dotenv.config();

const app = express();
app.use(express.json());



app.get("/",(req,res)=>{
    try{
        res.status(200).json({
            "message": "Server is healthy"
        })
    }
    catch{
        res.status(500).json({
            "message": "Internal Server Error"
        })
    }
});

app.use("/api/products",productRoutes);

const PORT = process.env.PORT || 9001;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})