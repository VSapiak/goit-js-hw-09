const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 }

btnStart.addEventListener('click', function() {
		timeId = setInterval(() => {
			document.body.style.backgroundColor = getRandomHexColor();
		}, 1000);
		btnStart.disabled = true;
});

btnStop.addEventListener('click', function() {
	const timeId = null;
	clearInterval(timeId);
	btnStart.disabled = false;
});