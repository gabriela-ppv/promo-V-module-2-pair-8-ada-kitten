'use strict';

const jslist = document.querySelector('.js-list');

/* const kittenOne = `<li> 
  ${kittenOneImage} + ${kittenOneName} + ${kittenOneRace} + ${kittenOneDesc}`
</li>; */

const kittenOne = `<li class="card">

<article>

<img

class="card_img"

src="https://dev.adalab.es/gato-siames.webp"

alt="gatito"

/>

<h3 class="card_title">Anastacio</h3>

<h4 class="card_race">Siamés</h4>

<p class="card_description">

Porte elegante, su patrón de color tan característico y sus ojos

de un azul intenso, pero su historia se remonta a Asía al menos

hace 500 años, donde tuvo su origen muy posiblemente.

</p>

</article>

</li>`;



const kittenTwo = `<li class="card"> 
            <img
              class="card_img"
              src="https://dev.adalab.es/sphynx-gato.webp"
              alt="sphynx-cat"
            />
            <h3 class="card_title">Fiona</h3>
            <h4 class="card_race">Sphynx</h4>
            <p class="card_description">
              Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.
            </p>
          </li>`;
const kittenThree = `<li class="card">
          <img
         class="card_img"
          src="https://dev.adalab.es/maine-coon-cat.webp"
          alt="maine-coon-cat"
         />
          <h3 class="card_title">Cielo</h3>
          <h4 class="card_race">Maine Coon</h4>
        <p class="card_description">
          Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
          bella mirada se ha convertido en una de sus señas de identidad.
          Sus ojos son grandes y las orejas resultan largas y en punta.
        </p>
        </li>`;

  const jsListElement = document.querySelector('.js-list');
  jsListElement.innerHTML = `${kittenOne} + ${kittenTwo} +${kittenThree}`;


  const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
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
  const kittenThreeRace =  'Maine Coon';


 /*  const dogOne = document.querySelector('.dogBox');
dogOne.innerHTML = `<ul>
 <li> ${firstDogName}<li/>
 <img src=${firstDogImage} />

<li> ${secondDogName}<li/>
<img src=${secondDogImage} />

 <li > ${thirdDogName}<li/>  
 <img src=${thirdDogImage} />
 <ul/>`; */