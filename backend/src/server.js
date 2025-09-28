import dotenv from "dotenv";
import app from "./app.js";
import { connectToDatabase } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  })
})

async function start() {
  try {
    await connectToDatabase(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
