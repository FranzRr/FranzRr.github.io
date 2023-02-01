const tooltip = document.querySelectorAll(".tooltiptext");
const cajas1 = document.querySelectorAll(".caja1")
const caja = document.getElementById("caja");

caja.addEventListener('scroll', function(){
    tooltip.forEach((el,i,arr)=>{
        el.style.top = Math.round(cajas1[i].getBoundingClientRect().top) +'px';
    })
});