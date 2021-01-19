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

var seccion=["heladeria", "cafeteria", "meriendas", "reposteria", "bebidas", "minutas", "postres"];
var idSeccion=["datos-heladeria", "datos-cafeteria", "datos-meriendas", "datos-reposteria", "datos-bebidas", "datos-minutas", "datos-postres" ];
var heladeria = [
    {clave:"vasito 40", valor:110},
    {clave:"vasito 60", valor:140},
    {clave:"vasito 65", valor:160},
    {clave:"capelina", valor:190},
    {clave:"cucurucho", valor:200},
    {clave:"cucuruchon 3 gustos", valor:140},
    {clave:"cucuruchon 3 gustos", valor:190},
    {clave:"1/4", valor:220},
    {clave:"1/2k", valor:380},
    {clave:"1k", valor:700},
    {clave:"cucurucho x uni", valor:50},
    ];
var cafeteria = [
    {clave:"cortado", valor:100},
    {clave:"expresso", valor:100},
    {clave:"lagrima", valor:100},
    {clave:"americano", valor:120},
    {clave:"americano con crema", valor:120},
    {clave:"cafe con crema", valor:120},
    {clave:"cafe para llevar", valor:130},
    {clave:"cafe doble", valor:140},
    {clave:"cafe con leche", valor:140},
    {clave:"lagrima doble", valor:140},
    {clave:"cafe doble con crema", valor:150},
    {clave:"cafe con leche 2 lunas", valor:200},
    {clave:"capuchino", valor:220},
    {clave:"chocolatada", valor:180},
    {clave:"submarino", valor:190},
    {clave:"te para 1", valor:110},
    {clave:"te con leche", valor:120},
    {clave:"te especial", valor:140},
    {clave:"te para 2", valor:220},
    {clave:"leche", valor:90},
    ];
var meriendas = [
        {clave:"alfajor maizena", valor:120},
        {clave:"alfajor milhojas", valor:180},
        {clave:"magdalena", valor: 100},
        {clave:"pastafrola", valor:150},
        {clave:"medialuna", valor:50},
        {clave:"churro", valor: 50},
        {clave:"madialuna jamon y queso", valor:90},
        {clave:"tostadas", valor:150},
        {clave:"desayuno merienda", valor: 390},
        {clave:"desayuno light", valor: 420}

    ];
var reposteria = [
        {clave:"brownie", valor:300},
        {clave:"cheese cake", valor:300},
        {clave:"chocotorta", valor: 300},
        {clave:"crumble", valor:300},
        {clave:"lemon pie", valor:300},
        {clave:"mousse de chocolate", valor: 300},
        {clave:"tarta de frutillas", valor:300},
        {clave:"selva negra", valor:300},
        {clave:"torta rougel", valor: 300}
    ];
var bebidas = [
    {clave:"jugo baggio", valor:300},
    {clave:"agua mineral", valor:100},
    {clave:"pepsi", valor: 100},
    {clave:"pepsi 0 azur", valor:100},
    {clave:"seven up", valor:100},
    {clave:"mirinda", valor: 100},
    {clave:"paso de los toros pomelo", valor:100},
    {clave:"pasos de los toros tonica", valor:100},
    {clave:"jugo exprimido", valor: 220},
    {clave:"levite manzana", valor:100},
    {clave:"levite naranja", valor:100},
    {clave:"levite pera", valor: 100},
    {clave:"levite pomelo", valor:100},
    {clave:"licuado c/ agua", valor:220},
    {clave:"licuado c/ leche", valor: 250},
    {clave:"licuado multifrutas", valor:270},
    {clave:"water shake", valor:250},
    {clave:"milk shake", valor: 270},
    {clave:"lemon champs", valor:300},
    {clave:"porron Quilmes", valor:200},
    {clave:"porron Stella", valor: 200},
    {clave:"Cororna", valor:220},
    {clave:"caipi Frozzen", valor:300},
    {clave:"Daiquiris", valor: 300}
    ];
var minutas = [
        {clave:"sandwicj queso y crudo", valor:400},
        {clave:"sandwich jamon y queso", valor:360},
        {clave:"tostados", valor: 360},
        {clave:"mini Pizzas 2 uni", valor:200},
        {clave:"rapiditas", valor: 180}
    ];
var postres = [
        {clave:"banan split", valor:290},
        {clave:"copa Freschezza", valor:330},
        {clave:"copa tiramisu", valor: 200},
        {clave:"coppa di frutas", valor:235},
        {clave:"helada a eleccion", valor:290},
        {clave:"panqueque aleman", valor: 360},
        {clave:"tropea", valor:290},
        {clave:"waffle", valor:360},
        {clave:"waffle frutal", valor: 430}
    ];

