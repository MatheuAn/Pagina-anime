const htmlContent = document.documentElement.innerHTML
	.replace(/{{(.*?)}}/g, (match, p1) => item[p1.trim()]);

document.documentElement.innerHTML = htmlContent;
