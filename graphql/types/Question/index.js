
export default `
  scalar Date 

  type Answer {
    _id: ID!
    content: String!
    createdAt: Date
    question: Question
    comments: [Comment]
  }

  type Comment {
    _id: ID!
    content: String
    createdAt: Date
  }

  type Question {
    _id: ID!
    title: String!
    content: String
    createdAt: Date
    lastUpdatedAt: Date
    answers: [Answer]
    comments: [Comment]
  }
  type Query {
    getQuestions: [Question]
    getQuestion(_id: ID!): Question
  }
  type Mutation {
    askQuestion(title: String!, content: String): Question
    answerQuestion(questionId: ID!, content: String!): Answer
    commentQuestion(questionId: ID!, content: String!): Comment
    commentAnswer(questionId: ID!, answerId: ID!, content: String!): Comment
  }
`;