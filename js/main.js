
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
   //console.log(document.getElementById("agradecimentos"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/pro");
    //window.location.href ="https://web.digitalinnovation.one/pro";
}

function trocar(elemento){
   // document.getElementById("mousemover").innerHTML = "Obrigado por passar o mouse";
   elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funçaochange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n1){
    return n1 + n2;
}
*/
/*
function validaidade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/
/*
function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
  return  frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Goku", "Goku", "Goku"));
*/
/*
var d = new Date();
alert(d.getMonth());
alert (d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++ ;
};
*/
/*
var idade =prompt("Qual sua idade");
if (idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Fernanda Ferreira";
//var idade = 11;
//var idade2 =11;
//var frase = "Dragon Ball é o melhor";
//alert( nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Dragon Ball", "Dragon Ball Z"));
//alert(frase.replace("Dragon Ball", "Dragon Ball Z"));