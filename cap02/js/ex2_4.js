const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    const precoQuilo = frm.InBuffet.value // Obtem o preco por quilo
    const gramas = frm.InGramas.value // Obtem o consumo em gramas
    const precoGrama = precoQuilo / 1000 // Calcula o preco por grama
    const precoTotal = precoGrama * gramas  
    resp.innerText = `Preço por quilo: R$ ${precoQuilo}\nConsumo em gramas: ${gramas}g\nPreço total: R$ ${precoTotal.toFixed(2)}` // Exibe a resposta
    e.preventDefault()
})
