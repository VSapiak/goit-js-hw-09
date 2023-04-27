import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]');
const timerDiv = document.querySelector('.timer');
const field = document.getElementsByClassName('field');
const timeDays = document.querySelector('span[data-days]')
const timeHours = document.querySelector('span[data-hours]')
const timeMinutes = document.querySelector('span[data-minutes]')
const timeSeconds = document.querySelector('span[data-seconds]')
let selectTime = 0;
btnStart.disabled = true;

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		if (Date.now() > selectedDates[0].getTime()) {
			Notiflix.Notify.failure(`Please choose a date in the future!`);

		 } else {
			btnStart.disabled = false;
			selectTime = selectedDates[0].getTime();
		 }
	},
 };

flatpickr("#datetime-picker", options);

const timers = function() {
	isActive: false;
	if(this.isActive) {
		return;
	}
	const endTime = selectTime || (Date.now() + 1000 * 60 * 60 * 24);
	this.isActive = true;
 
	const intervalId = setInterval(() => {
	  const timeLeft = endTime - Date.now();
	  if (timeLeft <= 0) {
		 clearInterval(intervalId);
	  } else {
		 const time = convertMs(timeLeft);

		 textTimers(time)
		 console.log(time);
	  }
	}, 1000);
 }

btnStart.addEventListener('click', timers);


// Функція яка буле перед числом добавляти - 0;
function pad(value) {
	return String(value).padStart(2, '0');
}

 function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
 
	// Remaining days
	const days = pad(Math.floor(ms / day));
	// Remaining hours
	const hours = pad(Math.floor((ms % day) / hour));
	// Remaining minutes
	const minutes = pad(Math.floor(((ms % day) % hour) / minute));
	// Remaining seconds
	const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
 
	return { days, hours, minutes, seconds };
 }

// Виводимо час:
function textTimers({ days, hours, minutes, seconds }) {
	timeDays.textContent = `${days}`;
	timeHours.textContent = `${hours}`;
	timeMinutes.textContent = `${minutes}`;
	timeSeconds.textContent = `${seconds}`;
}

//  стилізація
timerDiv.style.marginTop = '25px';
timerDiv.style.display = 'flex';
timerDiv.style.gap = '30px';

for(let i = 0; i < field.length ; i++) {
	field[i].style.display = 'flex';
	field[i].style.flexDirection = 'column';
	field[i].style.alignItems = 'center';
	field[i].style.textTransform = 'uppercase';
}