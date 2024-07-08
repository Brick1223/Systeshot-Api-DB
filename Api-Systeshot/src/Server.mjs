// src/Server.mjs
import app from './App.mjs';
import dotenv from 'dotenv';
import { sequelize } from './config/database.mjs';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');

    await sequelize.sync();
    console.log('All tables have been synced');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
