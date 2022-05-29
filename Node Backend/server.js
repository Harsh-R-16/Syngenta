const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const foodRouter = require("./routes/foodRoutes");
const libraryRouter = require("./routes/libraryRoutes");
const blogRouter = require("./routes/blogRoutes");

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

let db =
  "mongodb+srv://harsh-gajera:harsh-gajera@cluster0.brvri.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to " + db)) // DATABASE_LOCAL for local db
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.use("/foodApi", foodRouter);
app.use("/libraryApi", libraryRouter);
app.use("/blogApi", blogRouter);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