function focusMethod(){
    verPedido();
    if($("#subir").hasClass("sumar")){
        $("#subir").removeClass("sumar");
    }else{
        $("#subir").addClass("sumar");
    }

}

function llenarDatos(){
    var vector=0;
    var c="n";
    var v=0;
    for(let i=0; i<seccion.length; i++){
        
        if(seccion[i]=="heladeria"){
            vector=heladeria.length;
        }
        if(seccion[i]=="cafeteria"){
            vector=cafeteria.length;
        }
        if(seccion[i]=="meriendas"){
            vector=meriendas.length;
        }
        if(seccion[i]=="reposteria"){
            vector=reposteria.length;
        }
        if(seccion[i]=="bebidas"){
            vector=bebidas.length;
        }
        if(seccion[i]=="minutas"){
            vector=minutas.length;
        }else if(seccion[i]=="postres"){
            vector=postres.length;
        }

        for(var e=0; e<vector; e++){
            
            if(seccion[i]=="heladeria"){
                c=heladeria[e].clave;
                v=heladeria[e].valor;
            }
            if(seccion[i]=="cafeteria"){
                c=cafeteria[e].clave;
                v=cafeteria[e].valor;
            }
            if(seccion[i]=="meriendas"){
                c=meriendas[e].clave;
                v=meriendas[e].valor;
            }
            if(seccion[i]=="reposteria"){
                c=reposteria[e].clave;
                v=reposteria[e].valor;
            }
            if(seccion[i]=="bebidas"){
                c=bebidas[e].clave;
                v=bebidas[e].valor;
            }
            if(seccion[i]=="minutas"){
                c=minutas[e].clave;
                v=minutas[e].valor;
            }
            if(seccion[i]=="postres"){
                c=postres[e].clave;
                v=postres[e].valor;
            }
                const datos = document.querySelector('#'+ idSeccion[i]);
                let div=document.createElement("div");
                div.innerHTML=`
                <div class="contenedor-input">
                <div class="espacio-check">
                    <input class="form-check-input" type="checkbox" onclick="focusMethod()" id="${i}"  name="checkBox" value="${c}"">
                    <label class="form-check-label">${c}</label>    
                </div>
                <label class="form-check-label label2">${v}</label>
                </div>
                `
                datos.appendChild(div);
        }      
    }
}

function crearSecciones(){

    for(let i=0; i<seccion.length; i++){
        let divBase=document.createElement("div");
        divBase.innerHTML=`
        <section class="cardFeatures" id="${seccion[i]}">
                <div class="fondo-heladeria">
                        <h3>${seccion[i]}</h3>
                        <hr class="colorHr1">        
                        <div class="form-check" id="${idSeccion[i]}">
                        </div>     
                </div>
            </section>
        `
        base.appendChild(divBase);
    }    
    llenarDatos();
}

function verPedido(){ 
    if($("#mensajeRelicePedido").hasClass("ver")){
        $("#mensajeRelicePedido").removeClass("ver");
        $("#mensajeRelicePedido").addClass("oculto");
    }
    var checkboxes = document.getElementsByName("checkBox");
    let card ='';
    card +='<div class="fondo-pedido">';
    card +='<h3>Su pedido</h3>';
    card +='<hr class="colorHr1">';
    card +='<img style="margin:auto;" class="anchoIcono" src="images/pointing-down.png" alt="">';       
    card +='</div>';

    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  {
            console.log("hola");  
            console.log(checkboxes[i].value);
            card += '<p class="icon-check">'+" " + checkboxes[i].value +'</p>';
            $('#listPedido').html(card);
        }
    }
}

//DESPLAZAMIENTO SMOOTH SCROLL
window.onload = function() {
    crearSecciones();
    const easeInCubic = function(t) { return t * t * t }
    const scrollElems = document.getElementsByClassName('scroll');

    const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {

        const runtime = stamp - start;
        let progress = runtime / duration;
        const ease = easeInCubic(progress);

        progress = Math.min(progress, 1);

        const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
        window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));

        if (runtime < duration) {
            requestAnimationFrame((timestamp) => {
                const stamp = new Date().getTime();
                scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
            })
        }
    }

    for (let i = 0; i < scrollElems.length; i++) {
        const elem = scrollElems[i];

        elem.addEventListener('click', function(e) {
            e.preventDefault();
            const scrollElemId = e.target.href.split('#')[1];
            const scrollEndElem = document.getElementById(scrollElemId);

            const anim = requestAnimationFrame(() => {
                const stamp = new Date().getTime();
                const duration = 1200;
                const start = stamp;

                const startScrollOffset = window.pageYOffset;

                const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

                scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
            })
        })
    }
}