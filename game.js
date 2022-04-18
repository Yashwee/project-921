function send()
{
    number1=document.getElementById("number1").value ;
    number2=document.getElementById("number2").value ;
    actual_answer=parseInt(number1)*parseInt(number2)
question="<h4> "+number1+" x "+number2+"</h4>";
input="<br>Answer : <input id='input_answer' type='text'>"
button="<br><br><button class=btn btn-info onclick='check()'>Check</button>"
row=question+input+button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}

