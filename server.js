// DEPENDENCIES
const app = require("./app");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
// changed to fix errors when deploying with fly.io
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
