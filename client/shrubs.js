 const gridContainer= document.querySelector('#grid-container')

async function getShrubs() {
    const res = await axios.get(`http://localhost:3001/shrubs`)

    const shrubData = res.data

    shrubData.forEach((shrub) => {
        
        const shrubCard = document.createElement('div')
        const shrubImg = document.createElement('img')
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

        shrubCard.classList.add('shrub-card')

        shrubImg.src = shrub.images
        commonName.innerHTML = shrub.commonName
        scientificName.innerHTML = shrub.scientificName
        scientificName.style.fontStyle = 'italic'
        family.innerHTML = shrub.family
        learnMore.innerHTML = 'Learn more'
        description.innerHTML = shrub.description
        season.innerHTML = `Season: ${shrub.season}`
        habitat.innerHTML = `Habitat: ${shrub.habitat}`
        leaves.innerHTML = `Leaves: ${shrub.leaves}`
        petals.innerHTML = `Petals: ${shrub.petals}`
        height.innerHTML = `Height: ${shrub.height}`

        scientificName.classList.add('hidden')
        family.classList.add('hidden')
        description.classList.add('hidden')
        leaves.classList.add('hidden')
        petals.classList.add('hidden')
        height.classList.add('hidden')

        shrubCard.appendChild(shrubImg)
        shrubCard.appendChild(commonName)
        shrubCard.appendChild(scientificName)
        shrubCard.appendChild(family)
        shrubCard.appendChild(description)
        shrubCard.appendChild(season)
        shrubCard.appendChild(habitat)
        shrubCard.appendChild(learnMore)
        shrubCard.appendChild(leaves)
        shrubCard.appendChild(petals)
        shrubCard.appendChild(height)

        learnMore.style.textDecoration = 'underline'
        //learnMore.addEventListener('click', showMoreInfo)

        gridContainer.appendChild(shrubCard)
    })
}   

getShrubs()