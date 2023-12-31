window.onload = function () {
    // Extrair o ID do vídeo do link fornecido
    const containerElement = document.querySelector('.youtubeContainer');
    const videoUrl = containerElement.dataset.linkEmbed;
    const videoId = videoUrl.split('/').pop().split('?')[0];

    const youtubeIframe = `
      <div>
        <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;

    // Inserir o conteúdo na div com a classe "youtubeContainer"
    containerElement.innerHTML = youtubeIframe;
  };
