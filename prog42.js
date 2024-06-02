weekdays=['mon','tue','wed','thur']

console.log(weekdays);

console.log(weekdays.length);

console.log(weekdays[2]);

console.log(weekdays[3]);

//add friday to the array
weekdays.push('fri')
console.log(weekdays);

//add 3 to the given array
weekdays.push(3)
console.log(weekdays);

//remove 3 from the array

weekdays.pop(3)
console.log(weekdays);

//add sun to the given array

weekdays.unshift('sun')
console.log(weekdays);

weekdays.unshift('sat')
console.log(weekdays);

//remove sat from array

weekdays.shift()
console.log(weekdays);
