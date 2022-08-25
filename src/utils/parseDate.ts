import { isValid, parse } from 'date-fns';

const templates = {
	br: 'dd/MM/yyyy'
};

export function parseDate(date: string) {
	if (isValid(parse(date, templates.br, new Date()))) {
		return parse(date, templates.br, new Date());
	}

	return null;
}
