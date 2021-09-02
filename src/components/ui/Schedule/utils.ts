export const IsEmptyValue = (obj: any) => {
	return (
		JSON.stringify(obj) === '{}' ||
		JSON.stringify(obj) === '[]' ||
		JSON.stringify(obj) === 'null' ||
		obj === '' ||
		obj === null ||
		obj === undefined
	);
};

export const FormatNumber = (n: any) => {
	if (IsEmptyValue(n)) {
		return 0;
	}
	const parts = n.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return parts.join('.');
};

export const FormatDate = (timestamp: any) => {
	const WeekMonthDay = new Date(timestamp).toString().substr(0, 10);
	const [week, month, day] = WeekMonthDay.split(' ');

	// turn date 04 into 4
	// day = day[0] === '0' ? day.substr(1) : day;

	return `${week}, ${day[0] === '0' ? day.substr(1) : day} ${month}`;
};
