var danishPrice = 50;
var butterBonPrice = 15;
var teePrice = 10;
var biscuitPrice = 5;
var myBudget = 60;
var packedWell = false;

if(danishPrice < myBudget){
    console.log('Ami danish kamu');
}
else if(butterBonPrice < myBudget){
    console.log('Ami danish khamu');
}
else if (teePrice < myBudget){
    console.log('Ami tee khamu');
}
else if (biscuitPrice < myBudget){
    console.log('Ami toast khamu');
}
else{
    console.log('tor kopale khabar nai');
}


// NESTED CONDITION  =-------- PROBLEM KORTESE

// if (danishPrice < myBudget){
//     if (packedWell == true){
//         console.log('Ami danish Khamu');
//     }
// }
// else{
//     console.log('Danish khamu na');
// }