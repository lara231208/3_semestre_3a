const idade = 16;

if( idade >= 18 ){
    console.log("você é de maior");
} else if (idade >= 13 && idade <= 17) {
    console.log ("Você é um adolescente");
} else if ( idade >= 1 && idade <= 12) {
    console.log ("Você é uma criança");
} else {
    console.log ("Você é um bebe");
}

// operador ternário
let nota = 8;
let status;
if (nota >= 7){
   status  = "APROVADO";
} else {
    status = "REPROVADO";
}
let status2;
//condição? Verdadeiro    : False
 nota >= 7 ? status2 = 'APROVADO' : status2 = 'REPROVADO';
