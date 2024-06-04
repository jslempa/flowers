bodyEl = document.querySelector('body')
//gridContainer= document.querySelector('#grid-container')

async function getHerbs() {
    const res = await axios.get(`http://localhost:3001/herbs`)

    const herbData = res.data

    herbData.forEach((herb) => {
        console.log(herb.commonName)
        const herbCard = document.createElement('div')
        const herbImg = document.createElement('img')
        const commonName = document.createElement('h3')
        const season = document.createElement('p')
        const habitat = document.createElement('p')
        herbCard.classList.add('herb-card')
        herbImg.src = herb.images
        commonName.innerHTML = herb.commonName
        season.innerHTML = `Season: ${herb.season}`
        habitat.innerHTML = `Habitat: ${herb.habitat}`
        herbCard.appendChild(herbImg)
        herbCard.appendChild(commonName)
        herbCard.appendChild(season)
        herbCard.appendChild(habitat)
        bodyEl.appendChild(herbCard)
    })
}   


getHerbs()