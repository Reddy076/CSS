const mongoose = require('mongoose');
require('dotenv').config({ path: require('path').resolve(__dirname, '../../backend/.env') });

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB Atlas...');
    console.log(`URI: ${process.env.MONGO_URI.replace(/:([^:@]+)@/, ':****@')}`); // Log masked URI
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected Successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ MongoDB Connection Failed:');
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();
