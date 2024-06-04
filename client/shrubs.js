bodyEl = document.querySelector('body')
//gridContainer= document.querySelector('#grid-container')

async function getShrubs() {
    const res = await axios.get(`http://localhost:3001/shrubs`)

    const shrubData = res.data

    shrubData.forEach((shrub) => {
        console.log(shrub.commonName)
        const shrubCard = document.createElement('div')
        const shrubImg = document.createElement('img')
        const commonName = document.createElement('h3')
        const season = document.createElement('p')
        const habitat = document.createElement('p')
        shrubCard.classList.add('shrub-card')
        shrubImg.src = shrub.images
        commonName.innerHTML = shrub.commonName
        season.innerHTML = `Season: ${shrub.season}`
        habitat.innerHTML = `Habitat: ${shrub.habitat}`
        shrubCard.appendChild(shrubImg)
        shrubCard.appendChild(commonName)
        shrubCard.appendChild(season)
        shrubCard.appendChild(habitat)
        bodyEl.appendChild(shrubCard)
    })
}   


getShrubs()