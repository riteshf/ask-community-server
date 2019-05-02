// The User schema.
import Question from "../../../models/Question";

export default {
    Query: {
        question: (root, args) => {
            return new Promise((resolve, reject) => {
                Question.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        questions: () => {
            return new Promise((resolve, reject) => {
                Question.find({})
                    .populate()
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        }
    },
    Mutation: {
        addQuestion: (root, { title, content }) => {
            const newQuestion = new Question({ title, content});

            return new Promise((resolve, reject) => {
                newQuestion.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        deleteQuestion: (root, args) => {
            return new Promise((resolve, reject) => {
                User.findOneAndRemove(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};