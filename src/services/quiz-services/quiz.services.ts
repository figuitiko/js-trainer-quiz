import { Request } from 'express';
import QuizModel from "../../models/quiz/model";
import { notFound } from '../user-services/util';
import { IQuiz } from '../../models/quiz/schema';
import { IQuestion } from '../../models/questions/schema';

const quizServices = () => {
    const getQuizService = async (type:string) => {
      try {
        const quiz = await QuizModel.findOne({ type });
        if (!quiz) {
          return notFound(0, "Quiz does not exist");
        }
        return Promise.resolve(quiz);
        
      } catch (error) {
        return { ok: false, error: "wrong password"}
      }
    };
    const createQuizService = async ({name, description, type}:Pick<IQuiz, 'name'|'description'|'type' >) => {
      try {
        const quizByType = await QuizModel.findOne({ type });
        if (quizByType) {
          return { ok: false, error: "quiz already exists" }
        }
        const quiz = await QuizModel.create({ name, description, type });
        if (!quiz) {
          return notFound(0, "Quiz does not exist");
        }
        return Promise.resolve(quiz);
        
      } catch (error) {
        return { ok: false, error: "wrong password"}
      }
    };

    const updateQuizService = async ({name, description, _id: id}:Pick<IQuiz, 'name'|'description'|'_id' >) => {
      try{
        const dataToUpdate = { 
          ...name && { name}, 
          ...description && { description}, 
        };          

        const updatedQuiz = await QuizModel.updateOne({ id }, dataToUpdate, { new: true });
        if (!updatedQuiz) {
          return notFound(0, "Quiz does not exist");
        }
        return Promise.resolve(updatedQuiz);
      }catch(error){
       return { ok: false, error: "wrong password"}
      }
    };

    const addQuestionToQuizService = async ({_id: idQuiz, _id: idQuestion}:Pick<IQuiz | IQuestion, '_id' | '_id' >) => {
      try{
        const updatedQuiz = await  QuizModel.updateOne({ idQuiz }, { $push: { questions: idQuestion } }, { new: true });
        if (!updatedQuiz) {
          return notFound(0, "Quiz does not exist");
        }
        return Promise.resolve(updatedQuiz);
      }catch(error){
       return { ok: false, error: "wrong password"}
      }
    };
    const removeQuestionFromQuizService = async ({_id: idQuiz, _id: idQuestion}:Pick<IQuiz | IQuestion, '_id' | '_id' >) => {
      try{
        const updatedQuiz = await QuizModel.updateOne({ idQuiz }, { $pull: { questions: idQuestion } }, { new: true });
        if (!updatedQuiz) {
          return notFound(0, "Quiz does not exist");
        }
        return Promise.resolve(updatedQuiz);
      }catch(error){
       return { ok: false, error: "wrong password"}
      }
    };
    const removeQuizService = async ({_id: id}:Pick<IQuiz, '_id' >) => {
      try{
        const removedQuiz  = await  QuizModel.findByIdAndRemove(id);
        if (!removedQuiz) {
          return notFound(0, "Quiz does not exist");
        }
        return Promise.resolve(removedQuiz);

      }catch(error){
        return { ok: false, error: "wrong password"}
      }
    };
   
    return { getQuizService , createQuizService, updateQuizService, addQuestionToQuizService, removeQuestionFromQuizService, removeQuizService };
}

export default quizServices;