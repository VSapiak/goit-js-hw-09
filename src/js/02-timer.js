import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// const inputDataPicker = document.getElementById('datetime-picker');
const btnStart = document.querySelector('button[data-start]');
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
			window.alert('Please choose a date in the future!');
		 } else {
			btnStart.disabled = false;
			selectTime = selectedDates[0].getTime();
		 }
	},
 };

flatpickr("#datetime-picker", options);



//  function convertMs(ms) {
// 	// Number of milliseconds per unit of time
// 	const second = 1000;
// 	const minute = second * 60;
// 	const hour = minute * 60;
// 	const day = hour * 24;
 
// 	// Remaining days
// 	const days = Math.floor(ms / day);
// 	// Remaining hours
// 	const hours = Math.floor((ms % day) / hour);
// 	// Remaining minutes
// 	const minutes = Math.floor(((ms % day) % hour) / minute);
// 	// Remaining seconds
// 	const seconds = Math.floor((((ms % day) % hour) % minute) / second);
 
// 	return { days, hours, minutes, seconds };
//  }
