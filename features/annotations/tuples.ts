const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//use type like variable
type Drink = [string,boolean,number];


//this is tuple instead of array bc it is a strict set length 
//and type and position of type
const pepsi: Drink = ['brown',true,40];

const sprite: Drink = ['clear',true,40];

const tea: Drink = ["brown",false,0];

const carSpecs: [number,number] = [400,3354];
//rather be using object than tuple
const carStats:{horsepower: number, weight: number} = {
    horsepower: 400,
    weight: 3354
}