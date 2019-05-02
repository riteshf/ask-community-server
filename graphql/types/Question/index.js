
export default `
  scalar Date 

  type Answer {
    content: String!
    createdAt: Date
    question: Question
    comments: [Comment]
  }

  type Comment {
    id: String!
    content: String
    createdAt: Date
  }

  type Question {
    title: String!
    content: String
    createdAt: Date
    answers: [Answer]
    comments: [Comment]
  }
  type Query {
    question(title: String!): Question
    questions: [Question]
  }
  type Mutation {
    addQuestion(title: String!, content: String): Question
    deleteQuestion(id: String!): Question
    getQuestion(title: String!): Question
    answerQuestion(title: String!): Question
    commentQuestion(title: String!): Question
  }
`;