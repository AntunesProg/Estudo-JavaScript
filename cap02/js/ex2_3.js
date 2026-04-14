const frm = document.querySelector("form")
const resp = document.querySelector("h3")



frm.addEventListener("submit", (e) => {
    const modelo = frm.InModelo.value // Obtem o modelo do form
    const preco = frm.InPreco.value
    const precoMetade = preco / 2
    const precoParcela = precoMetade / 12
    resp.innerText = `Modelo: ${modelo}\nPreço: R$ ${preco}\nMetade: R$ ${precoMetade}\nParcela x12: R$ ${precoParcela.toFixed(2)}` // Exibe a resposta
    e.preventDefault() // Evita o envio do form
})    