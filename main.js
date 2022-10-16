let op1 = document.getElementById("num1");
let operador = document.getElementById("operador");
let op2 = document.getElementById("num2");
let cal = document.getElementById("calcular");
let res = document.getElementById("resultado");


function calcular(){
    const operadores = operador.value
    const num1 = parseFloat(op1.value)
    const num2 = parseFloat(op2.value)
    

    if((operadores == "+" || operadores == "-" || operadores == "*" || operadores == "/")
     && !isNaN(num1) && !isNaN(num2))
        {
            let resultado;
            switch (operadores){
                case "+":
                  resultado =  num1 + num2
                    break;
                case "-":
                    resultado = num1 - num2
                    break;
                case "*":
                    resultado = num1 * num2
                    break;
                case "/":
                        resultado = num1 / num2
                    break     
            }
            
             res.style = "text-shadow: 0 0 5px rgb(7, 7, 96), 0 0 15px rgb(20, 8, 148), 0 0 30px rgb(91, 39, 222), 0 0 50px rgb(98, 98, 255)"
            res.innerText = "!" + resultado + "!";
    }else{
        res.style = "text-shadow: 0 0 5px rgb(126, 0, 0), 0 0 15px rgb(185, 10, 10), 0 0 30px rgb(198, 51, 51), 0 0 50px rgb(217, 92, 92)"
        res.innerText = "Error matematico :("
    }

}


