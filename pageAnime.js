var h2Element = document.querySelector('h2[data-ano]');
	
	if (h2Element) {
		var anoDoH2 = parseInt(h2Element.innerText);
		var anoAtual = new Date().getFullYear();
		var diferencaAnos = anoAtual - anoDoH2;
	
		if (diferencaAnos === 0) {
			h2Element.dataset.mes = "Este ano";
		} else {
			h2Element.dataset.mes = "Há " + diferencaAnos + " anos";
		}
	}
	
	
	
	// clone 
	var stateElements = document.querySelectorAll('.perfilan group h2');
	
	var offFound = false;
	
	stateElements.forEach(function(element) {
		if (element.innerHTML.trim() === "OFF") {
			offFound = true;
		}
	});
	
	if (offFound) {
		stateElements.forEach(function(element) {
			element.classList.add("outher");
		});
	}
	



	
	
	
	
	
	function ajustarAlturaIframe() {
		var larguraMinima = 700; // Largura mínima para aplicar o cálculo
	
		var iframe = document.getElementById('meuIframe');
		var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
		if (larguraTela >= larguraMinima) {
			var alturaIdeal = iframe.contentWindow.document.body.scrollHeight + 10;
			iframe.style.height = alturaIdeal + 'px';
		} else {
			// Restaurar altura padrão se a largura for menor que 800 pixels
			iframe.style.height = '';
		}
	}
	
	// Chame a função quando o conteúdo do iframe estiver carregado
	document.getElementById('meuIframe').onload = ajustarAlturaIframe;
	
	// Também chame a função se o tamanho da janela for alterado
	window.onresize = ajustarAlturaIframe;
	
	
	
	
	
	  document.querySelector("#playpa").addEventListener("click", function() {
    var detalspa = document.querySelector("#detalspa");
    var body = document.querySelector("body");

    detalspa.classList.add("play");

    if (detalspa.classList.contains("play")) {
        body.classList.add("hidden");
    } else {
        body.classList.remove("hidden");
    }
});

function closedatals() {
    var detalspa = document.querySelector("#detalspa");
    var body = document.querySelector("body");

    detalspa.classList.remove("play");
    body.classList.remove("hidden");
}

const fundopaElement = document.querySelector('.fundopa');
const capapaImage = document.getElementById('capapa');

// Check if the background-image URL is empty
if (fundopaElement.style.backgroundImage === 'url("")') {
	// Set the background-image URL to the src of the capapa image
	fundopaElement.style.backgroundImage = `url('${capapaImage.src}')`;
}

var dadosmainContent = document.querySelector('.dadosmain').outerHTML;

  // Atualiza o conteúdo do elemento com ID "dadosmains"
  document.getElementById('dadosmains').outerHTML = dadosmainContent;
