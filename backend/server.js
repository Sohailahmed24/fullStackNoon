import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

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
    console.log(`Server running on http://localhost:${port}`);
});
