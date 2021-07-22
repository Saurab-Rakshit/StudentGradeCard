//!Student Grade card calculator

//* 1>Find total?
//* 2>Find Percentage?
//* 3>Find Grade?
//* 4>Pass or fail?
//* 5>Combine All & show output

const calculate = ()=>{
    let chem = document.getElementById('ch').value;
    let math = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;

    let grade = '';

    //*Total of all marks
    let totalMarks = parseFloat(chem)+parseFloat(math)+parseFloat(comp)+parseFloat(phy);
    console.log(`Total marks out of 400 is: ${totalMarks} `);

    //*Percentage
    let perc = (totalMarks/400)*100
    console.log(`Total Percentage is: ${perc}%`);

    //* Grade
    if(perc >= 80 && perc <=100) {
        grade = 'A'
    }else if(perc >= 60 && perc <= 79){
        grade = 'B'
    }else if(perc >= 40 && perc <= 59){
        grade='C'
    }else{
        grade = 'F'
    }

    //* Adding the sentence Pass or Fail depending upon the totalMarks.
    if (perc >= 39.5) {
        document.getElementById('showData').innerHTML = `Your got ${totalMarks} out of 400 and Your Percentage is ${perc}%. <br>Your grade is ${grade} <br>You are Pass`    
    }else{
        document.getElementById('showData').innerHTML = `Your got ${totalMarks} out of 400 and Your Percentage is ${perc}%. <br>Your grade is ${grade} <br>You are Fail`
    }
    

}