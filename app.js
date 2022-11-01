const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express();
const postRoute = require("./routes/posts")

app.get('/', (req, res) => 
 res.send('o day co nhung thu xam xi :))')
);

//Middleware
app.use(express.json());

//Route middleware
app.use("/posts", postRoute);


mongoose.connect(process.env.DB_CONNECTION, {  useNewUrlParser: true,
    useUnifiedTopology: true,}).then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`This is port ${port}`);})

