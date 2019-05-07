import mongoose from "mongoose";

const Schema = mongoose.Schema;


// Create the Comment Schema.
const CommentSchema = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Create the Answer Schema.
const AnswerSchema = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    comments: [CommentSchema],
});


// Create the Question Schema.
const questionSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    answers: [AnswerSchema],
    comments: [CommentSchema],
});

const Question = mongoose.model("Question", questionSchema);

export { Question };