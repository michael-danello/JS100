// greet('en'); // 'Hi!'
// greet('fr'); // 'Salut!'
// greet('pt'); // 'Olá!'
// greet('de'); // 'Hallo!'
// greet('sv'); // 'Hej!'
// greet('af'); // 'Haai!'


function greet(lang) {
    switch (lang) {
        case 'en':
            console.log('Hi!')
            break
        case 'sp':
            console.log('Hola!')
            break 
        default:
            break
    }
}


function getCountryCode(str) {
    return str.slice(0,2)
}

function getRegionCode(str) {
    let countryRegion = str.split('.')[0];
    let region = countryRegion.split('_')[1];
    return region
}



function localGreet(str) {
    let country = getCountryCode(str);
    let greeting = greet(country);
    return greeting
}

console.log(localGreet('en_US.UTF-8'));