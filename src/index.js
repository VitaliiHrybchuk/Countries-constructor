'use strict';

function Country (title, capital, population, area){
  this.title = title;
  this.capital = capital;
  this.population = `${population} mln`;
  this.area = `${area} km2`;
  this.showCountry = function(){
    return `title = ${title}, capital = ${capital},  = ${population}, area = ${area}`;
  }
}
const Ukraine = new Country ('Ukraine', 'Kyiv', '52', '888 000 000');
const Germany = new Country ('Germany', 'Berlin', '48', '666 000 000');
console.log(Germany.showCountry());

function funcCountry(countryObject){
  for (let key in countryObject){
if (typeof countryObject[key] === 'string'){
console.log(`${key}: ${countryObject[key]}`);
}
  }
}
funcCountry(Ukraine);
