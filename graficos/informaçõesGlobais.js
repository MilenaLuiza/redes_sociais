const url = "";

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    cont dados = await res.json()
    console.log(dados);
}

visualizarInformacoesGlobais();
