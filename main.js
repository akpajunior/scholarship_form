let grade=["chemistry","arts","literature","physics","government","socioliogy" ] 
let fullName=document.getElementById("fullName")
let lastName=document.getElementById("lastName")
let age=document.getElementById("age")
let gender=document.getElementById("gender")
let phoneNumber=document.getElementById("phoneNumber")
let school=document.getElementById("school")
let continents=document.getElementById("continents")
let selectGrade=document.getElementById("selectGrade")
let selectGrade2=document.getElementById("selectGrade2")
let selectGrade3=document.getElementById("selectGrade3")
let selectGrade4=document.getElementById("selectGrade4")
let selectGrade5=document.getElementById("selectGrade5")
let selectGrade6=document.getElementById("selectGrade6")
let regBtn=document.getElementById("regBtn")
let point=0
let gradeAverage = 0;
let firstNameError = document.getElementById('firstNameError')
let maths = document.getElementById('mathsScore');
let eng = document.getElementById('engScore');

let lastNameError = document.getElementById('lastNameError')
let ageError = document.getElementById('ageError')
let genderError = document.getElementById('genderError')
let phoneNumberError = document.getElementById('phoneNumberError')
let schoolError = document.getElementById('schoolError')
let continentsError = document.getElementById('continentsError');
let selectGradeScore=document.getElementById('selectGradeScore')
let selectGradeScore2=document.getElementById('selectGradeScore2')
let selectGradeScore3=document.getElementById('selectGradeScore3')
let selectGradeScore4=document.getElementById('selectGradeScore4')
let selectGradeScore5=document.getElementById('selectGradeScore5')
let selectGradeScore6=document.getElementById('selectGradeScore6')
let agepointHolder
let continentspointHolder
let calculatedGrade


regBtn.addEventListener('click', function () {
    fieldError()
    })


    function fieldError() {
    if (firstName.value == '') {
    firstNameError.innerHTML = 'enter correct details';
    } else if (lastName.value == '') {
    lastNameError.innerHTML = 'enter correct details';
    }  else if (gender.value == '') {
    genderError.innerHTML = 'Select an option';
    } else if (phoneNumber.value == '') {
    phoneNumberError.innerHTML = 'enter correct details';
    } else if(age.value==''){
        ageError.innerHTML = 'select age'
    }else if (school.value == '') {
    schoolError.innerHTML = 'enter correct details';
    } else if (continents.value == '') {
    continentsError.innerHTML = 'enter correct details';
    }
    else if (
      selectGrade.value == '' ||
      selectGrade2.value == '' ||
      selectGrade3.value == '' ||
      selectGrade4.value == '' ||
      selectGrade5.value == '' ||
      selectGrade6.value == ''
      ) {
      alert('fill eight subjects complete');
      } else if (
      mathsScore.value == '' ||
      engScore.value == '' ||
      selectGradeScore.value == '' ||
      selectGradeScore2.value == '' ||
      selectGradeScore3.value == '' ||
      selectGradeScore4.value == '' ||
      selectGradeScore5.value == '' ||
      selectGradeScore6.value == ''
      ) {
      alert('Input all subject scores correctly');
      } else {
        
          selectAge()
        }
        clearError()
    }
    function clearError() {
        if (firstName.value != '') {
        firstNameError.innerHTML = '';
        }
        if (lastName.value != '') {
        lastNameError.innerHTML = '';
        }
        if (gender.value != '') {
        genderError.innerHTML = '';
        }
        if (phoneNumber.value != '') {
        phoneNumberError.innerHTML = '';
        }
        if (school.value != '') {
        schoolError.innerHTML = '';
        }
        if (continents.value != '') {
         continentsError.innerHTML = '';}

        else {
          
        
        }
        }








selectGrade.addEventListener("change", function (){
    let gradeIndex=selectGrade.value
    grade.splice(gradeIndex, 1)
    loopGrade2()
    loopGrade3()
    loopGrade4()
    loopGrade5()
    loopGrade6()
})

selectGrade2.addEventListener("change", function () {
    let gradeIndex=selectGrade2.value
    grade.splice(gradeIndex, 1)
    loopGrade3()
    loopGrade4()
    loopGrade5()
    loopGrade6()
})

selectGrade3.addEventListener("change", function () {
    let gradeIndex=selectGrade3.value
    grade.splice(gradeIndex, 1)
    loopGrade4()
    loopGrade5()
    loopGrade6()   
})
selectGrade4.addEventListener("change", function () {
    let gradeIndex=selectGrade4.value
    grade.splice(gradeIndex, 1)
    loopGrade5()
    loopGrade6()   
})
selectGrade5.addEventListener("change", function () {
    let gradeIndex=selectGrade5.value
    grade.splice(gradeIndex, 1)
    loopGrade6()   
})
selectGrade6.addEventListener("change", function () {
    let gradeIndex=selectGrade6.value
    grade.splice(gradeIndex, 1)
})

// //Loop an array
loopGrade()
loopGrade2()
loopGrade3()
loopGrade4()
loopGrade5()
loopGrade6()

