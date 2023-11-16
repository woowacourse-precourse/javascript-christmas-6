import Date from '../src/Model/Date';
describe('날짜 입력값 테스트', () => {
	const INVALID_DATE_MESSAGE = '[ERROR]';
	test('0 이하 숫자 입력', () => {
		const INVALID_DATE = '0';
		expect(() => new Date(INVALID_DATE)).toThrow(INVALID_DATE_MESSAGE);
	});

	test('32 이상 숫자 입력', () => {
		const INVALID_DATE = '1000';
		expect(() => new Date(INVALID_DATE)).toThrow(INVALID_DATE_MESSAGE);
	});

	test('숫자가 아닌 문자 입력', () => {
		const INVALID_DATE = 'abcd';
		expect(() => new Date(INVALID_DATE)).toThrow(INVALID_DATE_MESSAGE);
	});
});
