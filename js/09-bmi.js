// https://www.codewars.com/kata/57a429e253ba3381850000fb


function bmi(weight, height) {
    index = weight / (height * height)
     if (index <= 18.5) {
        return 'Underweight'
        } else {if (index <= 25.0) {
                return 'Normal'
                } else {if (index <= 30.0) {
                        return 'Overweight'
                        } else {
                        return 'Obese'
                        }           
                    }
                }
}

console.log(bmi(115, 182));