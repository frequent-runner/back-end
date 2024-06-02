weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}


//create o/p object
wd={}
//access  each item from the weatherData array 
for(data of weatherData){  // {district:'Thrissur',weather:32},
    district = data.district  //add district // thrissur//kottayam etc
    currtemp = data.weather   // add weather  // 32//29 etc

    //3)check district is there in the o/p object
    if(district in wd){
        oddtemp = wd[district]
        if(oddtemp>currtemp){
            wd[district]=oddtemp
        }
        else{
            wd[district]=currtemp
        }
    }
    else{
        wd[district]=currtemp 
    }

}

console.log(wd);