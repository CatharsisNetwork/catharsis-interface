

export function calendar(selector:string){

initCalendar(document.querySelector(selector))

function initCalendar(calendar:any) {

    let date = new Date();
    let showedYear = date.getFullYear();
    let showedMonth = date.getMonth();

    let currentMoment = {
        year: showedYear,
        month: showedMonth,
        date: date.getDate()
    };

    let dates = calendar.querySelector('.calendar_table__dates');
    let info = calendar.querySelector('.calendar_nav__info');
    drawCalendar(showedYear, showedMonth, currentMoment, calendar);

    let prev = calendar.querySelector('.calendar_nav__prev');
    let next = calendar.querySelector('.calendar_nav__next');

    prev.addEventListener('click', function() {
        showedYear = getPrevYear(showedYear, showedMonth);
        showedMonth = getPrevMonth(showedMonth);

        drawCalendar(showedYear, showedMonth, currentMoment, calendar);
    });

    next.addEventListener('click', function() {
        showedYear = getNextYear(showedYear, showedMonth);
        showedMonth = getNextMonth(showedMonth);

        drawCalendar(showedYear, showedMonth, currentMoment, calendar);
    });

    function drawCalendar(showedYear:any, showedMonth:any, currentMoment:any, calendar:any) {
        drawDates(showedYear, showedMonth, dates);
        showInfo(showedYear, showedMonth, info);
        showCurrentDate(showedYear, showedMonth, currentMoment, dates);
    }
}

function showCurrentDate(showedYear:any, showedMonth:any, currentMoment:any, dates:any) {
    if (
        showedYear === currentMoment['year'] &&
        showedMonth === currentMoment['month']
    ) {
        let tds = dates.querySelectorAll('td');
        for (let i = 0; i < tds.length; i++) {
            if (Number(tds[i].innerHTML) === currentMoment['date']) {
                tds[i].classList.add('active');
                break;
            }
        }
    }
}

function getPrevYear(year:any, month:any) {
    if (month === 0) {
        return year - 1;
    } else {
        return year;
    }
}

function getPrevMonth(month:any) {
    if (month === 0) {
        return 11;
    } else {
        return month - 1;
    }
}

function getNextYear(year:any, month:any) {
    if (month === 11) {
        return year + 1;
    } else {
        return year;
    }
}

function getNextMonth(month:any) {
    if (month === 11) {
        return 0;
    } else {
        return month + 1;
    }
}

function showInfo(year:any, month:any, elem:any) {
    elem.innerHTML = getMonthName(month) + ' ' + year;
}

function getMonthName(num:any) {
    let monthes = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return monthes[num];
}

function drawDates(year:any, month:any, dates:any) {
    let arr = [];
    let firstDateOfMonth = 1;
    let lastDateOfMonth = getLastDayOfMonth(year, month);

    let unshiftElemsNum = getUnshiftElemsNum(year, month);
    let pushElemsNum = getPushElemsNum(year, month);

    arr = createArr(firstDateOfMonth, lastDateOfMonth);
    arr = unshiftElems(unshiftElemsNum, '', arr);
    arr = pushElems(pushElemsNum, '', arr);
    arr = chunkArr(7, arr);

    createTable(arr, dates);
}

function createTable(arr:any, parent: HTMLElement ) {
    parent.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < arr[i].length; j++) {
            let td = document.createElement('td');
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
        }

        parent.appendChild(tr);
    }
}

function createArr(from:number, to:number) {
    let arr = [];
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }

    return arr;
}

function unshiftElems(num:number, elem:string, arr:any) {
    for (let i = 0; i < num; i++) {
        arr.unshift(elem);
    }

    return arr;
}

function pushElems(num:number, elem:string, arr:Array<string>) {
    for (let i = 0; i < num; i++) {
        arr.push(elem);
    }

    return arr;
}

function getLastDayOfMonth(year:number, month:number) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}


function getUnshiftElemsNum(year:number, month:number) {
    let jsDayNum = getFirstWeekDayOfMonthNum(year, month);
    let realDayNum = getRealDayOfWeekNum(jsDayNum);

    return realDayNum - 1;
}

function getPushElemsNum(year:number, month:number) {
    let jsDayNum = getLastWeekDayOfMonthNum(year, month);
    let realDayNum = getRealDayOfWeekNum(jsDayNum);

    return 7 - realDayNum;
}

function chunkArr(num:number, arr:Array<string>) {
    let result = [];
    let chunk = [];
    let iterCount = arr.length / num;

    for (let i = 0; i < iterCount; i++) {
        chunk = arr.splice(0, num);
        result.push(chunk);
    }

    return result;
}

function getRealDayOfWeekNum(jsNumOfDay:number) {
    if (jsNumOfDay === 0) {
        return 7;
    } else {
        return jsNumOfDay;
    }
}

function getFirstWeekDayOfMonthNum(year:number, month:number) {
    let date = new Date(year, month, 1);
    return date.getDay();
}

function getLastWeekDayOfMonthNum(year:number, month:number) {
    let date = new Date(year, month + 1, 0);
    return date.getDay();
}
}