"use strict";


const jsList = document.querySelector('.js-list');
const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputRace = document.querySelector('.js-input-race')
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const cancelBtn = document.querySelector('.js-btn-cancel');
const form = document.querySelector('.new-form');
const plus = document.querySelector('.fa-plus-circle');
const searchBtn = document.querySelector(".js-search-btn");

const search = document.querySelector('.js_in_search_desc');





  /* const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
  const kittenOneName = 'Anastacio';
  const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
  const kittenOneRace =  'Siamés';

  const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
  const kittenTwoName = 'Fiona';
  const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
  const kittenTwoRace =  'Sphynx';

  const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
  const kittenThreeName = 'Cielo';
  const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
  const kittenThreeRace =  'Maine Coon'; */

 //convertir la info de los gatos en objetos
 const kittenData_1 = {
  image:'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente',
  race: 'Siamés',
};

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};

const kittenData_3 = {
  image:'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};


// crear un array que contenga los tres gatos 


/* const kittenOne =`<li class="card">
<article>
<img
class="card_img"
src= ${kittenData_1.image}
    alt="gatito"
  />
  <h3 class="card_title">${kittenData_1.name}</h3>
  <h4 class="card_race">${kittenData_1.race}</h4>
  <p class="card_description">${kittenData_1.desc}</p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenData_2.Image}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenData_2.name}</h3>
<h4 class="card_race">${kittenData_2.race}</h4>
<p class="card_description">${kittenData_2.desc}</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src= ${kittenData_3.image}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenData_2.name}</h3>
<h4 class="card_race">${kittenData_2.race}</h4>
<p class="card_description">${kittenData_2.desc}</p>
</li>`; */


const searchValue = search.value;



const filterKitten = (event) => {
  if (kittenData_1.desc.includes(searchValue)) {
    jsList.innerHTML += kittenOne;
  }
  else if (kittenData_2.desc.includes(searchValue)) {
    jsList.innerHTML += kittenTwo;
  }
  else if (kittenData_3.desc.includes(searchValue)) {
    jsList.innerHTML += kittenThree;
  }
  else {
    jsList.innerHTML = "";
  }
};



// Con este filtro que hicimos primero se repiten los gatos

/* if (kittenOneDesc.includes(search.value)) {
  jsList.innerHTML += kittenOne;
};

if (kittenTwoDesc.includes(search.value)) {
  jsList.innerHTML += kittenTwo;
};

if (kittenThreeDesc.includes(search.value)) {
  jsList.innerHTML += kittenThree;
}; */





function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
  } else {
    
  const newKitten = `<li class="card">
<img
  class="card_img"
  src= ${valuePhoto}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${valueName}</h3>
<h4 class="card_race">${valueRace}</h4>
<p class="card_description">${valueDesc}</p>
</li>`;
jsList.innerHTML += newKitten;
}
};








// Ejecutar la función anterior dándole los 4 parámetros

/* renderKitten("https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb", "Misu", "Desconocida", "El gato doméstico​​ (Felis silvestris catus), llamado más comúnmente gato, y de forma coloquial minino,​ michino,​ michi,​ micho,​ mizo,​ miz,​ morroño​ o" );

renderKitten("https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067", "Gordito", "No se sabe", "El gato doméstico​​ (Felis silvestris catus), llamado más comúnmente gato, y de forma coloquial minino,​ michino,​ michi,​ micho,​ mizo,​ miz,​ morroño​ o ..." ) */



btnAdd.addEventListener('click', addNewKitten);




// Para resetear el formulario al cancelar (salen errores)

cancelBtn.addEventListener('click', () => {
  inputName.value = "";
  inputDesc.value = "";
  inputPhoto.value = "";
  inputRace.value = "";

}) 



function showNewCatForm() {
  form.classList.remove('collapsed');
}
function hideNewCatForm() {
  form.classList.add('collapsed');
}

cancelBtn.addEventListener('click', hideNewCatForm);
plus.addEventListener('click', showNewCatForm);



// nueva función para filtrar 


searchBtn.addEventListener('click', filterKitten);



 
  /*   function handleClick () {
      ul.innerHTML = 
      renderHero(superheroes[0])+
      renderHero(superheroes[1])+
      renderHero(superheroes[2]); */


  function renderKitten(kittenData) {
    jsList.innerHTML += `<li class="card">
    <img
      class="card_img"
      src= "${kittenData.image}"
      alt=""
    />
    <h3 class="card_title">${kittenData.name}</h3>
    <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">${kittenData.desc}</p>
    </li>`;
  };

  renderKitten(kittenData_1);
  renderKitten(kittenData_2);
  renderKitten(kittenData_3);


  const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

  function renderKittenList(cats) {
    jsList.innerHTML = "";
    for (let i = 0; i< kittenDataList.length; i++ ) {
      renderKitten(cats[i]);
    }; 
  };


  renderKittenList(kittenDataList);