import Menu from '../src/Model/Menu';

describe('메뉴 이름과 수량 입력값 테스트', () => {
	const INVALID_MENU_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';
	test('형식에 맞지 않은 입력값', () => {
		const INVALID_MENU = '크리스마스파스타4';
		expect(() => new Menu(INVALID_MENU)).toThrow(INVALID_MENU_MESSAGE);
	});
	test('메뉴 개수 0개 입력', () => {
		const INVALID_MENU = '크리스마스파스타-0,와인-0';
		expect(() => new Menu(INVALID_MENU)).toThrow(INVALID_MENU_MESSAGE);
	});
	test('음료 1개 입력', () => {
		const INVALID_MENU = '와인-1';
		expect(() => new Menu(INVALID_MENU)).toThrow(INVALID_MENU_MESSAGE);
	});
	test('매뉴 총 개수 20개 초과', () => {
		const INVALID_MENU = '크리스마스파스타-10,와인-20';
		expect(() => new Menu(INVALID_MENU)).toThrow(INVALID_MENU_MESSAGE);
	});
	test('중복 메뉴 입력', () => {
		const INVALID_MENU = '크리스마스파스타-1,크리스마스파스타-2,와인-3';
		expect(() => new Menu(INVALID_MENU)).toThrow(INVALID_MENU_MESSAGE);
	});
});
