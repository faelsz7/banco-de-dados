const frm = document.querySelector("form");
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e)=>{
    const nome = frm.inNome.value;
    //alert(nome)
    const nota1 = Number(frm.inNota.value);
    const nota2 = Number(frm.inNota2.value);
    
    const media = (nota1 + nota2) / 2;
    
    //alert(media.toFixed(2));
    resp1.innerText = `Média das notas: ${media.toFixed(2)}`;
    //se media >= 7 então "Aprovado" senão "Reprovado"
    if (media >= 7) {
        //alert("Aprovado")
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado`
        resp2.style.color = "blue";
    }else {
        //alert("Reprovado")
        resp2.innerText = `Ops ${nome}! tu se fudeu`;
        resp2.style.color = "red";

    }
    e.preventDefault();
});