testImg = document.querySelector('.test')

async function getTrees() {
    const res = await axios.get(`http://localhost:3001/trees`)

    testImg.src = res.data[0].images
}   

async function getShrubs() {
    const res = await axios.get(`http://localhost:3001/shrubs`)
}    

async function getHerbs() {
    const res = await axios.get(`http://localhost:3001/herbs`)
}    


getTrees()