const container = document.querySelector('.container');
const blockPrincipal = document.getElementsByClassName('block');
const proxy = 'https://cors-anywhere.herokuapp.com/';
const url = proxy + 'https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f/?key=$2a$10$qjC1RIOL8V6SNaqidkWwR.TpPXpL8t0hUiwSCMA9uYXIKXifHGhYO';

// fetch(url)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (myJson) {
//       console.log(myJson)
//          dataHouses(myJson)
//     });


const dataHouses = (data) => {
    console.log(data)
    //     data.forEach((element) => {
    //    let templateHouse =  `<div>
    //    <p>${element.name}</p>
    //    <p>${element.founder}</p>
    //    <p>${element.headOfHouse}</p>
    //    <p>${element.houseGhost}</p>
    //    <p>${element.mascot}</p>
    //    <p>${element.values}</p>
    //    </div>`
    // // container.innerHTML += templateHouse;
    // })
}


const dataDetail = (data) => {
    data.forEach((element) => {
        let template = `<div>
                        <p>${element.name}</p>
                        <p>${element.house}</p>
                   
                        </div>`
        container.innerHTML += template;
    })
}




blockPrincipal[0].addEventListener('click', () => {
    let idHouse = blockPrincipal[0].dataset.id;
    const url = `  http://hp-api.herokuapp.com/api/characters/house/${idHouse}`;
  
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson)
            // dataHouses(myJson)
        });

})
blockPrincipal[1].addEventListener('click', () => {
    let idHouse = blockPrincipal[1].dataset.id;
    const url = `  http://hp-api.herokuapp.com/api/characters/house/${idHouse}`;
  
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson)
            // dataHouses(myJson)
        });

})

