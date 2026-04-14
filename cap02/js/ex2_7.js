const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    const produto = frm.InProduto.value
    const preco = Number(frm.InPreco.value)
    const promocao = preco * 2 + preco / 2

    resp.innerText = `${produto} - Promoção Leve 3 por R$: ${promocao.toFixed(2)}\n O terceiro produto custa apenas R$ ${(preco / 2).toFixed(2)}` // Exibe a resposta
    e.preventDefault() // Evita o envio do form

})