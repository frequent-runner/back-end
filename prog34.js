// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=5;col++){
        if(col==5|| col==1||row==1||row==5){
            str=str+"*"
        }
        else{
            str=str+""
        }
    }
    console.log(str);
}