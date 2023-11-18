function Somar(numero) {
    try{

    
    if (numero < 0) {
        throw "o valor precisa ser maior que zero";
    } else if (isNaN(numero)) {
        throw "O valor precisa ser um número.";
    } else if (typeof numero === 'string') {
        throw "O valor não pode ser uma string.";
    } else if (!Number.isInteger(numero)) {
        throw "precisa ser um número inteiro";
    } else if (numero == null) {
        throw "não pode ser vazio, preencha com um número positivo inteiro!";
    }

        let soma = 0;
        for (let i = numero - 1; i > 0; i--) {
            if (i % 3 === 0 || i % 5 === 0) {
                soma += i;
            }
        }
        return soma;
    }catch (erro) {
        console.error(erro);
    }
    
}
 
module.exports = {Somar};