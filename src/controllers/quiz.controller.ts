import { notFound } from "../services/user-services/util";
import quizServices  from "../services/quiz-services/quiz.services";
import { Request, Response } from "express";
const { getQuizService, createQuizService, updateQuizService, addQuestionToQuizService, removeQuestionFromQuizService, removeQuizService  } = quizServices();

const quizController = ()=>{
  const getQuiz = async (req: Request, res: Response) => {
    const { params: { type } } = req;
    try {
      const quiz = await getQuizService(type);
      if (!quiz) {
        return notFound(0, "Quiz does not exist");
      }
      return res.status(200).json({ ok: true, quiz });
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const createQuiz = async (req: Request, res: Response) => {
    const { body: { name, description, type } } = req;
    try {
      const quiz = await createQuizService({ name, description, type });
      if (!quiz) {
        return notFound(0, "Quiz does not exist");
      }
      return res.status(200).json({ ok: true, quiz });
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const updatedQuiz = async (req: Request, res: Response) => {
    const { body: { name, description, _id: id } } = req;
    try {
      const quiz = await updateQuizService({ name, description, _id:id });
      if (!quiz) {
        return notFound(0, "Quiz does not exist");
      }
      return res.status(200).json({ ok: true, quiz });
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const  addQuestionToQuiz = async (req: Request, res: Response) => {
    const { body } = req;
   
    try {

      const quiz = await addQuestionToQuizService(body);
      if (!quiz) {
        return notFound(0, "Quiz does not exist");
      }
      return res.status(200).json({ ok: true, quiz });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  const removeQuestionFromQuiz = async (req: Request, res: Response) => {
    const { body } = req;   
    try {

      const quiz = await removeQuestionFromQuizService(body);
      if (!quiz) {
        return notFound(0, "Quiz does not exist");
      }
      return res.status(200).json({ ok: true, quiz });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  const removeQuiz = async (req: Request, res: Response) => {
    const { body } = req;   
    try {

      const quiz = await removeQuizService(body);
      if (!quiz) {
        return notFound(0, "Quiz does not exist");
      }
      return res.status(200).json({ ok: true, quiz });
    } catch (error) {
      return Promise.reject(error);
    }
  }
 
  return { getQuiz, createQuiz, updatedQuiz, addQuestionToQuiz, removeQuestionFromQuiz, removeQuiz };
}

export default quizController;