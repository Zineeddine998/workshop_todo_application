import express from "express";
const PORT = 3000;
import "./db.js";
import posts from "./posts/index.js";

const app = express();

app.use(express.json());

app.use('/posts', posts);

app.get('/', (req, res) => {
    res.send("Hello world!");
});

// Error handling middleware
app.use(function (err, req, res, next) {
    if (err) {
        res.status(500).json({ error: err.message });
    }
    next();
})

app.listen(3000, (req, res) => {
    console.log(`Server listening on port ${PORT}`);
})
