import  {JokeCategoriesResponse, JokeResponse} from 'src/common/types/responses';
import { RESTDataSource } from 'apollo-datasource-rest';


interface ChuckNorrisApiJokeDTO {
  id: string;
  value: string;
  url: string;
  icon_url: string;
}

interface ChuckNorrisJokeCategoriesDTO {
  [index: string]: string;
}

export default class ChuckNorrisJokesProvider extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes";
  }

  public async shuffleCategory(categoryName: string): Promise<JokeResponse> {
    const resp = await this.get(`random`, { category: categoryName });
    const { id, value, url, icon_url } = <ChuckNorrisApiJokeDTO>(resp);
    return {
      status: 200,
      value: {
        id,
        text: value,
        joke_url: url,
        icon_url
      }
    };
  }

  public async getJokeCategories(): Promise<JokeCategoriesResponse> {
    const resp = await this.get(`categories`);
    const categories = <ChuckNorrisJokeCategoriesDTO>(resp);
    return {
      status: 200,
      value: categories
    };
  }
}
