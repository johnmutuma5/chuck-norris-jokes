import fetch from 'node-fetch';
import  {JokeCategoriesResponse, JokeResponse} from 'src/common/types/responses';
import JokesProvider from '../common/interfaces/jokesProvider';

const API_BASE_URL = 'https://api.chucknorris.io';
interface ChuckNorrisApiJokeDTO {
  id: string;
  value: string;
  url: string;
  icon_url: string;
}

interface ChuckNorrisJokeCategoriesDTO {
  [index: string]: string;
}

export default class ChuckNorrisJokesProvider implements JokesProvider {

  public async shuffleCategory(categoryName: string): Promise<JokeResponse> {
    const resp = await fetch(`${API_BASE_URL}/jokes/random?category=${categoryName}`);
    const { id, value, url, icon_url } = <ChuckNorrisApiJokeDTO>(await resp.json());
    return {
      status: resp.status,
      value: {
        id,
        text: value,
        joke_url: url,
        icon_url
      }
    };
  }

  public async getJokeCategories(): Promise<JokeCategoriesResponse> {
    const resp = await fetch(`${API_BASE_URL}/jokes/categories`);
    const categories = <ChuckNorrisJokeCategoriesDTO>(await resp.json());
    return {
      status: resp.status,
      value: categories
    };
  }
}
