const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const promisify = require("es6-promisify");
const routes = require("./routes/index");
const helpers = require("./helpers");
const errorHandlers = require("./handlers/errorHandlers");

// create our Express app
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// serves up static files from the public folder.
app.use(express.static(path.join(__dirname, "public")));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(
  session({
    secret: process.env.AUTH_CODE,
    vendor_id: process.env.VENDOR_ID,
    subscription_id: process.env.SUB_ID,
    resave: false,
    saveUninitialized: false,
  })
);

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.currentPath = req.path;
  next();
});

// use promises for api calls
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

// handle routes
app.use("/", routes);

// If the above route doesnt work, 404 error
app.use(errorHandlers.notFound);
//
// Otherwise handle API response
app.use(errorHandlers.apiResponse);

// export to start
module.exports = app;
