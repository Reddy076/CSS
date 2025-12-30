try {
  console.log("Loading express...");
  require('express');
  console.log("Loading cors...");
  require('cors');
  console.log("Loading dotenv...");
  require('dotenv').config({ path: require('path').resolve(__dirname, '../../backend/.env') });
  console.log("Loading db...");
  require('../../backend/config/database.js');
  console.log("ALL MODULES LOADED SUCCESSFULLY");
} catch (error) {
  console.error("FAILURE:", error);
}
