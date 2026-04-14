const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    const nome = frm.InNome.value // Obtem o nome do form
    const duracao = frm.InDuracao.value
    const minutagem = duracao % 60
    const horas = Math.floor(duracao / 60) // Obtem a duração do form
    resp.innerText = `${nome} \n ${horas} horas e ${minutagem} minutos` // Exibe a resposta
    e.preventDefault() // Evita o envio do form
})    