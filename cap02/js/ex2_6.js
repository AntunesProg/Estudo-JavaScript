const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const precoMinuto = Number(frm.InValor.value)
    const duracao = Number(frm.InTempo.value)

    const precoTotal = (precoMinuto / 15) * duracao

    let precoPagar

    if (duracao % 15 === 0) {
        precoPagar = precoTotal
    } else {
        precoPagar = Math.floor(precoTotal) + precoMinuto
    }

    resp.innerText = `Preço a pagar: R$ ${precoPagar}`

    e.preventDefault()
})
