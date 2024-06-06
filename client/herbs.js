const gridContainer= document.querySelector('#grid-container')

async function getHerbs() {
    const res = await axios.get(`http://localhost:3001/herbs`)

    const herbData = res.data

    herbData.forEach((herb) => {
        
        const herbCard = document.createElement('div')
        const herbImg = document.createElement('img')
        const commonName = document.createElement('h3')
        const scientificName = document.createElement('h3')
        const family = document.createElement('h3')
        const learnMore = document.createElement('h4')
        const description = document.createElement('p')
        const season = document.createElement('p')
        const habitat = document.createElement('p')
        const leaves = document.createElement('p')
        const petals = document.createElement('p')
        const height = document.createElement('p')

        herbCard.classList.add('herb-card')

        herbImg.src = herb.images
        commonName.innerHTML = herb.commonName
        scientificName.innerHTML = herb.scientificName
        scientificName.style.fontStyle = 'italic'
        family.innerHTML = herb.family
        learnMore.innerHTML = 'Learn more'
        description.innerHTML = herb.description
        season.innerHTML = `Season: ${herb.season}`
        habitat.innerHTML = `Habitat: ${herb.habitat}`
        leaves.innerHTML = `Leaves: ${herb.leaves}`
        petals.innerHTML = `Petals: ${herb.petals}`
        height.innerHTML = `Height: ${herb.height}`

        scientificName.classList.add('hidden')
        family.classList.add('hidden')
        description.classList.add('hidden')
        leaves.classList.add('hidden')
        petals.classList.add('hidden')
        height.classList.add('hidden')
        
        herbCard.appendChild(herbImg)
        herbCard.appendChild(commonName)
        herbCard.appendChild(scientificName)
        herbCard.appendChild(family)
        herbCard.appendChild(description)
        herbCard.appendChild(season)
        herbCard.appendChild(habitat)
        herbCard.appendChild(learnMore)
        herbCard.appendChild(leaves)
        herbCard.appendChild(petals)
        herbCard.appendChild(height)

        learnMore.style.textDecoration = 'underline'
        //learnMore.addEventListener('click', showMoreInfo)

        gridContainer.appendChild(herbCard)
    })
}   

getHerbs()