treeBtn = document.querySelector('#trees')
shrubBtn = document.querySelector('#shrubs')
herbsBtn = document.querySelector('#herbs')

const goToTreePage = () => {
    window.location.href = 'http://localhost:5500/client/trees.html'
}

const goToShrubPage = () => {
    window.location.href = 'http://localhost:5500/client/shrubs.html'
}

const goToHerbPage = () => {
    window.location.href = 'http://localhost:5500/client/herbs.html'
}

treeBtn.addEventListener('click', goToTreePage)
shrubBtn.addEventListener('click', goToShrubPage)
herbsBtn.addEventListener('click', goToHerbPage)



async function getShrubs() {
    const res = await axios.get(`http://localhost:3001/shrubs`)
}    

async function getHerbs() {
    const res = await axios.get(`http://localhost:3001/herbs`)
}    
