const botno = document.getElementById("botonno");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const botonsi = document.getElementById("botonsi");
const pregunta = document.getElementById("pregunta");
let contador=0;
botno.addEventListener("click",()=>{
    contador = contador+1;
    botno.style.visibility="hidden";
    b1.style.visibility = "visible";
})
b1.addEventListener("click",()=>{
    contador++;
    rand = Math.floor((Math.random()*100)+1);
    if (rand %5 ==0 || rand %7 ==0){
        b1.style.visibility="hidden";
        b2.style.visibility = "visible";
    }
    else{
        b1.style.visibility="hidden";
        b3.style.visibility = "visible";
    }
    console.log(rand)
    if(contador > 7 && contador < 12){
        pregunta.textContent = "Ehmm... te gusta el pan?";
    }
    else if(contador > 15 && contador < 22){
         pregunta.textContent = "Pensaste que sería un chiste, pero soy yo, DIO";
    }
})
b3.addEventListener("click",()=>{
    contador++;
    b3.style.visibility="hidden";
    b2.style.visibility = "visible";
    if(contador > 30 && contador < 40){
        pregunta.textContent = "Tic Toc, Tic toc... ";
    }
})
b2.addEventListener("click",()=>{
    contador++;
    rand = Math.floor((Math.random()*100)+1);
    if (rand %5 ==0 || rand %3 ==0){
        b2.style.visibility="hidden";
        b1.style.visibility = "visible";
    }
    else{
        b2.style.visibility="hidden";
        b4.style.visibility = "visible";
    }
    if(contador > 25 && contador <40 ){
        pregunta.textContent = "Esto ya me está molestando";
    }
    else if(contador >30) {
        pregunta.textContent = "Ok, ahora sí ya me cansé... presiona el otro madito botón >:v";
    }
})
b4.addEventListener("click",()=>{
    contador++;
    rand = Math.floor((Math.random()*100)+1);
    if (rand %5 ==0 || rand %7 ==0){
        b4.style.visibility="hidden";
        b3.style.visibility = "visible";
    }
    else{
        b4.style.visibility="hidden";
        b1.style.visibility = "visible";
    }
    console.log(contador);
if(contador > 2 && contador <10 ){
    pregunta.textContent = "Ya cánsate no?";
}
else if(contador > 10 && contador < 15){
    pregunta.textContent = "Ehmm.. esto ya debería aburrirte, ahí va un chiste";
}
})

// botonsi.addEventListener("click",()=>{
//     b4.style.visibility="hidden";
//     b1.style.visibility = "visible";
// })

