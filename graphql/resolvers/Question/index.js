// The User schema.
import { Question } from "../../../models/Question";

export default {
    Query: {
        getQuestions: () => {
            return new Promise((resolve, reject) => {
                Question.find({}).sort([['createdAt', -1]])
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
        getQuestionByTitle: (root, { title }) => {
            console.log(title);
            const searchCriteria = {
                title: new RegExp(title, "i")
            }
            return new Promise((resolve, reject) => {
                Question.find(searchCriteria).exec((err, res) => {
                    console.log("res", res);
                    err ? reject(err) : resolve(res);
                });
            });
        },
    },
    Mutation: {
        // askQuestion(title: String!, content: String): Question
        askQuestion: (root, { title, content }) => {
            const newQuestion = new Question({ title, content });
            return new Promise((resolve, reject) => {
                newQuestion.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        // answerQuestion(_id: ID!, content: String!): Answer
        answerQuestion: (root, { questionId, content }) => {
            return new Promise((resolve, reject) => {
                Question.findOneAndUpdate(
                    { _id: questionId },
                    {
                        $push: { answers: { content: content, } },
                        $set: { lastUpdatedAt: Date.now() },
                    },
                    (err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        // commentQuestion(_id: ID!, content: String!): Comment
        commentQuestion: (root, { questionId, content }) => {
            return new Promise((resolve, reject) => {
                Question.findOneAndUpdate(
                    { _id: questionId },
                    {
                        $push: { comments: { content: content, } },
                        $set: { lastUpdatedAt: Date.now() },
                    },
                    (err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        // commentAnswer(_id: ID!, content: String!): Comment
        commentAnswer: (root, { questionId, commentId, content }) => {
            return new Promise((resolve, reject) => {
                Question.findOne({ _id: questionId })
                    .findOneAndUpdate(
                        { _id: commentId },
                        { $push: { answers: { content: content, } } },
                        (err, res) => {
                            err ? reject(err) : resolve(res);
                        });
            });
        },
    }
};