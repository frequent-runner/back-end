const global='global'

const parent= ()=>{
    let parentvariable='PARENT'
    console.log(`parent variable is ${parentvariable}`);

    // console.log(`child variable is ${childvariable}`);
    console.log(`global variable is ${global}`);

    const child=()=>{
        let childvariable='CHILD'
        
        console.log(`parent variable is ${parentvariable}`);
        console.log(`child variable is ${childvariable}`);
        console.log(`global property is ${global}`);
    }
    child()
}

parent()