function mostrarCuriosidade() {

    const curiosidades = [
        "A IA é usada em aplicativos como Google Maps e Spotify.",
        "Chatbots utilizam Inteligência Artificial para conversar com pessoas.",
        "Carros autônomos dependem de Inteligência Artificial.",
        "A IA já auxilia médicos na análise de exames."
    ];

    const numero = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("mensagem").innerHTML = curiosidades[numero];
}
