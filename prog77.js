products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
     for(data of products){
        console.log(data.pName);
     }

//2. print all mobile details whose display is lcd

    for(data of products){
        if(data.display=='lcd'){
            console.log(data);
        }

    }

//3. print 5g mobile phone name

    for(data of products){
       if(data.band=='5g'){
        console.log(data.pName);
       }
    }

//4. sort mobile based on price
a = products.sort((n1,n2)=>n1.price-n2.price).forEach(item=>console.log(item.pName))
console.log('_________________________________');


//5. print costly mobile
b = products.reduce((n1,n2)=>n1.price>n2.price?n1:n2)
console.log(b.pName);
console.log('_________________________________');



//6. print low cost mobile
c = products.reduce((n1,n2)=>n1.price<n2.price?n1:n2)
console.log(c.pName);