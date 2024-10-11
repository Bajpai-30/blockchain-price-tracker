require('dotenv').config();
const express = require('express');
const { sequelize, connectDB } = require('./src/config/database.config');  // Update path to src/
const routes = require('./src/routes/api');  // Update path to src/
const errorHandler = require('./src/middleware/errorHandler');  // Update path to src/
const cronScheduler = require('./src/cron/scheduler');  // Update path to src/
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to the PostgreSQL database
connectDB();

// Sync Sequelize models with the database
sequelize.sync({ force: false })  // 'force: true' will drop the table if it exists and recreate it
  .then(() => {
    console.log('Database & tables synced successfully!');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });


// Define the routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

// Start the cron jobs for price tracking every 5 minutes
cronScheduler.start();

// Serve Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;  // Export for testing purposes
