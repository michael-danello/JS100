let weather = 'rainy';

if (weather === 'rainy') {
	console.log('best to stay inside');
}
else if (weather === 'sunny') {
	consoloe.log('beautiful day for a walk');
}
else {
	console.log('I dunno');
}



weather = 'sunny' 

switch (weather) {
	case 'sunny':
		console.log("it's nice out");
		break
	case 'rainy':
		console.log("you'll need an umbrella");
	default:
		break;
}