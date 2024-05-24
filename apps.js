document.getElementById("boton_").addEventListener("click", function () {
    let mostrar = document.getElementById("menu");
    console.log('no');
        if (mostrar.style.display == "none"){
            mostrar.style.display = "block";
        }else{
            mostrar.style.display = "none";
        }
  });