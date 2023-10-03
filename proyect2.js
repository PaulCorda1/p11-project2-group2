
window.onload = function(){

    const list = ["Hola", 2, ];
    console.log(list);
    
    const boton = document.querySelector('.deleteButton');
    boton.addEventListener('click', function(){
        list.push("nuevo elemento");
        console.log(list);
    });

    
}


