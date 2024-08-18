import express from "express";
import cors from 'cors';


const app =express();

/* app.use(cors({ origin: 'http://localhost:1234' })); */
const corsOptions = {
    origin: ['http://localhost:5173',"https://react-planet.vercel.app/"],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Addresskey', 'X-Content', 'X-Experience', 'X-Lat', 'X-Lng', 'X-Locale', 'X-Mp', 'X-Platform', 'X-Visitor-Id'],
    credentials: true
};

app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.send("servr is ready")
})
app.get("/test", (req, res) => {
    res.send("Proxy is working");
});


app.get("/api/product",(req,res)=>{
    const product=[{id:1,name:"poroduct1"},{id:2,name:"poroduct2"},{id:3,name:"poroduct1=3"}]
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // HTTP 1.1.
    res.setHeader('Pragma', 'no-cache'); // HTTP 1.0.
    res.setHeader('Expires', '0'); // Proxies.
    res.json(product);
   
})

const port=process.env.PORT ||3000;
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`)
})