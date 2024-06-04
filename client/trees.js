const gridContainer = document.querySelector('#grid-container')
const buttonEl = document.querySelector('button')

//const switchEl = document.querySelector('.switch')

async function getTrees() {
    const res = await axios.get(`http://localhost:3001/trees`)

    const treeData = res.data

    treeData.forEach((tree) => {

        const treeCard = document.createElement('div')
        const treeImg = document.createElement('img')
        const commonName = document.createElement('h3')
        const scientificName = document.createElement('h3')
        const family = document.createElement('h3')
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
        description.innerHTML = tree.description
        season.innerHTML = `Season: ${tree.season}`
        habitat.innerHTML = `Habitat: ${tree.habitat}`
        leaves.innerHTML = `Leaves: ${tree.leaves}`
        petals.innerHTML = `Petals: ${tree.petals}`
        height.innerHTML = `Height: ${tree.height}`
        bark.innerHTML = `Bark: ${tree.bark}`
       
        scientificName.classList.add('hidden')
        family.classList.add('hidden')
        description.classList.add('hidden')
        leaves.classList.add('hidden')
        petals.classList.add('hidden')
        height.classList.add('hidden')
        bark.classList.add('hidden')
        
        treeCard.appendChild(treeImg)
        treeCard.appendChild(commonName)
        treeCard.appendChild(scientificName)
        treeCard.appendChild(family)
        treeCard.appendChild(description)
        treeCard.appendChild(season)
        treeCard.appendChild(habitat)
        treeCard.appendChild(leaves)
        treeCard.appendChild(petals)
        treeCard.appendChild(height)
        treeCard.appendChild(bark)

        gridContainer.appendChild(treeCard)
    })
}   

const activateNerdMode = (event) => {
    //event.preventDefault() //clicks once but now button doesn't change
    
    let moreInfo = document.querySelectorAll('.hidden')
    console.log(moreInfo)
    moreInfo.forEach((element) => {
        element.classList.toggle('hidden')
    })   
}    


buttonEl.addEventListener('click', activateNerdMode)

getTrees()