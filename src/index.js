const qrElement = document.getElementById('qrcode');
new QRCode(qrElement, {
	text: 'https://animejsprototype.netlify.app',
	width: 256,
	height: 256,
	colorDark: '#000000',
	colorLight: '#ffffff',
	correctLevel: QRCode.CorrectLevel.H
});
