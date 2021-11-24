// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (height<=0 || mass<=0){
        return String("INVALID"+ " INPUT");
    }else{
        BMI=mass/(height*height);
        return Number(BMI);
    }
}

module.exports = BMICalculator;
