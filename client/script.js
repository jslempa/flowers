treeBtn = document.querySelector('#trees')
shrubBtn = document.querySelector('#shrubs')
herbsBtn = document.querySelector('#herbs')

const goToTreePage = () => {
    window.location.href = 'http://localhost:5500/client/plants.html'
}

treeBtn.addEventListener('click', goToTreePage)
shrubBtn.addEventListener('click', getShrubs)
herbsBtn.addEventListener('click', getHerbs)



async function getTrees() {
    const res = await axios.get(`http://localhost:3001/trees`)

    //testImg.src = res.data[0].images
}   

async function getShrubs() {
    const res = await axios.get(`http://localhost:3001/shrubs`)
}    

async function getHerbs() {
    const res = await axios.get(`http://localhost:3001/herbs`)
}    


getTrees()