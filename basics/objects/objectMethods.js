let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
    greet: function (name) {
        console.log(`Hej ${name}`)
    }
  };
  
  let obj = {
    num: 42,
    'property name': 'string value',
    true: false,
    fun: function() {
      console.log('Harr Harr!');
    },
  };
  
  for (let prop in obj) {
    if (prop === true) {
      console.log("It's true!");
    }
  }

  let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };

  