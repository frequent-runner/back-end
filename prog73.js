var car={
    name: 'baleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10 lakh'
}

//w a p to print model and manufacturer name of the given car
console.log(car['model']);
console.log(car['manufacturer']);
console.log('-----------------------');
//w a p to add varient key to the car object with value has 'manuel'
car["variant"]=['manuel']
console.log(car);
console.log('-----------------------');
//w a p to add a new value 'automatic' to the key varient
car.variant.push('Automactic')
//w a p to add a new key as 'color' with value as red, blue and white.
car["color"]=['red','blue','white']
console.log(car);