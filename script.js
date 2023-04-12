
let button= document.getElementById("calculate");
let reset= document.getElementById("reset");
let weight_status=false;
let height_status=false;
 
button.addEventListener("click", () => {
      
    let wight= document.getElementById("weight").value;
    let height= document.getElementById("height").value;
    let result= document.getElementById("result");

    if (wight=="" || height==""){
        result.innerHTML= "Please enter the  number";
    }
    else if (isNaN(wight) || isNaN(height)){
        result.innerHTML= "Please enter valid number";
    }
    else{
        result.innerHTML= "";
        weight_status=true;
        height_status=true;
    }


    if (weight_status==true && height_status==true)
        {
            let bmi= wight/(height/100*height/100);
            let bmio=(bmi.toFixed(2));
    
            if (bmio<18.5){
                result.innerHTML= "Your BMI is "+ bmio + " and you are underweight";
            }
            else if (bmio>=18.5 && bmio<=24.9){
                result.innerHTML= "Your BMI is "+ bmio + " and you are normal";
            }
            else if (bmio>=25 && bmio<=29.9){
                result.innerHTML= "Your BMI is "+ bmio + " and you are overweight";
            }
            else if (bmio>=30){
                result.innerHTML= "Your BMI is "+ bmio + " and you are obese";
            }
            else{
                result.innerHTML= "Please enter valid number";
            }
        }

})


reset.addEventListener("click", () => {
    document.getElementById("weight").value="";
    document.getElementById("height").value="";
    document.getElementById("result").innerHTML="";
    weight_status=false;
    height_status=false;
}
)