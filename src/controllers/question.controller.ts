import { Request, Response } from "express";
import { notFound } from "../services/user-services/util";
import questionServices from "../services/question-services/question.services";

const { 
  getQuestionsService,  
  addQuestionService,
  updateQuestionService,
  deleteQuestionService
   } = questionServices();

const questionController = () => {
  const createQuestion = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const question = await addQuestionService(body);
      if (!question) {
        return notFound(0, "Question does not exist");
      }
      return res.status(200).json({ ok: true, question });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  const getQuestions = async (req: Request, res: Response) => {
    try {
      const questions = await getQuestionsService();
      if (!questions) {
        return notFound(0, "Questions does not exist");
      }
      return res.status(200).json({ ok: true, questions });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  const updateQuestion = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const updatedQuestion = await updateQuestionService(body);
      if (!updatedQuestion) {
        return notFound(0, "Question does not exist");
      }
      return res.status(200).json({ ok: true, updatedQuestion });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  const deleteQuestion = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      const deletedQuestion = await deleteQuestionService(body);
      if (!deletedQuestion) {
        return notFound(0, "Question does not exist");
      }
      return res.status(200).json({ ok: true, deletedQuestion });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return {
    createQuestion,
    getQuestions,
    updateQuestion,
    deleteQuestion
  }
}

export default questionController;