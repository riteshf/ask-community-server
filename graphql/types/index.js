import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Question from "./Question";

const typeDefs = [User, Question];

export default mergeTypes(typeDefs, { all: true });