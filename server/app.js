const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const userdb = JSON.parse(fs.readFileSync("./db.json", "UTF-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

//cors
const enableCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
server.use(enableCrossDomain);

const SECRET_KEY = "123456789";
//86400
const expiresIn = "1h";

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  let index = userdb.users.findIndex(
    user => user.email === email && user.password === password
  );
  if (
    userdb.users.findIndex(
      user => user.email === email && user.password === password
    ) !== -1
  ) {
    return userdb.users[index];
  } else {
    return false;
  }
}

// Register New User
server.post("/auth/register", (req, res) => {
  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = "Email and Password already exist";
    res.status(status).json({ status, message });
    return;
  }
  let test = JSON.stringify(userdb.users);

  fs.readFile(test, (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // Get current users data
    var data = JSON.parse(data.toString());
    // Get the id of last user
    var last_item_id = data.users[data.users.length - 1].id;
    console.log(last_item_id);

    //Add new user
    data.users.push({ id: last_item_id + 1, email: email, password: password }); //add some data
    var writeData = fs.writeFile(
      userdb.users,
      JSON.stringify(data),
      (err, result) => {
        // WRITE
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });

  // Create token for new user
  const access_token = createToken({ email, password });
  console.log("Access Token:" + access_token);
  res.status(200).json({ access_token });
});

// Login to one of the users from ./users.json
server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  let user = isAuthenticated({ email, password });
  if (user === false) {
    const status = 401;
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  } else {
    const access_token = createToken({ email, password });
    console.log("Access Token:" + access_token);
    res.status(200).json({ access_token, user });
  }
});

server.use(router);
let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Run Auth API Server");
});
