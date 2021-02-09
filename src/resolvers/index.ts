import HealthcheckResolver from "./healthCheckResolver";
import {RandomJokeInput} from "src/common/types/randomJokeInpt";
import {JokeCategoriesResponse, JokeResponse} from "src/common/types/responses";

const healthcheckResolver = new HealthcheckResolver();


export default {
  Query: {
    random_joke: (_: any, args: RandomJokeInput,  { dataSources }:any): Promise<JokeResponse> => {
      return dataSources.jokesProvider.shuffleCategory(args.category);
    },
    categories: (_: any, __: any, { dataSources }: any): Promise<JokeCategoriesResponse> => {
      return dataSources.jokesProvider.getJokeCategories();
    },
    health_check: (): string => healthcheckResolver.healthCheck()
  }
};
