const blockPrincipalHouse = document.querySelector('.container__house--info');
const blockMembersHouse = document.querySelector('.container__house__member');
const blockValuesHouse = document.querySelector('.container__house--values');
const proxy = 'https://cors-anywhere.herokuapp.com/';

const getDataHouse = () => {
    let dataHouse = JSON.parse(localStorage.getItem('house'))[0];
    showDataHouse(dataHouse);
}

const getDataMemberDetail = (id) => {
    const urlMember = proxy + `https://www.potterapi.com/v1/characters/${id}/?key=$2a$10$qjC1RIOL8V6SNaqidkWwR.TpPXpL8t0hUiwSCMA9uYXIKXifHGhYO`;
    fetch(urlMember)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            templateDataHouseMembers(data);
        });
}



// Show Data
const showDataHouse = (data) => {

    templateDataHouse(data)
    showListMembers(data.members);
    showValues(data.values)
}

const showListMembers = (data) => {
    data.forEach(element => {
        getDataMemberDetail(element._id);
    });
}

const showValues = (data) => {
    data.forEach(element => {
        templateValues(element);
    });
}

//  template Data
const templateDataHouseMembers = (members) => {
    let templateHouseMember = `<div class="box-member">
       <p>${members.name}</p>
       <p>${members.role}</p>
       <p>${members.species}</p>
       </div>`;
    blockMembersHouse.innerHTML += templateHouseMember;
}

const templateDataHouse = (data) => {
    let templateHouse = `<div>
       <p>${data.name}</p>
       <p>${data.founder}</p>
       <p>${data.headOfHouse}</p>
       <p>${data.houseGhost}</p>
       <p>${data.mascot}</p>
       </div>`;
    blockPrincipalHouse.innerHTML += templateHouse;
}

const templateValues = (value) => {
    let templateValues = `<div>
    <p>${value}</p>
    </div>`;
    blockValuesHouse.innerHTML += templateValues;
}




getDataHouse();