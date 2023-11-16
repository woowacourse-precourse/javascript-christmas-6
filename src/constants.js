export const NOTHING = '';
export const BLANK = ' '
export const DIVIDER_COMMA = ',';
export const DIVIDER_HYPHEN = '-';
export const MONTH = 12;
export const FIRST_DAY_OF_MONTH = 1;
export const LAST_DAY_OF_MONTH = 31;
export const CHRISTMAS_D_DAY = 25;
export const EVENT_MIN_PRICE = 10000;
export const D_DAY_EVENT_STARTING_PRICE = 1000;
export const D_DAY_EVENT_INCREASING_PRICE = 100;
export const STARRED_DAY_EVENT_DISCOUNT = 1000;
export const WEEK_EVENT_DISCOUNT = 2023;
export const GIVEAWAY_EVENT_MIN_PRICE = 120000;
export const MIN_AMOUNT = 1;
export const MAX_AMOUNT = 20;
export const COURSE = {
	STARTER: '에피타이저',
	MAIN: '메인',
	DESSERT: '디저트',
	DRINKS: '음료',
};
export const MENU = {
	MUSHROOM_SOUP: '양송이수프',
	TAPAS: '타파스',
	SALAD: '시저샐러드',
	STEAK: '티본스테이크',
	BBQ: '바비큐립',
	SEAFOOD_PASTA: '해산물파스타',
	X_MAS_PASTA: '크리스마스파스타',
	CHOCOLATE_CAKE: '초코케이크',
	ICE_CREAM: '아이스크림',
	ZERO_COKE: '제로콜라',
	RED_WINE: '레드와인',
	CHAMPAGNE: '샴페인',
};

export const EVENT_DAYS = {
	WEEKENDS: [1, 2, 8, 9, 15, 16, 23, 24, 30, 31],
	STARRED_DAYS: [3, 10, 17, 24, 25, 31],
};
export const UNIT = {
	WON: '원',
	GAE: '개',
};
export const AMOUNT = {
	NONE: '없음',
	ZERO: 0,
	ONE: 1,
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5,
	SIX: 6,
	SEVEN: 7,
	EIGHT: 8,
	NINE: 9,
	TEN: 10,
	ELEVEN: 11,
	TWELVE: 12,
	THIRTEEN: 13,
	FOURTEEN: 14,
	FIFTEEN: 15,
	SIXTEEN: 16,
	SEVENTEEN: 17,
	EIGHTEEN: 18,
	NINETEEN: 19,
	TWENTY: 20,
};

export const EVENT_BADGE = {
	STAR: '별',
	TREE: '트리',
	SANTA: '산타',
	STAR_MIN: 5000,
	TREE_MIN: 10000,
	SANTA_MIN: 20000,
};
export const GREETING = `안녕하세요! 우테코 식당 ${MONTH}월 이벤트 플래너입니다.`;
export const ASK = {
	SCHEDULE: `${MONTH}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`,
	MENU_INFO: `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. ${MENU.SEAFOOD_PASTA}-${AMOUNT.TWO},${MENU.RED_WINE}-${AMOUNT.ONE},${MENU.CHOCOLATE_CAKE}-${AMOUNT.ONE})'`,
};
export const SEE_MORE_ABOUT_EVENTS = (scheduledDay) =>
	`${MONTH}월 ${scheduledDay}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`;
export const HEADER = Object.freeze({
	MENU: '\n<주문 메뉴>',
	TOTAL_PRICE_BEFORE_DISCOUNT: '\n<할인 전 총주문 금액>',
	GIVEAWAY_MENU: '\n<증정 메뉴>',
	BENEFITS_LIST: '\n<혜택 내역>',
	TOTAL_BENEFITS_PRICE: '\n<총혜택 금액>',
	TOTAL_PRICE_AFTER_DISCOUNT: '\n<할인 후 예상 결제 금액>',
	EVENT_BADGE: `\n<${MONTH}월 이벤트 배지>`,
});
export const DISCOUNT_LIST = {
	D_DAY_EVENT: '크리스마스 디데이 할인: ',
	WEEKDAY_EVENT: '평일 할인: ',
	WEEKEND_EVENT: '주말 할인: ',
	STAR_EVENT: '특별 할인: ',
	GIVEAWAY_EVENT: `증정 이벤트: `,
};
export const ERROR = {
	name: {
		DATE: '[DATE_ERROR]',
		ORDER: '[ORDER_ERROR]',
	},
	message: {
		NOT_VALID_NUMBER: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
		NOT_VALID_ORDER: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
	},
};

export const REG_EXP = /[가-힣]-\d/g;
