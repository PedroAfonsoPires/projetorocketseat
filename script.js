function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto, em forma de desenho, do Pedro Afonso usando oculos escuro e camiseta preta, com colar prateado e o fundo amarelo"
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto, em forma de desenho, do Pedro Afonso usando oculos e camiseta preta, com colar prateado e o fundo amarelo"
    )
  }
}