function loopGrade() {
   let allOptions=""
   for(let a=0; a< grade.length; a++){
       allOptions+=` <option value="${a}"> ${grade[a]}</option>`
   }
selectGrade.innerHTML=`  <option value="">Select grade</option> ${allOptions}`
}

function loopGrade2() {
    let allOptions=""
    for(let a=0; a< grade.length; a++){
        allOptions+=` <option value="${a}"> ${grade[a]}</option>`
    }
 selectGrade2.innerHTML=`  <option value="">Select grade</option> ${allOptions}`
 }
 function loopGrade3() {
    let allOptions=""
    for(let a=0; a< grade.length; a++){
        allOptions+=` <option value="${a}"> ${grade[a]}</option>`
    }
 selectGrade3.innerHTML=`  <option value="">Select grade</option> ${allOptions}`
 }
 function loopGrade4() {
    let allOptions=""
    for(let a=0; a< grade.length; a++){
        allOptions+=` <option value="${a}"> ${grade[a]}</option>`
    }
 selectGrade4.innerHTML=`  <option value="">Select grade</option> ${allOptions}`
 }
 function loopGrade5() {
    let allOptions=""
    for(let a=0; a< grade.length; a++){
        allOptions+=` <option value="${a}"> ${grade[a]}</option>`
    }
 selectGrade5.innerHTML=`  <option value="">Select grade</option> ${allOptions}`
 }
 function loopGrade6() {
    let allOptions=""
    for(let a=0; a< grade.length; a++){
        allOptions+=` <option value="${a}"> ${grade[a]}</option>`
    }
 selectGrade6.innerHTML=`  <option value="">Select grade</option> ${allOptions}`
 }


 function selectAge(){
   
    switch(age.value){
        case "1":
          agepointHolder=100
        selectContinents()
          break;
        case "2":
          agepointHolder=80
            selectContinents()
          break;
          case "3":
            agepointHolder=50
        selectContinents()
          break;
        case "4":
          agepointHolder=30
            selectContinents()
            break;
            case "5":
              agepointHolder=10
        selectContinents()
          break;
        default:
            alert('select age')
        break;
        console.log(point);
        
}


}
function selectContinents(){
    switch(continents.value){
        case "1":
          continentspointHolder=50
        gradeAverageCheck()
          break;
        case "2":
          continentspointHolder=40
            gradeAverageCheck()
          break;
          case "3":
            continentspointHolder=30
        gradeAverageCheck()
          break;
        case "4":
          continentspointHolder=20
            gradeAverageCheck()
            break;
            case "5":
              continentspointHolder=10
        gradeAverageCheck()
          break;
        default:
         alert("select continent")
        break;
        console.log(point)
}



}



 

    function gradeAverageCheck() {
        mathsScore = parseInt(mathsScore.value);
        engScore = parseInt(engScore.value);
        selectGradeScore = parseInt(selectGradeScore.value);
        selectGradeScore2 = parseInt(selectGradeScore2.value);
        selectGradeScore3 = parseInt(selectGradeScore3.value);
        selectGradeScore4 = parseInt(selectGradeScore4.value);
        selectGradeScore5 = parseInt(selectGradeScore5.value);
        selectGradeScore6 = parseInt(selectGradeScore6.value);
        
        gradeAverage =
        (mathsScore +
        engScore +
        selectGradeScore  +
        selectGradeScore2 +
        selectGradeScore3 +
        selectGradeScore4 +
        selectGradeScore5 +
        selectGradeScore6) /
        8;
        console.log(mathsScore)
        console.log(' grade average is ' + gradeAverage);
        
         calculatedGrade = 0;
        if (gradeAverage >= 90 && gradeAverage <= 100) {
        calculatedGrade = calculatedGrade + 150;
        } else if (gradeAverage >= 85 && gradeAverage <= 89) {
        calculatedGrade = calculatedGrade + 140;
        } else if (gradeAverage >= 75 && gradeAverage <= 84) {
        calculatedGrade = calculatedGrade + 120;
        } else if (gradeAverage >= 65 && gradeAverage <= 74) {
        calculatedGrade = calculatedGrade + 100;
        } else if (gradeAverage >= 60 && gradeAverage <= 64) {
        calculatedGrade = calculatedGrade + 80;
        } else if (gradeAverage >= 50 && gradeAverage <= 59) {
        calculatedGrade = calculatedGrade + 50;
        } else if (gradeAverage >= 40 && gradeAverage <= 49) {
        calculatedGrade = calculatedGrade + 20;
        }
        console.log('points from calculated grade average is ' + calculatedGrade);
        point = agepointHolder+ continentspointHolder + calculatedGrade;
        console.log('total points is ' + point);
        eligibilityCheck();
        }

        

function eligibilityCheck() {
    if (point >= 180) {
    alert('congrats You got scholarship');
    chartShow()
    } else {
    alert(' not eligible for this Scholarship');
    }
    
    }
function chartShow(){
    
  

  const labels = [
    'Age',
    'Continents',
    'Grade',
    
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
    ],
      borderColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
    ],
      data: [agepointHolder,continentspointHolder,calculatedGrade],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

}