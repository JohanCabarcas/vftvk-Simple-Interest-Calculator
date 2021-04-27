function compute()
{
    //get input from user
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //Test for positive values
    if (principal > 0 ){
        //Calculate interest    
        var interest = principal * years * rate/100;
        var year = new Date().getFullYear()+parseInt(years);
        //prepare and assign output text
        var outputText = "I you deposit "+principal +" at an interest rate of " + rate + "%.\n"+"You will receive an amount of "+ interest +", in the year "+ year;
        document.getElementById("result").innerText = outputText;
    }
    else{
        alert("Please enter a number greater than zero!");
        //document.getElementById("principal").value = 0;
    }
}
function updateRate()
{
    //mirror range slide value to text element
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        