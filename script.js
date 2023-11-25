    // Função para carregar conteúdo de index.html no elemento com ID "elementsId"
    function carregarConteudo() {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Atualizando dados no array
          document.getElementById("elementsId").innerHTML = this.responseText;

          // Atualizando os dados diretamente no DOM
          document.getElementById("titulo").innerText = dados.texto2;
          document.getElementById("paragrafo").innerText = dados.texto1;
        }
      };
      xhr.open("GET", "index.html", true);
      xhr.send();
    }

    // Chama a função ao carregar a página
    window.onload = carregarConteudo;
