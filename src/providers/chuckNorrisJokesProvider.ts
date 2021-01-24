import fetch from 'node-fetch';
import Joke from 'src/common/types/joke';
import OurResponse from 'src/common/types/response';
import JokesProvider from '../common/interfaces/jokesProvider';

const API_BASE_URL = 'https://api.chucknorris.io';
interface ChuckNorrisApiJokeDTO {
  id: string;
  value: string;
  url: string;
  icon_url: string;
}

export default class ChuckNorrisJokesProvider implements JokesProvider {

  public async shuffleCategory(categoryName: string): Promise<OurResponse<Joke>> {
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

  public async getJokeCategories(): Promise<OurResponse<string[]>> {
    const resp = await fetch(`${API_BASE_URL}/jokes/categories`);
    const categories = <string[]>(await resp.json());
    return {
      status: resp.status,
      value: categories
    };
  }
}
