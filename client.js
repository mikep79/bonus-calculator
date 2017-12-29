var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];


function EmployeeBonus (name, employeeNumber, annualSalary, reviewRating) {                 // EMPLOYEE BONUS CONSTRUCTOR
    this.name = name;
    this.bonusPercentage = bonusPercentageCalc(annualSalary, reviewRating, employeeNumber);
    this.totalBonus = totalBonusCalc(annualSalary, this.bonusPercentage);
    this.totalCompensation = totalCompensationCalc(annualSalary, this.totalBonus);
}

function bonusPercentageCalc(annualSalary, reviewRating, employeeNumber) {                  // CALCULATE BONUS PERCENTAGE
    var bonusPercentage;
    if (reviewRating <= 2){
        bonusPercentage = 0;
        return bonusPercentage;    
    } else if (reviewRating === 3) {
        bonusPercentage = 0.04;
    } else if (reviewRating === 4) {
        bonusPercentage = 0.06;
    } else if (reviewRating === 5) {
        bonusPercentage = 0.10;
    }
    if (employeeNumber.length === 4) {
        bonusPercentage += 0.05;
    }
    if (annualSalary >= 65000) {
        bonusPercentage -= 0.01;
    }
    return bonusPercentage;
}

function totalCompensationCalc(annualSalary, totalBonus) {                                      // CALCULATE TOTAL COMPENSATION
    var totalCompensation = parseInt(annualSalary) + parseInt(totalBonus);
    return totalCompensation;
}

function totalBonusCalc(annualSalary, bonusPercentage) {                                    // CALCULATE TOTAL BONUS
    //console.log(annualSalary * bonusPercentage);
    return annualSalary * bonusPercentage;
}

var bonusArray = [];                                                            // EMPLOYEE BONUS ARRAY

for (var i = 0; i < employees.length; i++) {                                // add employees to bonusArray
    bonusArray[i] = new EmployeeBonus(employees[i].name, employees[i].employeeNumber, employees[i].annualSalary, employees[i].reviewRating);
}

console.log(bonusArray);                                    // call finished bonusArray

$('body').append('<p>test' + bonusArray[0][0] + '</p>');

/* Problems:
    - Numberic data is in string form. (use parseInt() for totalCompensation function).

*/