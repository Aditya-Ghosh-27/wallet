const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/account");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());


app.use("/api/v1", rootRouter);
app.listen(PORT, () => {
    console.log(`I am running on PORT ${PORT}`);
})