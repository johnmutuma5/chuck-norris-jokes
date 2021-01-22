import JokesProvider from "src/common/interfaces/jokesProvider";

export default class ChuckNorrisJokesProvider implements JokesProvider {
  throwRandomJoke () {
    return Promise.resolve({
      value: 'Look at chuck norris, haha!'
    }) 
  }
}
