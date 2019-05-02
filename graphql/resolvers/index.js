import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User";
import Question from "./Question";

const resolvers = [User, Question];

export default mergeResolvers(resolvers);