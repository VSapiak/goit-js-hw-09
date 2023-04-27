const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const backgroundColor = document.body.style;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 }
	let timeId = null;

btnStart.addEventListener('click', () => {
		timeId = setInterval(() => {
			backgroundColor.backgroundColor = getRandomHexColor();
		}, 500);
		btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
	clearInterval(timeId);
	btnStart.disabled = false;
});