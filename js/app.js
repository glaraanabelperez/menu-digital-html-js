// AGREGA CLASE boxCardAnimated AL HACER SCROLL PARA ANIMAR COMPONENTE CARD 
window.onscroll = function() {

    let scrollPosY = window.pageYOffset | document.body.scrollTop;

    if (scrollPosY >= 400) {
        subir = document.querySelector('#subir');
        subir.classList.add("irArriba");
    } else {
        subir = document.querySelector('#subir');
        subir.classList.remove("irArriba");
    }

};
var heladeria = [{clave:"cafe", valor:10},
        {clave:"jugo", valor:20},
        {clave:"postres", valor: 30}];
window.onload=function llenarMenu(){
    

    for(let i=0; i<heladeria.length; i++){
        const datosHeladeria = document.querySelector('#datosHelados');
        let div=document.createElement("div");
        div.innerHTML=`
        <div class="espacio-check">
            <input class="form-check-input" type="checkbox" id="${i}"  name="${i}" value="${heladeria[i].clave}">
            <label class="form-check-label">${heladeria[i].clave}</label>    
        </div>
        <label class="form-check-label label2">${heladeria[i].valor}</label>
        `
        datosHeladeria.appendChild(div);      
    }
}



// DESPLAZAMIENTO SMOOTH SCROLL
// window.onload = function() {
//     // llenarMenu();
//     const easeInCubic = function(t) { return t * t * t }
//     const scrollElems = document.getElementsByClassName('scroll');

//     const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {

//         const runtime = stamp - start;
//         let progress = runtime / duration;
//         const ease = easeInCubic(progress);

//         progress = Math.min(progress, 1);

//         const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
//         window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));

//         if (runtime < duration) {
//             requestAnimationFrame((timestamp) => {
//                 const stamp = new Date().getTime();
//                 scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
//             })
//         }
//     }

//     for (let i = 0; i < scrollElems.length; i++) {
//         const elem = scrollElems[i];

//         elem.addEventListener('click', function(e) {
//             e.preventDefault();
//             const scrollElemId = e.target.href.split('#')[1];
//             const scrollEndElem = document.getElementById(scrollElemId);

//             const anim = requestAnimationFrame(() => {
//                 const stamp = new Date().getTime();
//                 const duration = 1200;
//                 const start = stamp;

//                 const startScrollOffset = window.pageYOffset;

//                 const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

//                 scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
//             })
//         })
//     }
// }

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    console.log(checkBox);
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

function verPedido(){    
    console.log("funcionando");
    let i=0;
    while(i<heladeria.length){
        if(i<heladeria.length){
            console.log("i: ", i);

            console.log("getElement", document.getElementById("0"));
            console.log("getElement i", document.getElementById(i));
            var evaluar=document.getElementById(i);
            if(evaluar.checked==true) { 
                console.log("hasta aca");
                let listPedidos = document.getElementById("listPedido");
                console.log("lisPedidos", listPedidos);
                let div=document.createElement("div");
                console.log("div", div);

                div.innerHTML=`
                <h5>${heladeria[i].clave}</h5>
                `
                console.log("heladeria pos: ", heladeria[i].clave);
                listPedido.appendChild(div); 
            } 
        }
        i++;
    }
   
}