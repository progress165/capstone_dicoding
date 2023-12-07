import express from 'express'
//import { createReview } from '../controllers/reviewController.js';
mport { verifyUser } from '../utils/verifyToken.js';

const router = express.Router()

router.post('/:toursId', verifyUser,)

export default router;