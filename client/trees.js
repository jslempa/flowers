const gridContainer = document.querySelector('#grid-container')

async function getTrees() {
    const res = await axios.get(`http://localhost:3001/trees`)

    const treeData = res.data

    treeData.forEach((tree) => {

        const treeCard = document.createElement('div')
        const treeImg = document.createElement('img')
        const commonName = document.createElement('h3')
        const season = document.createElement('p')
        const habitat = document.createElement('p')
        const fragrant = document.createElement('p')
        const learnMoreContainer = document.createElement('div')
        const learnMore = document.createElement('h4')
        const scientificName = document.createElement('h3')
        const family = document.createElement('h3')        
        const description = document.createElement('p')        
        const leaves = document.createElement('p')
        const petals = document.createElement('p')
        const bark = document.createElement('p')
        const height = document.createElement('p')

        treeCard.classList.add('tree-card')
        learnMoreContainer.classList.add('hidden', `${tree._id}`)
       
        treeImg.src = tree.images
        commonName.innerHTML = tree.commonName
        season.innerHTML = `Season: ${tree.season}`
        habitat.innerHTML = `Habitat: ${tree.habitat}`
        fragrant.innerHTML = tree.fragrant ? 'Fragrant: Yes':'Fragrant: No'
        learnMore.innerHTML = 'Learn more'
        scientificName.innerHTML = tree.scientificName
        scientificName.style.fontStyle = 'italic'
        family.innerHTML = tree.family        
        description.innerHTML = tree.description
        leaves.innerHTML = `Leaves: ${tree.leaves}`
        petals.innerHTML = `Petals: ${tree.petals}`
        height.innerHTML = `Height: ${tree.height}`
        bark.innerHTML = `Bark: ${tree.bark}`
        
        treeCard.appendChild(treeImg)
        treeCard.appendChild(commonName)
        treeCard.appendChild(season)
        treeCard.appendChild(habitat)
        treeCard.appendChild(fragrant)
        treeCard.appendChild(learnMore)
        treeCard.appendChild(learnMoreContainer)

        learnMoreContainer.appendChild(scientificName)
        learnMoreContainer.appendChild(family)
        learnMoreContainer.appendChild(description)    
        learnMoreContainer.appendChild(leaves)
        learnMoreContainer.appendChild(petals)
        learnMoreContainer.appendChild(height)
        learnMoreContainer.appendChild(bark)

        learnMore.style.textDecoration = 'underline'
        learnMore.classList.add(`${tree._id}`)
        learnMore.addEventListener('click', showMoreInfo)

        learnMoreContainer.style.border = '2px solid black'
        learnMoreContainer.style.borderRadius = '10px'
        learnMoreContainer.style.padding = '0px 10px'
        learnMoreContainer.style.backgroundColor = '#f6e7cb'

        gridContainer.appendChild(treeCard)
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

getTrees()