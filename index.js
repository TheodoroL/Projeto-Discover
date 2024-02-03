function toggleMode() {
  const html = document.documentElement // acessa o html
  const img = document.querySelector("#profile img")
  /*
  // vai verficar se contem classe light
  if (html.classList.contains("light")) {
    html.classList.remove("light") // se tiver, vai remover ela
  } else {
    html.classList.add("light")// se não, vai adicionar ela
  }*/
  //----------Simplicando esse código do professor Marky Brito-----------
  html.classList.toggle("light")
  // mudar a imagem
  if (html.classList.contains("light")) {
    // img.src = "./assets/avatar-light.png" // jeito que eu fiz
    img.setAttribute("src", "./assets/avatar-light.png"); //jeito que o professor fez
  } else {
    // img.src = "./assets/avatar.png" 
    img.setAttribute("src", "./assets/avatar.png")
  }
}
