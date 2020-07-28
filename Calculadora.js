const select = document.getElementById("select"); // document.getElementById pega o elemento do HTML
const numero1 = document.getElementById("numero1"); // const permite alterar atributos da variável, não a variável inteira(Ex: numero.value)
const numero2 = document.getElementById("numero2"); // as variáveis no escopo geral funcional em todas funções
const resultado = document.getElementById("resultado");
// const mensagemDeErro = "Por favor, use apenas números";

function soma(num1, num2) {
   console.log("num1 + num2 é: ", resultado.value = num1 + num2);
}


function calculadora() {
   
    console.log("select", select.value);
    console.log("num1", numero1.value);
    console.log("num2", numero2.value);

   

    // if (!Number.isNaN(numero1.value) && !Number.isNaN(numero2.value)) { // Number.isNaN não é mais necessário porque o input no HTML só permite Tipo= number. Então não é mais necessário um if
        switch (select.value) { // .value pega apenas o valor da variável e não seu tipo
            case "adicao":
                soma (Number(numero1.value), Number(numero2.value)); // Usando switch chamando uma função no escopo geral
                // console.log("num1 + num2 =", (numero1.value) + (numero2.value) // Sem o Number funciona, mas fica como texto 
                // );
                // resultado.value = (numero1.value) + (numero2.value);
                break;
            case "subtracao":
                console.log("num1 - num2 =", Number(numero1.value) - Number(numero2.value) // Não é necessário usar o Number porque o input do HTML só permite Tipo= number
                );
                resultado.value = Number(numero1.value) - Number(numero2.value);
                break;
            case "multiplicacao":
                console.log("num1 * num2 =", Number(numero1.value) * Number(numero2.value)
                );
                resultado.value = Number(numero1.value) * Number(numero2.value);
                break;
            case "divisao":
                if (Number(numero2.value) === 0) {
                    window.alert("Divisão por 0 não é permitida");
                    } else {
                    console.log("num1 / num2 =", Number(numero1.value) / Number(numero2.value)
                    );
                    resultado.value = Number(numero1.value) / Number(numero2.value);
                    }
                break;
            default:
                console.log("Não foi possível realizar esta operação");
        } 
    // } else { // Sem o if então não vai else também
    //    console.error(mensagemDeErro);
    // }
}
function resetar() {
    numero1.value = null;
    numero2.value = null;
    resultado.value = null;
}