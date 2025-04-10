document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("show");
  });
  
  document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
  });
  