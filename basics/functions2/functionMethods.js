function greeting() {
    return `Good morning ${recipient()}`;
  }
  
  function recipient() {
    return 'Launch School';
  }

  
function calculateBmi(heightInCM, weightInKilograms) {
    let heightInMeters = heightInCM / 100
    const bmi = weightInKilograms / heightInMeters**2;
    return (Math.round(bmi*100)/100).toString();
}

let bmi = calculateBmi(180, 80);
console.log(bmi)


function catYears(age) {
    if (age === 1){
        return 15
    }
    else if (age==2) {
        return 24
    }
    else {
        return (age-2) * 4 + 24
    }

}

function removeLastChar(str) {
    return str.slice(0,str.length-1)
}


const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template  
    .replace('VERB', verb)
    .replace('NOUN', noun);

console.log(sentence('like', 'birds'));

let initGame = () =>  ({ level: 1, score: 0 });
  
  let game = initGame();
  
  console.log('Level: ' + game.level);
  console.log('Score: ' + game.score);