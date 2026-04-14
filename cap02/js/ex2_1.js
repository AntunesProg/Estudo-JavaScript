//Referencia ao form e ao elemento h3 para mostrar a resposta

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um ouvinte de evento acionado quando o botao submitr for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.InNome.value // Obtem o nome do form
    resp.innerText = `Olá, ${nome}` // Exibe a resposta
    e.preventDefault() // Evita o envio do form
})    