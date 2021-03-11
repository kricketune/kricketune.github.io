
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
	let weeks = Math.floor(days / 7)

	return {
		weeks: weeks,
		days: days - weeks * 7,
		hours: hours - days * 24,
		minutes: minutes - hours * 60,
		seconds: seconds - minutes * 60,
		// miliseconds: miliseconds - seconds * 1000
	}
}

/* --- The functions below are very specific --- */

function create_elements (obj, wrapper) {
	wrapper = document.getElementById(wrapper)
	wrapper.innerHTML = ''

	Object.keys(obj).forEach(key => {
		let p = document.createElement('p')
		let span1 = document.createElement('span')
		let span2 = document.createElement('span')

		span1.className = 'b ' + key /* <-- pay attention to this */
		span1.innerHTML = '0'
		span2.className = '_' + key
		span2.innerHTML = key

		p.append(span1, span2)
		wrapper.append(p)
	})
}

function update_elements (obj, wrapper) {	
	let ID = '#' + wrapper

	Object.keys(obj).forEach(key => {
		let selector1 = ID + ' .' + key
		let selector2 = ID + ' ._' + key
		let span1 = document.querySelector(selector1)
		let span2 = document.querySelector(selector2)

		let value = obj[key]
		if (value == 1) key = key.slice(0, -1)

		span1.innerHTML = value
		span2.innerHTML = ' ' + key
	})
}

/* --- --- --- --- --- --- --- --- --- */

function yo(date, wrapper) {
	update_elements( time_difference( date, new Date() ), wrapper )
}

let delele = new Date('2021-12-16T00:00:00')
let woop = new Date('2021-03-10T22:00:00')

create_elements( time_difference(delele, new Date()), 'c1' )
create_elements( time_difference(woop, new Date()), 'c2' )

window.setInterval(() => {
	yo(next_date(delele), "c1")
	yo(woop, "c2")
}, 1)