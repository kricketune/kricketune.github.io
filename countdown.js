// This function implies every key in `obj` is an element class.
function obj2dom (obj, wrapper) {
	let keys = Object.keys(obj)
	
	keys.forEach(
		key => document.querySelector("#" + wrapper + " ." + key).innerHTML = obj[key]
	)
}

function next_date(date) {
	let now = new Date()
	let year = now.getFullYear()
	let month = date.getMonth()
	let day = date.getDate()
	
	let new_date = new Date(year, month, day, 0, 0, 0)
	
	if (now > new_date) new_date.setFullYear(year + 1)
	
	return new_date
}

function time_difference(a, b) {
	if (a < b) return time_difference(b, a)

	let miliseconds = a.getTime() - b.getTime()
	let seconds = Math.floor(miliseconds / 1000)
	let minutes = Math.floor(seconds / 60)
	let hours = Math.floor(minutes / 60)
	let days = Math.floor(hours / 24)

	return {
		days: days,
		hours: hours - days * 24,
		minutes: minutes - hours * 60,
		seconds: seconds - minutes * 60,
		miliseconds: miliseconds - seconds * 1000
	}
}

/* --- --- --- --- --- --- --- --- --- */

function yo(date, wrapper) {
	obj2dom( time_difference( date, new Date() ), wrapper )
}

let yay = new Date('1994-12-16T00:00:00')
let nofap = new Date('2021-03-08T23:00:00')

window.setInterval( () => yo(next_date(yay), "c1"), 1 )
window.setInterval(() => yo(nofap, "c2"), 1)

// BUGS:
// Get a better way of calling all of those countdowns
