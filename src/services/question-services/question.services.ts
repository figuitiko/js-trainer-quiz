import { IQuestion } from './../../models/questions/schema';
import QuestionModel from "../../models/questions/model";
import { notFound } from "../user-services/util";

const questionServices = ()=>{
  const getQuestionsService = async () => {
    try {
      const questions = await QuestionModel.find();
      if (!questions) {
        return notFound(0, "Questions does not exist");
      }
      return Promise.resolve(questions);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const addQuestionService = async ({questionText, numberQuestion}: IQuestion) => {
    try {
      const question = await QuestionModel.create({ questionText,numberQuestion });
      if (!question) {
        return notFound(0, "Question does not exist");
      }
      return Promise.resolve(question);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const updateQuestionService = async ({questionText, numberQuestion, _id: id}: IQuestion) => {
    try{
      const dataToUpdate = {
        ...questionText && { questionText},
        ...numberQuestion && { numberQuestion},        
      };

      const updatedQuestion = await QuestionModel.findByIdAndUpdate(id, dataToUpdate, { new: true });
      if (!updatedQuestion) {
        return notFound(0, "Question does not exist");
      }
      return Promise.resolve(updatedQuestion);
    }catch(error){
      return Promise.reject(error);
    }
  }

  const deleteQuestionService = async ({_id: id}: IQuestion) => {
    try{
      const deletedQuestion = await QuestionModel.findByIdAndDelete(id);
      if (!deletedQuestion) {
        return notFound(0, "Question does not exist");
      }
      return Promise.resolve(deletedQuestion);
    }catch(error){
      return Promise.reject(error);
    }
  }

  return {
    getQuestionsService,
    addQuestionService,
    updateQuestionService,
    deleteQuestionService   
  }
}

export default questionServices;