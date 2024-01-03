
// Obtenha os elementos h3 dentro do primeiro span
var genesHeadings = document.querySelectorAll('.genes h3');

// Obtenha os elementos h3 dentro do segundo span
var gen1 = document.querySelector('.gen1');
var gen2 = document.querySelector('.gen2');
var gen3 = document.querySelector('.gen3');

// Atribua os valores correspondentes
gen1.textContent = genesHeadings[0].textContent;
gen2.textContent = genesHeadings[1].textContent;
gen3.textContent = genesHeadings[2].textContent;





// iframe
function resizeIframe() {
  var iframes = document.getElementsByClassName("resizeable-iframe");

  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i];
    
    // Aguarde o carregamento do iframe
    iframe.onload = function () {
      if (iframe.contentDocument && iframe.contentDocument.body.scrollHeight) {
        // Ajusta a altura do iframe com base no conteúdo
        iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px';
      }
    };
  }
}

// Chame a função para garantir que seja executada
resizeIframe();


  
// status
document.addEventListener("DOMContentLoaded", function() {
  var statusElement = document.getElementById("status");
  var secondListItem = document.querySelector('.main2 ul li:nth-child(2)');
  var stateOnValue;

  if (statusElement.textContent.trim() === "Off") {
    stateOnValue = "Encerrado";
  } else if (statusElement.textContent.trim() === "On") {
    stateOnValue = "Lançamento";
    secondListItem.classList.add("desative");
  }

  statusElement.setAttribute("data-stateOn", stateOnValue);
});




// ano lançamento
document.addEventListener('DOMContentLoaded', function() {
  // Seletor para todos os elementos .listhor
  var listhorElements = document.querySelectorAll('.main2');

  listhorElements.forEach(function(listhorElement) {
    // Seletor para o primeiro <li> dentro de .listhor
    var firstListItem = listhorElement.querySelector('li:nth-child(1)');

    // Obtém o ano presente
    var anoAtual = new Date().getFullYear();

    // Obtém o ano do <li>
    var anoDoLi = parseInt(firstListItem.textContent);

    // Calcula a diferença de anos
    var diferencaDeAnos = anoAtual - anoDoLi;

    // Atualiza o atributo data-content
    firstListItem.setAttribute('data-content', 'Há ' + diferencaDeAnos + ' anos');
  });
});






function atsection(clickedElement, targetElementId) {
  // Remove a classe .attsection de todos os itens da lista
  var listItems = document.querySelectorAll('.main3 li');
  listItems.forEach(function(item) {
    item.classList.remove('attsection');
  });

  // Adiciona a classe .attsection ao elemento clicado
  clickedElement.classList.add('attsection');

  // Remove a classe .attsection de todos os elementos de conteúdo
  var contentElements = document.querySelectorAll('.content');
  contentElements.forEach(function(content) {
    content.classList.remove('attsection');
  });

  // Adiciona a classe .attsection ao elemento alvo
  var targetElement = document.getElementById(targetElementId);
  if (targetElement) {
    targetElement.classList.add('attsection');
  }
}

// Adiciona a classe .attsection ao primeiro <li> e conteúdo ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  var firstListItem = document.querySelector('.main3 li');
  atsection(firstListItem, 'episodios');
});

//nota 
document.addEventListener("DOMContentLoaded", function() {
  var topSsElement = document.querySelector('.topSs');

  if (topSsElement.textContent.trim() === "0.0" || topSsElement.textContent.trim() === "0" || topSsElement.textContent.trim() === "00") {
    topSsElement.textContent = "N/A";
  }
});


// next temp
document.addEventListener("DOMContentLoaded", function() {
  var nextEpButton = document.getElementById("nextT");

  nextEpButton.addEventListener("click", function() {
    if (nextEpButton.classList.contains("ativo")) {
      nextEpButton.classList.remove("ativo");
    } else {
      nextEpButton.classList.add("ativo");
    }
    
    var spans = document.querySelectorAll('.main1 div span');
    var ultimoSpan = spans[spans.length - 1];

    if (ultimoSpan.classList.contains("ativo")) {
      ultimoSpan.classList.remove("ativo");
    } else {
      ultimoSpan.classList.add("ativo");
    }
  });
});


// próxima temp
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('.buttonTemp a');
  var nextTButton = document.getElementById('nextT');

  links.forEach(function(link) {
    if (link.getAttribute("href") === "") {
      link.classList.add("none");
    }
  });

  // Verifica se ambos os links estão vazios e adiciona a classe ao botão
  if (links[0].getAttribute("href") === "" && links[1].getAttribute("href") === "") {
    nextTButton.classList.add("none");
  }
});

// imagem padrao
document.addEventListener('DOMContentLoaded', function() {
  var fundoPa = document.getElementById('fundopa');
  var capaImg = document.getElementById('capa').querySelector('img');

  // Verifica se a classe .imgP está presente e a largura da tela é no máximo 700 pixels
  if (fundoPa.classList.contains('imgP') && window.innerWidth <= 700) {
    // Atualiza o background-image com o src da imagem
    fundoPa.style.backgroundImage = 'url(' + capaImg.src + ')';
  }
});
