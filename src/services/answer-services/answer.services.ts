import { IAnswer } from './../../models/answer/schema';
import AnswerModel from "../../models/answer/model";
import { notFound } from "../user-services/util";

const answerServices = ()=>{
    const getAnswers = async ()=>{
        try{
            const answers = await AnswerModel.find();
            if(!answers){
                return notFound(0, "Answers does not exist");
            }
            return Promise.resolve(answers);
        }catch(error){
            return Promise.reject(error);
        }
    }

    const addAnswer = async ({answerText, question, numberAnswer, isCorrect}: IAnswer)=>{
        try{
            const answer = await AnswerModel.create({answerText, question, numberAnswer, isCorrect });
            if(!answer){
                return notFound(0, "Answer does not exist");
            }
            return Promise.resolve(answer);
        }catch(error){
            return Promise.reject(error);
        }
    }
}