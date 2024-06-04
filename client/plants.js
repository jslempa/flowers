body = document.querySelector('body')

async function getTrees() {
    const res = await axios.get(`http://localhost:3001/trees`)

    const treeData = res.data

    treeData.forEach((tree) => {
        console.log(tree.commonName)
        const plantContainer = document.createElement('div')
        const treeImg = document.createElement('img')
        const commonName = document.createElement('h3')
        const season = document.createElement('p')
        const habitat = document.createElement('p')
        treeImg.src = tree.images
        commonName.innerHTML = tree.commonName
        season.innerHTML = tree.season
        habitat.innerHTML = tree.habitat
        plantContainer.appendChild(treeImg)
        plantContainer.appendChild(commonName)
        plantContainer.appendChild(season)
        plantContainer.appendChild(habitat)
        body.appendChild(plantContainer)
    })
}   


getTrees()