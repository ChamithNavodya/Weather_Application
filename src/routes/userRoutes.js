import express from 'express';
import * as userController from '../controllers/userController.js';
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected routes for user operations
router.put('/location/update', authenticateToken, userController.updateUserLocation);
router.get('/weather', authenticateToken, userController.getUserWeather);

export default router;
