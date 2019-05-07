
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
    answers: [Answer]
    comments: [Comment]
  }
  type Query {
    getQuestions: [Question]
    getQuestion(_id: ID!): Question
  }
  type Mutation {
    askQuestion(title: String!, content: String): Question
    answerQuestion(_id: ID!, content: String!): Answer
    commentQuestion(_id: ID!, content: String!): Comment
    commentAnswer(_id: ID!, content: String!): Comment
  }
`;