const container = document.querySelector('.container');
const blockPrincipal = document.getElementsByClassName('block');
const proxy = 'https://cors-anywhere.herokuapp.com/';

const dataHouses = (data) => {
 localStorage.setItem("house",JSON.stringify(data));
 window.location.href = 'house.html';
}

const getDataHouse = (id) => {
    const url = proxy + `https://www.potterapi.com/v1/houses/${id}/?key=$2a$10$qjC1RIOL8V6SNaqidkWwR.TpPXpL8t0hUiwSCMA9uYXIKXifHGhYO`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            dataHouses(myJson)
        });
}


// Events Home Houses

blockPrincipal[0].addEventListener('click', () => {
    let idHouse = blockPrincipal[0].dataset.id;
    getDataHouse(idHouse);

})
blockPrincipal[1].addEventListener('click', () => {
    let idHouse = blockPrincipal[1].dataset.id;
    getDataHouse(idHouse);

})
blockPrincipal[2].addEventListener('click', () => {
    let idHouse = blockPrincipal[2].dataset.id;
    getDataHouse(idHouse);

})
blockPrincipal[3].addEventListener('click', () => {
    let idHouse = blockPrincipal[3].dataset.id;
    getDataHouse(idHouse);
})