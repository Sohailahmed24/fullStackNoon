import express from 'express';
import cors from 'cors';

const app = express();

// Configure CORS to allow requests from your Vercel deployment
app.use(cors({
  origin: 'https://your-vercel-domain.vercel.app', // Replace with your Vercel domain
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
}));

app.get("/test", (req, res) => {
  res.send("Proxy is working");
});

app.get("/api/product", (req, res) => {
  const product = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
    { id: 3, name: "product3" }
  ];
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.json(product);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
