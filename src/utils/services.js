export default class Service {

  static get( path ) {
    const initVar = { 
      method: 'GET',
      headers: {},
      mode: 'cors',
      cache: 'default' 
    };
    return fetch(path, initVar)
      .then(res => res.json())
      .then(data => data)
      .catch(console.error)
  }

  static async list() {
    const res = await this.get('https://pokeapi.co/api/v2/pokemon/')
    // console.log(res.results)
    return res.results
  }
}