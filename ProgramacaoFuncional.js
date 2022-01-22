const axios = require('axios')
    
async function getWhatToDo(id){
    const resp = await axios.get(`http://www.boredapi.com/api/activity?key=${id}`)
    return resp.data
}

async function getWhatToDoBy(type){
    const resp = await axios.get(`http://www.boredapi.com/api/activity?type=${type}`)
    return resp.data
}

(async function(){
    const thingsToDo = await getWhatToDo('3943506')
    console.log(thingsToDo)
    const type = await getWhatToDoBy(thingsToDo.type)
    console.log(type)
})()
