function checkSpeed(speed){
    let speedLimit =70;
    let point =0;
    let kmperhour =5;

    if(speed < speedLimit)
        console.log("Ok");

    else{
        const points= Math.floor((speed -speedLimit) / kmperhour);
        if(point >= 12)
            console.log("License Suspended");

        else
            console.log("Points" ,points);
    }
}

checkSpeed(120);