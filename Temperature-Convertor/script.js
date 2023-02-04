const calculateTemp = () => {
const Number= document.getElementById('temp').value;
const tempType= document.getElementById('temp_diff');
const valueTemp= temp_diff.options[tempType.selectedIndex].value;

//console.log(valueTemp);
//console.log(tempType);

const celtofar = (cel) => {
     let Fahrenheit = Math.round((cel * 9/5) +32); 
     return Fahrenheit;
    }

    
const fartocel = (fahr) =>{
      let celsius = Math.round((fahr - 32) * 5/9);
      return celsius;
    }

let result;
 
    if(valueTemp == "cel"){
         result = celtofar(Number);
         document.getElementById("result").innerHTML= `= ${result} Fahrenheit`;
    }
    else{
         result = fartocel(Number);
         document.getElementById("result").innerHTML= `= ${result} Celsius`;
    }
}   