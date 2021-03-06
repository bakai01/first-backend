import express from 'express';
import mongoose from 'mongoose';

import { router } from './router.js';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.qzifv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use('/api', router);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log('SERVER WORKING'));  
  } catch (error) {
    console.log(error);
  }
};

startApp();
