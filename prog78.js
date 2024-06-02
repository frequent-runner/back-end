accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts

console.log(`total number of accounts:${accounts.length}`);

//2. print account number whose ac_type is savings

console.log('savings account :');

// for( data of accounts){
//     if(data.ac_type=='savings'){
//         console.log(data.acno);
//     }
// }

acc=accounts.filter(item=>item.ac_type=='savings').forEach(element=>{console.log(element.acno)})

//3.print the balance of accnount number 1000

console.log('balance of account number 1000');
console.log(accounts.find(item=>item.acno==1000).balance)
console.log('----------------------');

//4. print all gpay transactions

 console.log('print all gpay transactions:');
 accounts.map(data=>data.transaction).flat().filter(item=>item.mode=='gpay').forEach(trans=>console.log(trans))

//5. print all transaction whose amount > 5000

console.log('all transactions above 5000:');

accounts.map(data=>data.transaction).flat().filter(item=>item.amount>5000).forEach(trans=>console.log(trans))

//6. print credit transaction of account 1002

console.log('credit transactions of account 1002:');
credit=accounts.map(data=>data.transaction).flat().filter(item=>item.to==1002)
console.log(credit);

//7. print debit transaction of account 1002

console.log('debit transactions of account 1002:');
debit=accounts.find(data=>data.acno==1002).transaction
console.log(debit);

//8. print transaction history of 1002

console.log('transaction history of 1002:');
history={}
history["credit"]=credit
history["debit"]=debit
console.log(history);

//spread(...)=> used to combine 2 arrays

transhistory=[...credit,...debit]
console.log(transhistory);

//9. print highest balance account details

console.log('highest balance account:');
acc=accounts.reduce((d1,d2)=>d1.balance>d2.balance?d1:d2)
console.log(acc);