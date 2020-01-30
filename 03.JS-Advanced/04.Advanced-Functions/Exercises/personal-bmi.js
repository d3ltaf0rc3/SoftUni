function evaluateCondition(name, age, weight, height) {
    let info = {};
    let bmi = weight / (height / 100) ** 2;
    
    info.name = name;
    info.personalInfo = { age, weight, height};
    info.BMI = Math.round(bmi);
    
    if (bmi < 18.5) {
        info.status = "underweight";
    } else if (bmi < 25) {
        info.status = "normal";
    } else if (bmi < 30) {
        info.status = "overweight";
    } else if (bmi >= 30) {
        info.status = "obese";
        info.recommendation = "admission required";
    }

    return info;
}