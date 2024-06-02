//w a p to print common numbers from a given array
p=[10,11,12,20,30]
q=[11,20,25,30,33]
//11,20,30

//index for p
a=0
//inddex for q
b=0

ispresent=false

while(a<p.length && b<q.length){
    if(p[a]==q[b]){
        console.log(p[a]);
        ispresent=true
        a++
        b++
    }
    else if(p[a]>q[b]){
        b++
    }
    else{
        
    }
}