const gridContainer = document.querySelector('#grid-container')

async function getTrees() {
    const res = await axios.get(`http://localhost:3001/trees`)

    const treeData = res.data

    treeData.forEach((tree) => {

        const treeCard = document.createElement('div')
        const treeImg = document.createElement('img')
        const commonName = document.createElement('h3')
        const scientificName = document.createElement('h3')
        const family = document.createElement('h3')
        const learnMore = document.createElement('h4')
        const description = document.createElement('p')
        const season = document.createElement('p')
        const habitat = document.createElement('p')
        const leaves = document.createElement('p')
        const petals = document.createElement('p')
        const bark = document.createElement('p')
        const height = document.createElement('p')

        treeCard.classList.add('tree-card')
       
        treeImg.src = tree.images
        commonName.innerHTML = tree.commonName
        scientificName.innerHTML = tree.scientificName
        scientificName.style.fontStyle = 'italic'
        family.innerHTML = tree.family
        learnMore.innerHTML = 'Learn more'
        description.innerHTML = tree.description
        season.innerHTML = `Season: ${tree.season}`
        habitat.innerHTML = `Habitat: ${tree.habitat}`
        leaves.innerHTML = `Leaves: ${tree.leaves}`
        petals.innerHTML = `Petals: ${tree.petals}`
        height.innerHTML = `Height: ${tree.height}`
        bark.innerHTML = `Bark: ${tree.bark}`
       
        scientificName.classList.add('hidden', `${tree._id}`)
        family.classList.add('hidden', `${tree._id}`)
        description.classList.add('hidden', `${tree._id}`)
        leaves.classList.add('hidden', `${tree._id}`)
        petals.classList.add('hidden', `${tree._id}`)
        height.classList.add('hidden', `${tree._id}`)
        bark.classList.add('hidden', `${tree._id}`)
        
        treeCard.appendChild(treeImg)
        treeCard.appendChild(commonName)
        treeCard.appendChild(scientificName)
        treeCard.appendChild(family)
        treeCard.appendChild(description)
        treeCard.appendChild(season)
        treeCard.appendChild(habitat)
        treeCard.appendChild(learnMore)
        treeCard.appendChild(leaves)
        treeCard.appendChild(petals)
        treeCard.appendChild(height)
        treeCard.appendChild(bark)

        learnMore.style.textDecoration = 'underline'
        learnMore.classList.add(`${tree._id}`)
        learnMore.addEventListener('click', showMoreInfo)

        gridContainer.appendChild(treeCard)
    })
}   

const showMoreInfo = (event) => {       
    let moreInfo = document.querySelectorAll('.hidden')
    console.log('working')
    moreInfo.forEach((info) => {
        if (info.classList.contains(`${event.target.classList}`))
            info.classList.toggle('hidden')
            event.target.classList.toggle('hidden')
    })
}    

getTrees()