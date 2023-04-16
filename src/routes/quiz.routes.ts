import express from 'express';
const router = express.Router();

import quizController from '../controllers/quiz.controller';

const { getQuiz, createQuiz, updatedQuiz, addQuestionToQuiz, removeQuestionFromQuiz, removeQuiz } = quizController();

router.get('/api/quiz', getQuiz);
router.post('/api/quiz', createQuiz);
router.put('/api/quiz', updatedQuiz);
router.put('/api/quiz/addQuestion', addQuestionToQuiz);
router.put('/api/quiz/removeQuestion', removeQuestionFromQuiz);
router.delete('/api/quiz', removeQuiz);

export { router as quizRouter};

