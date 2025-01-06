const temp = document.getElementById("temp");
const toCelcius = document.getElementById("celcius");
const toFahrenheit = document.getElementById("fahrenheit");

const submit = document.getElementById("submit");

const output = document.getElementById("output");

submit.onclick = function()
{
    let newTemp = Number(temp.value);
   
    if (toCelcius.checked)
    {
        let celcius = (newTemp - 32) * 5/9;
        celcius = parseFloat(celcius.toFixed(2));
        output.textContent = `${celcius} C`
     }
     
    else if (toFahrenheit.checked)
        {
            let fahrenheit = (newTemp * 9/5) + 32;
            fahrenheit = parseFloat(fahrenheit.toFixed(2));
            output.textContent = `${fahrenheit} F`
         }

         else{
             output.textContent = `Please select an input!`;

         }
    


   
}

