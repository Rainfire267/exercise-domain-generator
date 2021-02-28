let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dotExt = [".com", ".net", ".us", ".io"];

window.onload = () => {
  let cuatroRandom = [];
  let posicionesElegibles = [];
  let i, r;
  for (i = 0; i < pronoun.length; i++) posicionesElegibles[i] = i;
  for (i = 0; i < 4; i++) {
    r = Math.floor(Math.random() * posicionesElegibles.length);
    cuatroRandom.push(pronoun[posicionesElegibles[r]]);
    posicionesElegibles.splice(r, 1);
  }
  console.log(cuatroRandom.toString());
};
/*let pronRandom = Math.floor(Math.random() * pronoun.length);
  let adjRandom = Math.floor(Math.random() * adj.length);
  let nounRandom = Math.floor(Math.random() * noun.length);
  let dotExtRandom = Math.floor(this.Math.random() * dotExt.length);

  let ranDomain = [pronRandom + adjRandom + nounRandom + dotExtRandom];

  ranDomain = document.getElementById("ranDomainGen");
  ranDomain.innerHTML = pronRandom + adjRandom + nounRandom + dotExtRandom;
  */
