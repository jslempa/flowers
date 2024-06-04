bodyEl = document.querySelector('body')
//gridContainer= document.querySelector('#grid-container')

async function getTrees() {
    const res = await axios.get(`http://localhost:3001/trees`)

    const treeData = res.data

    treeData.forEach((tree) => {
        console.log(tree.commonName)
        const treeCard = document.createElement('div')
        const treeImg = document.createElement('img')
        const commonName = document.createElement('h3')
        const season = document.createElement('p')
        const habitat = document.createElement('p')
        treeCard.classList.add('tree-card')
        treeImg.src = tree.images
        commonName.innerHTML = tree.commonName
        season.innerHTML = `Season: ${tree.season}`
        habitat.innerHTML = `Habitat: ${tree.habitat}`
        treeCard.appendChild(treeImg)
        treeCard.appendChild(commonName)
        treeCard.appendChild(season)
        treeCard.appendChild(habitat)
        bodyEl.appendChild(treeCard)
    })
}   


getTrees()