const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

app.post("/echo", (req, res) => {
  res.json(req.body);
});

//display all the users

app.get("/users", async (req, res) => {
  const allUsers = await User.findAll();
  res.send(allUsers)
});


// Create a new user account
app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

//GET requests to /users/:userId

app.get("/users/:id", async (req, res) => {
  const specificUser = await User.findByPk(req.params.id)
  if (specificUser) {
    res.send(specificUser);
  } else {
    res.status(404).send("User with that ID not found");
  }
});