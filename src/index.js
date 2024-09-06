//index.js
const express = require("express");
const path = require("path");
const app = express();
// const hbs = require("hbs")
const LogInCollection = require("./mongo");
// const stuRegister = require("./studentRegister.js");
// const aluRegister = require("./alumniregister.js/index.js");

require("dotenv").config();
var http = require("http").Server(app);

const port = process.env.PORT || 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const tempelatePath = path.join(__dirname, "../tempelates");
const publicPath = path.join(__dirname, "../public");
console.log(publicPath);

//const paymentRoute = require('./routes/paymentRoute');
//app.use('/paymentGateway',paymentRoute);

app.set("view engine", "hbs");
app.set("views", tempelatePath);
app.use(express.static(publicPath));

// hbs.registerPartials(partialPath

// app.get("/alumniRegister", (req, res) => {
//   res.render("alumniRegister");
// });

// app.get("/studentRegister", (req, res) => {
//   res.render("studentRegister");
// });

app.get("/directory", (req, res) => {
  res.render("directory");
});

app.get("/clubs", (req, res) => {
  res.render("clubs");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/userprofile", (req, res) => {
  res.render("userprofile");
});

app.get("/events", (req, res) => {
  res.render("events");
});

app.get("/techno", (req, res) => {
  res.render("techno");
});

app.get("/2signup", (req, res) => {
  res.render("2signup");
});
app.get("/landing", (req, res) => {
  res.render("landing");
});
app.get("/donation", (req, res) => {
  res.render("donation");
});
app.get("/paymentGateway", (req, res) => {
  res.render("paymentGateway");
});
app.get("/cancel", (req, res) => {
  res.render("cancel");
});

app.get("/studash", (req, res) => {
  res.render("studash");
});

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/stuprofile", (req, res) => {
    res.render("stuprofile");
  });
  app.get("/connect", (req, res) => {
    res.render("connect");
  });
  

// app.get('/home', (req, res) => {
//     res.render('home')
// })

// app.post("/studentRegister", async (req, res) => {
//   const data = {
//     email: req.body.email,
//     username: req.body.username,
//     passOutYear: req.body.passOutYear,
//     password: req.body.password,
//   };

//   try {
//     const checking = await stuRegister.findOne({ username: req.body.username });

//     if (checking && checking.username === req.body.username) {
//       res.send("User details already exist");
//     } else {
//       await stuRegister.insertMany([data]);
//       res.status(201).render("studash", { naming: `${req.body.username}`})
//       res.status(201).render("stuprofile", { emailing:`${req.body.email}`,naming: `${req.body.username}`  , passing:`${req.body.passOutYear }` });
//     }
//   } catch (error) {
//     res.redirect("/"); // Redirect to home page if an error occurs
//   }
// });

// app.post("/alumniRegister", async (req, res) => {
//   const data = {
//     email: req.body.email,
//     username: req.body.username,
//     passOutYear: req.body.passOutYear,
//     password: req.body.password,
//   };

//   try {
//     const checking = await aluRegister.findOne({ username: req.body.username });

//     if (checking && checking.username === req.body.username) {
//       res.send("User details already exist");
//     } else {
//       await aluRegister.insertMany([data]);
//       res.status(201).render("studash", { naming: `${req.body.username}` , emailing:`${req.body.email}` , passing:`${req.body.passOutYear }`});
//     }
//   } catch (error) {
//     res.redirect("/"); // Redirect to home page if an error occurs
//   }
// });

// app.post("/signup", async (req, res) => {
//   const data = {
//     name: req.body.name,
//     password: req.body.password,
//   };

//   try {
//     const checking = await LogInCollection.findOne({ name: req.body.name });

//     if (
//       checking &&
//       checking.name === req.body.name &&
//       checking.password === req.body.password
//     ) {
//       res.send("User details already exist");
//     } else {
//       await LogInCollection.insertMany([data]);
//       res.status(201).render("landing", { naming: req.body.name });
//     }
//   } catch (error) {
//     res.redirect("/"); // Redirect to home page if an error occurs
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const check = await LogInCollection.findOne({ name: req.body.name });

//     if (check.password === req.body.password) {
//       res
//         .status(201)
//         .render("landing", { naming: `${req.body.password}+${req.body.name}` });
//     } else {
//       res.send("incorrect password");
//     }
//   } catch (e) {
//     res.send("wrong details");
//   }
// });

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  try {
    const checking = await LogInCollection.findOne({ name: req.body.name });

    if (
      checking &&
      checking.name === req.body.name &&
      checking.password === req.body.password
    ) {
      res.send("User details already exist");
    } else {
      await LogInCollection.insertMany([data]);
      res.status(201).render("landing", { naming: req.body.name });
    }
  } catch (error) {
    res.redirect("/"); // Redirect to home page if an error occurs
  }
});

app.post("/login", async (req, res) => {
  try {
    const check = await LogInCollection.findOne({ name: req.body.name });

    if (check.password === req.body.password) {
      res
        .status(201)
        .render("landing", { naming: `${req.body.password}+${req.body.name}` });
    } else {
      res.send("incorrect password");
    }
  } catch (e) {
    res.send("wrong details");
  }
});











app.listen(port, () => {
  console.log("port connected");
});
