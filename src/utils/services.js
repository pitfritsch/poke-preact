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

  static async list(offset) {
    const res = await this.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
    return res
  }
  
  static async getPokemon(name) {
    const res = await this.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return res
  }

  static async getImageBlob(url) {
    return fetch(url)
    .then(resp => resp.blob())
    .then(myBlob => {
      var obj = URL.createObjectURL(myBlob)
      return obj
    })
  }

}