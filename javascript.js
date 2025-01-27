const amount = document.querySelector(".amount")
const amount_show = document.querySelector(".amount_show")
const total_amount_show = document.querySelector(".total_amount_show")
const period = document.querySelector(".period")
const period_show = document.querySelector(".period_show")
 const percent_show = document.querySelector(".percent_show")
 const percent_div = document.querySelector(".percent")

amount.addEventListener("input",amount_fct);
period.addEventListener("input",period_fct);




function amount_fct(){
    const amount_input_value = Number(amount.value);
    console.log(amount_input_value);
    amount_show.innerHTML = `<p > Amount : ${amount_input_value} $</p>`
    const total_amount_input_value = (amount_input_value * percent/100 + amount_input_value).toFixed(2);
    console.log(total_amount_input_value)
    total_amount_show.innerHTML = `<p> Total amount : ${total_amount_input_value} $</p>`
    
}
amount_fct();

function period_fct(){
    const period_value= Number(period.value);
    period_show.innerHTML = `<p>  ${period_value} months</p>`
    
    if(period_value >=1 && period_value < 6)
        {
            percent = 10;
            percent_div.innerHTML = `<p> Percent ${percent}</p>`
           
        }
    else if(period_value >=6 && period_value <= 12)
        {
            percent = 9.5;
            percent_div.innerHTML = `<p> Percent ${percent}</p>`
        } 
        else if(period_value > 13 && period_value <= 23)
        {
            percent = 9;
            percent_div.innerHTML = `<p> Percent ${percent}</p>`
        }     
        else if( period_value == 24)
        {
            percent = 8.5;
            percent_div.innerHTML = `<p> Percent ${percent}</p>`
        }    
}

period_fct();