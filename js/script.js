// Agregar evento al pasar el mouse sobre los botones
document.getElementById("instagramBtn").addEventListener("mouseover", function(){
    this.style.backgroundColor = "orange";
});
document.getElementById("twitterBtn").addEventListener("mouseover", function(){
    this.style.backgroundColor = "purple";
});
document.getElementById("linkedinBtn").addEventListener("mouseover", function(){
    this.style.backgroundColor = "green";
});


// Obtener el banner y el título
var banner = document.querySelector(".banner-image");
