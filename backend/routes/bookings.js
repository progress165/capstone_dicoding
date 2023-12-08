import express from 'express'
import { createBooking } from '../controllers/bookingController.js';
//import { createReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router()

router.post('/:toursId', verifyUser, createBooking);

export default router;