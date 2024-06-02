//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
    [2, 'Idukki', 14000, 3000, 25000, 30000, 1000],
    [3, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
    [4, 'Pathanamthitta', 20000, 2000, 45000, 22000, 1500],
    [5, 'Kozhikode', 44000, 5000, 12000, 21000, 500],
    [6, 'Palakkad', 12000, 1000, 20000, 23000, 3400],
    [7, 'Kottayam', 27000, 1500, 27000, 14000, 1000],
    [8, 'Kollam', 14000, 2500, 25000, 18000, 2700]

]
//1. district having Highest +ve case 

covid = covid_data.reduce((pro1, pro2) => pro1[2] > pro2[2] ? pro1 : pro2)
console.log(covid[1]);
console.log('......................................');

//2. district having Highest 1st dose vaccine

covid = covid_data.reduce((pro1, pro2) => pro1[5] > pro2[5] ? pro1 : pro2)
console.log(covid[1]);
console.log('......................................');

//3. district having lowest death rate

covid = covid_data.reduce((pro1, pro2) => pro1[3] < pro2[3] ? pro1 : pro2)
console.log(covid[1]);
console.log('......................................');

//4. sort data with +ve case in descending order
// covid_data.sort((a,b)=>b[2]-a[2]).forEach(item=>console.log(item[2]))

d = covid_data.sort((n1, n2) => n2[2] - n1[2])
console.log(d);
console.log('......................................');

//5. is district with +ve cases > 15000

e = covid_data.some(n1 => n1[2] > 15000)
console.log(e ? 'yes' : 'no');
console.log('......................................');

//6. sort data with 1st dose vaccine ascending order

f = covid_data.sort((n1, n2) => n1[5] - n2[5])
console.log(f);
console.log('......................................');

//7. Print Thrissur details

g = covid_data.find(n1 => n1[1] == 'Thrissur')
console.log(g);
console.log('......................................');

//8. Print total number of positive cases

console.log('print total number of positive cases');
h = covid_data.map(pc=>pc[2]).reduce((n1, n2) => n1 + n2);
console.log(h);
console.log('......................................');

//9. Print total number of curred cases

console.log('total number of cured cases');
i = covid_data.map(cc=>cc[4]).reduce((n1, n2) => n1 + n2);
console.log(i);
console.log('......................................');

//10. Print curred cases in Idukki

console.log('cured cases in idukki');
let j = covid_data.find(n1 => n1[1] == 'Idukki');
console.log(j[4]);