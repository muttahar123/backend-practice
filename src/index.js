// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import authRoutes from '../routers/auth.js';


// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1);
//   }
// };

// connectDB();

// app.use('/auth', authRoutes);



// // Start Server
// const PORT = process.env.PORT || 5000;
// app.get("/", (req, res) => res.send(`App is running on port ${PORT}...`));

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '../routers/userRoutes.js';
import tokenRoutes from '../routers/tokenRoutes.js';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/tokens', tokenRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });
  })
  .catch((error) => console.error(error));


