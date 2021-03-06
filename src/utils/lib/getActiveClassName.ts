export function getActiveClassName(
	style: any,
	property: string | null,
	active: boolean | string,
	extension?: string
) {
	if (!property) return ` ${style[active ? 'active' : '']}`;
	return extension
		? `${style[property]} ${style[active === `${extension}` ? 'active' : '']}`
		: `${style[property]} ${style[active ? 'active' : '']}`;
}

export function getClassName(style: any, property: string, active: string) {
	return ` ${style[active]} ${style[property]}`;
}
