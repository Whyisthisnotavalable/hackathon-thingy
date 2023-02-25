const canvas = document.getElementById('Matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = '#0F0';
	ctx.font = fontSize + 'px monospace';

	// Assuming your canvas element is ctx

	// Color of the shadow;  RGB, RGBA, HSL, HEX, and other inputs are valid.
	ctx.shadowColor = "white"; // string

	// Horizontal distance of the shadow, in relation to the text.
	ctx.shadowOffsetX = 0; // integer

	// Vertical distance of the shadow, in relation to the text.
	ctx.shadowOffsetY = 0; // integer

	// Blurring effect to the shadow, the larger the value, the greater the blur.
	ctx.shadowBlur = 0; // integer // change for a glow, although it is very broken afterwards :(
	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		ctx.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);