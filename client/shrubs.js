 const gridContainer= document.querySelector('#grid-container')

async function getShrubs() {
    const res = await axios.get(`http://localhost:3001/shrubs`)

    const shrubData = res.data

    shrubData.forEach((shrub) => {
        
        const shrubCard = document.createElement('div')
        const shrubImg = document.createElement('img')
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

        shrubCard.classList.add('shrub-card')
        learnMoreContainer.classList.add('hidden', `${shrub._id}`)

        shrubImg.src = shrub.images
        commonName.innerHTML = shrub.commonName
        season.innerHTML = `Season: ${shrub.season}`
        habitat.innerHTML = `Habitat: ${shrub.habitat}`
        learnMore.innerHTML = 'Learn more'
        scientificName.innerHTML = shrub.scientificName
        scientificName.style.fontStyle = 'italic'
        family.innerHTML = shrub.family        
        description.innerHTML = shrub.description
        leaves.innerHTML = `Leaves: ${shrub.leaves}`
        petals.innerHTML = `Petals: ${shrub.petals}`
        height.innerHTML = `Height: ${shrub.height}`

        shrubCard.appendChild(shrubImg)
        shrubCard.appendChild(commonName)
        shrubCard.appendChild(season)
        shrubCard.appendChild(habitat)
        shrubCard.appendChild(learnMore)
        shrubCard.appendChild(learnMoreContainer)

        learnMoreContainer.appendChild(scientificName)
        learnMoreContainer.appendChild(family)
        learnMoreContainer.appendChild(description)    
        learnMoreContainer.appendChild(leaves)
        learnMoreContainer.appendChild(petals)
        learnMoreContainer.appendChild(height)

        learnMore.style.textDecoration = 'underline'
        learnMore.classList.add(`${shrub._id}`)
        learnMore.addEventListener('click', showMoreInfo)

        learnMoreContainer.style.border = '2px solid black'
        learnMoreContainer.style.borderRadius = '10px'
        learnMoreContainer.style.padding = '0px 10px'
        learnMoreContainer.style.backgroundColor = '#f6e7cb'         

        gridContainer.appendChild(shrubCard)
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

getShrubs()