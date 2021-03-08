let ranPron = ["the", "our"];
let ranAdj = ["great", "big"];
let ranNoun = ["jogger", "racoon"];
let ranDomain = [".net", ".com"];

const ranDomainGen = () => {
  for (let x = 0; x < ranPron.length; x++) {
    for (let y = 0; y < ranAdj.length; y++) {
      for (let z = 0; z < ranNoun.length; z++) {
        for (let a = 0; a < ranDomain.length; a++) {
          console.log(ranPron[x] + ranAdj[y] + ranNoun[z] + ranDomain[a]);
        }
      }
    }
  }
};
console.log(ranDomainGen());
