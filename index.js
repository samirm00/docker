import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5003;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello from Docker');
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
