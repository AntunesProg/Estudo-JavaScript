const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    const produto = frm.InProduto.value
    const preco = frm.InPreco.value
    const promocao = preco * 2
    const desconto = promocao.toFixed(2)
    const descontoSemCentavos = Math.floor(promocao)
    resp.innerText = `Produto: ${produto}\nPreço: R$ ${preco}\nPromoção: Leve 2 por R$ ${descontoSemCentavos}` // Exibe a resposta
    e.preventDefault() // Evita o envio do form
})