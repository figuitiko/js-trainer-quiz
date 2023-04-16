import express from 'express';
const router = express.Router();

import questionController from '../controllers/question.controller';
import checkJwt from '../middleWares/checkJwt';


const { getQuestions, createQuestion, updateQuestion, deleteQuestion } = questionController();

router.get('/api/question', getQuestions);
router.post('/api/question', createQuestion);
router.put('/api/question', updateQuestion);
router.delete('/api/question', deleteQuestion);

export { router as questionRouter};