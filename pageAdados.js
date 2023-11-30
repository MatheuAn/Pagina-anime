function renderAnimeTemplate(item) {
  return `
    <section id="pagean">
      <div id="part1">
        <group id="detalspa" onclick="closedatals()">
          <div>
            <iframe id="opanime" src="${item.opening}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <img id="capapa" src="${item.capa}" />
            <span class="mains">
              <h3 id="titlepa">${item.title}</h3>
              <div class="classespa">
                <h3>${item.categoria}</h3>
                <h3>${item.genero1}</h3>
                <h3>${item.genero2}</h3>
                <h3>${item.genero3}</h3>
                <h3>${item.genero4}</h3>
              </div>
              <h8 id="hsino">${item.sinopse}</h8>
              <span class="dadosmain">
                <span><h1>${item.tipo}</h1></span>
                <span><h1>${item.país}</h1></span>
                <span><h1>${item.ano}</h1></span>
                <span><h1>${item.state}</h1></span>
                <span><h1>${item.duration}</h1></span>
                <span><h1>${item.estudio}</h1></span>
                <span><h1>${item.autor}</h1></span>
              </span>
            </span>
          </div>
        </group>
        <div class="fundopa" style="background-image:url('${item.capamobile}')"></div>
        <div class="perfilan">
          <h8>${item.subtitle}</h8>
          <h1 id="titlepa">${item.title}</h1>
          <span id="playsb">
            <span></span>
            <span id="playpa" onclick="videop()"></span>
          </span>
          <div>
            <h3>${item.categoria}</h3>
            <h3>${item.genero1}</h3>
            <h3>${item.genero2}</h3>
            <h3>${item.genero3}</h3>
            <h3>${item.genero4}</h3>
            <p>${item.temporada}</p>
          </div>
          <group>
            <span id="sinopsepa">${item.sinopse}</span>
            <div class="mainspc">
              <span id="dadosmains"></span>
            </div>
            <div class="mainsdados">
              <h2>${item.numero}</h2>
              <h2 data-ano="Ano" data-mes="">${item.ano}</h2>
              <h2 data-idioma="Tipo" data-categoria="Dublado">${item.classe}</h2>
              <h2 id="state">${item.state}</h2>
            </div>
          </group>
        </div>
      </div>
      <iframe id="meuIframe" src="${item.listaEp}" frameborder="0"></iframe>
    </section>
  `;
}


const renderedHTML = renderAnimeTemplate(animeData);

// Adicione a variável 'renderedHTML' ao DOM conforme necessário.
document.body.innerHTML = renderedHTML;
