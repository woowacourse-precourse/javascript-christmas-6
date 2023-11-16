import { ERROR } from './constants';
class DateError extends Error {
	constructor(...params) {
		super(...params);
		this.message = ERROR.message.NOT_VALID_NUMBER;
		this.name = ERROR.name.DATE;
	}
}
class MenuError extends Error {
	constructor(...params) {
		super(...params);
		this.message = ERROR.message.NOT_VALID_ORDER;
		this.name = ERROR.name.ORDER;
	}
}

export { DateError, MenuError };
