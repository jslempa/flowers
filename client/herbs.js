const gridContainer= document.querySelector('#grid-container')

async function getHerbs() {
    const res = await axios.get(`http://localhost:3001/herbs`)

    const herbData = res.data

    herbData.forEach((herb) => {
        
        const herbCard = document.createElement('div')
        const herbImg = document.createElement('img')
        const commonName = document.createElement('h3')
        const season = document.createElement('p')
        const habitat = document.createElement('p')
        const learnMoreContainer = document.createElement('div')
        const learnMore = document.createElement('h4')
        const scientificName = document.createElement('h3')
        const family = document.createElement('h3')       
        const description = document.createElement('p')        
        const leaves = document.createElement('p')
        const petals = document.createElement('p')
        const height = document.createElement('p')

        herbCard.classList.add('herb-card')
        learnMoreContainer.classList.add('hidden', `${herb._id}`)

        herbImg.src = herb.images
        commonName.innerHTML = herb.commonName
        season.innerHTML = `Season: ${herb.season}`
        habitat.innerHTML = `Habitat: ${herb.habitat}`
        scientificName.innerHTML = herb.scientificName
        scientificName.style.fontStyle = 'italic'
        family.innerHTML = herb.family
        learnMore.innerHTML = 'Learn more'
        description.innerHTML = herb.description        
        leaves.innerHTML = `Leaves: ${herb.leaves}`
        petals.innerHTML = `Petals: ${herb.petals}`
        height.innerHTML = `Height: ${herb.height}`
            
        herbCard.appendChild(herbImg)
        herbCard.appendChild(commonName)
        herbCard.appendChild(season)
        herbCard.appendChild(habitat)
        herbCard.appendChild(learnMore)
        herbCard.appendChild(learnMoreContainer)

        learnMoreContainer.appendChild(scientificName)
        learnMoreContainer.appendChild(family)
        learnMoreContainer.appendChild(description)    
        learnMoreContainer.appendChild(leaves)
        learnMoreContainer.appendChild(petals)
        learnMoreContainer.appendChild(height)

        learnMore.style.textDecoration = 'underline'
        learnMore.classList.add(`${herb._id}`)
        learnMore.addEventListener('click', showMoreInfo)

        learnMoreContainer.style.border = '2px solid black'
        learnMoreContainer.style.borderRadius = '10px'
        learnMoreContainer.style.padding = '0px 10px'
        learnMoreContainer.style.backgroundColor = '#f6e7cb'       

        gridContainer.appendChild(herbCard)
    })
}  

const showMoreInfo = (event) => {       
    let moreInfo = document.querySelectorAll('.hidden')
    console.log(moreInfo)
    console.log('working')
    moreInfo.forEach((info) => {
        if (info.classList.contains(`${event.target.classList}`))
            info.classList.toggle('hidden')
    })
}    

getHerbs()