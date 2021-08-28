export function calendar(selector: string) {
	initCalendar(document.querySelector(selector));

	function initCalendar(calendar: any) {
		const date = new Date();
		let showedYear = date.getFullYear();
		let showedMonth = date.getMonth();

		const currentMoment = {
			year: showedYear,
			month: showedMonth,
			date: date.getDate(),
		};

		const dates = calendar.querySelector('.calendar_table__dates');
		const info = calendar.querySelector('.calendar_nav__info');
		drawCalendar(showedYear, showedMonth, currentMoment);

		const prev = calendar.querySelector('.calendar_nav__prev');
		const next = calendar.querySelector('.calendar_nav__next');

		prev.addEventListener('click', function () {
			showedYear = getPrevYear(showedYear, showedMonth);
			showedMonth = getPrevMonth(showedMonth);

			drawCalendar(showedYear, showedMonth, currentMoment);
		});

		next.addEventListener('click', function () {
			showedYear = getNextYear(showedYear, showedMonth);
			showedMonth = getNextMonth(showedMonth);

			drawCalendar(showedYear, showedMonth, currentMoment);
		});

		function drawCalendar(
			showedYear: any,
			showedMonth: any,
			currentMoment: any
		) {
			drawDates(showedYear, showedMonth, dates);
			showInfo(showedYear, showedMonth, info);
			showCurrentDate(showedYear, showedMonth, currentMoment, dates);
		}
	}

	function showCurrentDate(
		showedYear: any,
		showedMonth: any,
		currentMoment: any,
		dates: any
	) {
		if (
			showedYear === currentMoment['year'] &&
			showedMonth === currentMoment['month']
		) {
			const tds = dates.querySelectorAll('td');
			for (let i = 0; i < tds.length; i++) {
				if (Number(tds[i].innerHTML) === currentMoment['date']) {
					tds[i].classList.add('active');
					break;
				}
			}
		}
	}

	function getPrevYear(year: any, month: any) {
		if (month === 0) {
			return year - 1;
		} else {
			return year;
		}
	}

	function getPrevMonth(month: any) {
		if (month === 0) {
			return 11;
		} else {
			return month - 1;
		}
	}

	function getNextYear(year: any, month: any) {
		if (month === 11) {
			return year + 1;
		} else {
			return year;
		}
	}

	function getNextMonth(month: any) {
		if (month === 11) {
			return 0;
		} else {
			return month + 1;
		}
	}

	function showInfo(year: any, month: any, elem: any) {
		elem.innerHTML = getMonthName(month) + ' ' + year;
	}

	function getMonthName(num: any) {
		const monthes = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		return monthes[num];
	}

	function drawDates(year: any, month: any, dates: any) {
		let arr: any[] = [];
		const firstDateOfMonth = 1;
		const lastDateOfMonth = getLastDayOfMonth(year, month);

		const unshiftElemsNum = getUnshiftElemsNum(year, month);
		const pushElemsNum = getPushElemsNum(year, month);

		arr = createArr(firstDateOfMonth, lastDateOfMonth);
		arr = unshiftElems(unshiftElemsNum, '', arr);
		arr = pushElems(pushElemsNum, '', arr);
		arr = chunkArr(7, arr);

		createTable(arr, dates);
	}

	function createTable(arr: any, parent: HTMLElement) {
		parent.innerHTML = '';

		for (let i = 0; i < arr.length; i++) {
			const tr = document.createElement('tr');

			for (let j = 0; j < arr[i].length; j++) {
				const td = document.createElement('td');
				td.innerHTML = arr[i][j];
				tr.appendChild(td);
			}

			parent.appendChild(tr);
		}
	}

	function createArr(from: number, to: number) {
		const arr: any[] = [];
		for (let i = from; i <= to; i++) {
			arr.push(i);
		}

		return arr;
	}

	function unshiftElems(num: number, elem: string, arr: any) {
		for (let i = 0; i < num; i++) {
			arr.unshift(elem);
		}

		return arr;
	}

	function pushElems(num: number, elem: string, arr: Array<string>) {
		for (let i = 0; i < num; i++) {
			arr.push(elem);
		}

		return arr;
	}

	function getLastDayOfMonth(year: number, month: number) {
		const date = new Date(year, month + 1, 0);
		return date.getDate();
	}

	function getUnshiftElemsNum(year: number, month: number) {
		const jsDayNum = getFirstWeekDayOfMonthNum(year, month);
		const realDayNum = getRealDayOfWeekNum(jsDayNum);

		return realDayNum - 1;
	}

	function getPushElemsNum(year: number, month: number) {
		const jsDayNum = getLastWeekDayOfMonthNum(year, month);
		const realDayNum = getRealDayOfWeekNum(jsDayNum);

		return 7 - realDayNum;
	}

	function chunkArr(num: number, arr: Array<string>) {
		const result: any[] = [];
		let chunk: any[] = [];

		const iterCount = arr.length / num;

		for (let i = 0; i < iterCount; i++) {
			chunk = arr.splice(0, num);
			result.push(chunk);
		}

		return result;
	}

	function getRealDayOfWeekNum(jsNumOfDay: number) {
		if (jsNumOfDay === 0) {
			return 7;
		} else {
			return jsNumOfDay;
		}
	}

	function getFirstWeekDayOfMonthNum(year: number, month: number) {
		const date = new Date(year, month, 1);
		return date.getDay();
	}

	function getLastWeekDayOfMonthNum(year: number, month: number) {
		const date = new Date(year, month + 1, 0);
		return date.getDay();
	}
}
