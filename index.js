const express = require("express")
const app = express();
const PORT = 8001;
const userRouter = require("./routes/user")
const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./middleware")

connectMongoDb("mongodb://127.0.0.1:27017/myStorage").then(()=>console.log("MongoDb connected..."));

app.use(express.urlencoded({extended:false}))

app.use(logReqRes("records.txt"))
app.use("/api/user",userRouter);
module.exports = app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))