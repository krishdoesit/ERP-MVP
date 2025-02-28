// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error('Database Connection Failed', error);
//     process.exit(1);
//   }
// };

// module.exports = { connectDB };  // Export function properly

const mongoose = require('mongoose');

async function connectDB() {
  try {
    console.log("🔍 Connecting to MongoDB:", process.env.MONGO_URI); // Debugging
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Database Connection Failed", error);
    process.exit(1);
  }
}

module.exports = { connectDB };
