const axios = require('axios')

//AWAIT
// async function obterPersonagem(id){
//    const resp = await axios.get(`https://swapi.dev/api/people/${id}`)
//     return resp.data
// }

// (async function(){
//     const dados = await obterPersonagem(1)
//     console.log(dados)
// })()

//then encadeadas 
axios.get(`https://swapi.dev/api/people/2`)
    .then(resp => resp.data)
    .then(personagem => personagem.films[0])
    .then(filmeUrl=> axios.get(filmeUrl))
    .then(resp => resp.data)
    .then(filme => filme.planets[2])
    .then(planetaUrl => axios.get(planetaUrl))
    .then(resp => console.log(resp.data))

// const axios = require('axios')
    
// async function getWhatToDo(id){
//     const resp = await axios.get(`http://www.boredapi.com/api/activity?key=${id}`)
//     return resp.data
// }

// async function getWhatToDoBy(type){
//     const resp = await axios.get(`http://www.boredapi.com/api/activity?type=${type}`)
//     return resp.data
// }

// (async function(){
//     const thingsToDo = await getWhatToDo('3943506')
//     console.log(thingsToDo)
//     const type = await getWhatToDoBy(thingsToDo.type)
//     console.log(type)
// })()
