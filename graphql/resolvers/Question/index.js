// The User schema.
import {Question} from "../../../models/Question";

export default {
    Query: {
        getQuestions: () => {
            return new Promise((resolve, reject) => {
                Question.find({})
                    .populate()
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        getQuestion: (root, args) => {
            return new Promise((resolve, reject) => {
                Question.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
    },
    Mutation: {
        askQuestion: (root, { title, content }) => {
            const newQuestion = new Question({ title, content});
            return new Promise((resolve, reject) => {
                newQuestion.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        answerQuestion: (root, {_id, content}) => {
            return new Promise((resolve, reject) => {
                console.log(_id, {content: content,});
                Question.findOneAndUpdate({_id: _id}, {$push: {answers: {content: content,}}}, (err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};