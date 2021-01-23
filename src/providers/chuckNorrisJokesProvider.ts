import fetch from 'node-fetch';
import JokeResponse from 'src/common/types/jokeResponse';
import JokesProvider from '../common/interfaces/jokesProvider';

const API_BASE_URL = 'https://api.chucknorris.io';
interface ChuckNorrisApiJokeDTO {
  id: string;
  value: string;
  url: string;
  icon_url: string;
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
}
