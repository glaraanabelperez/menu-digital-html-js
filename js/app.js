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
    {clave:"vasito 40", valor:120},
    {clave:"vasito 60", valor:150},
    {clave:"vasito 65", valor:180},
    {clave:"capelina", valor:230},
    {clave:"cucurucho", valor:220},
    {clave:"cucuruchon 3 gustos", valor:190},
    {clave:"cucuruchon 3 gustos", valor:220},
    {clave:"1/4", valor:240},
    {clave:"1/2k", valor:400},
    {clave:"1k", valor:750},
    {clave:"cucurucho x uni", valor:50},
    ];
var cafeteria = [
    {clave:"cortado", valor:110},
    {clave:"expresso", valor:110},
    {clave:"lagrima", valor:110},
    {clave:"americano", valor:130},
    {clave:"americano con crema", valor:150},
    {clave:"cafe con crema", valor:130},
    {clave:"cafe para llevar", valor:140},
    {clave:"cafe doble", valor:160},
    {clave:"cafe con leche", valor:150},
    {clave:"lagrima doble", valor:140},
    {clave:"cafe doble con crema", valor:170},
    {clave:"cafe con leche 2 lunas", valor:220},
    {clave:"capuchino", valor:240},
    {clave:"chocolatada", valor:200},
    {clave:"submarino", valor:210},
    {clave:"te para 1", valor:120},
    {clave:"te con leche", valor:130},
    {clave:"te especial", valor:150},
    {clave:"te para 2", valor:240},
    {clave:"leche", valor:90},
    {clave:"alfajor maizena", valor:120},
    {clave:"alfajor milhojas", valor:180},
    {clave:"magdalena", valor: 110},
    {clave:"pastafrola", valor:150},
    {clave:"medialuna", valor:60},
    {clave:"churro", valor: 60},
    {clave:"madialuna jamon y queso", valor:110},
    {clave:"tostadas", valor:160},
    ];
var meriendas = [
        
        {clave:"desayuno merienda", valor: 470},
        {clave:"desayuno light", valor: 490}

    ];
var reposteria = [
        {clave:"brownie", valor:330},
        {clave:"cheese cake", valor:330},
        {clave:"chocotorta", valor: 330},
        {clave:"crumble", valor:330},
        {clave:"lemon pie", valor:330},
        {clave:"mousse de chocolate", valor: 330},
        {clave:"tarta de frutillas", valor:330},
        {clave:"selva negra", valor:330},
        {clave:"torta Rougel", valor: 330}
    ];
var bebidas = [
    {clave:"jugo baggio", valor:70},
    {clave:"agua mineral", valor:130},
    {clave:"pepsi", valor: 130},
    {clave:"pepsi 0 azur", valor:130},
    {clave:"seven up", valor:130},
    {clave:"mirinda", valor: 130},
    {clave:"paso de los toros pomelo", valor:130},
    {clave:"pasos de los toros tonica", valor:130},
    {clave:"jugo exprimido", valor: 280},
    {clave:"levite manzana", valor:130},
    {clave:"levite naranja", valor:130},
    {clave:"levite pera", valor: 130},
    {clave:"levite pomelo", valor:130},
    {clave:"licuado c/ agua", valor:240},
    {clave:"licuado c/ leche", valor: 290},
    {clave:"licuado multifrutas", valor:300},
    {clave:"water shake", valor:270},
    {clave:"milk shake", valor: 300},
    {clave:"cafe Frozen", valor: 330},
    {clave:"milk shake para llevar", valor: 330},

    {clave:"lemon champs", valor:330},
    {clave:"porron Quilmes", valor:250},
    {clave:"porron Stella", valor: 260},
    {clave:"Cororna", valor:290},
    {clave:"caipi Frozzen", valor:330},
    {clave:"Daiquiris", valor: 330},
    {clave:"Don Pedro", valor: 390}

    ];
var minutas = [
        {clave:"sandwicj queso y crudo", valor:440},
        {clave:"sandwich jamon y queso", valor:400},
        {clave:"tostados", valor: 400},
        {clave:"mini Pizzas 2 uni", valor:220},
        {clave:"rapiditas", valor: 200}
    ];
var postres = [
        {clave:"banan split", valor:320},
        {clave:"copa Freschezza", valor:390},
        {clave:"copa tiramisu", valor: 260},
        {clave:"coppa di frutas", valor:390},
        {clave:"helada a eleccion", valor:320},
        {clave:"panqueque Aleman", valor: 390},
        {clave:"panqueque Verones", valor: 390},
        {clave:"Di Calabria", valor: 400},
        {clave:"Di Pelegrino", valor: 400},
        {clave:"tropea", valor:320},
        {clave:"banan Split", valor:320},
        {clave:"waffle", valor:390},
        {clave:"waffle frutal", valor: 470}
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