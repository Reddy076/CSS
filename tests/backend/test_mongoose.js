try {
  const db = require('../../backend/config/database.js');
  console.log("DB Module Loaded Successfully");
} catch (error) {
  console.error("Failed to load DB module:", error);
}
