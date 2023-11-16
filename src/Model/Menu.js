import Food from './Food.js';
import { MenuError } from '../ErrorCases.js';
import { AMOUNT, COURSE, DIVIDER_COMMA, DIVIDER_HYPHEN, ERROR, MAX_AMOUNT, MIN_AMOUNT, REG_EXP } from '../constants.js';
import menusData from '../menus.js';
class Menu {
	#orderedFoodArr;
	constructor(input) {
		this.#orderedFoodArr = this.#validateInput(input);
		this.getFoodArr = this.getFoodArr;
		this.getTotalAmount = this.getTotalAmount;
		this.getTotalPrice = this.getTotalPrice;
	}
	#validateInput(input) {
		if (input) {
			const inputArr = input.split(DIVIDER_COMMA);
			const foodArr = [];
			inputArr.forEach((item) => {
				this.#validateRegExp(item);
				const [name, amount] = this.#validateMenu(item);
				const food = new Food(name, amount);
				foodArr.push(food);
			});
			return foodArr;
		}
		this.#throwError();
	}
	#validateDuplicateMenu(foodArr) {
		const foodNameArr = foodArr.map((food) => food.getName());
		if (new Map(foodNameArr).size !== foodNameArr.length) {
			this.#throwError();
		}
		return foodArr;
	}
	#validateSingleDrink(foodArr) {
		if (foodArr.length === 1) {
			const foodName = foodArr[0].getName();
			if (menusData.get(foodName).course === COURSE.DRINKS) {
				this.#throwError();
			}
		}
		return foodArr;
	}

	#validateRegExp(string) {
		if (!string.match(REG_EXP)) {
			this.#throwError();
		}
	}
	#validateMenu(string) {
		const menu = string.split(DIVIDER_HYPHEN);
		this.#validateRange(Number(menu[1]));
		return [menu[0], Number(menu[1])];
	}
	#validateRange(number) {
		if (Number.isInteger(number)) {
			if (number >= MIN_AMOUNT && number <= MAX_AMOUNT) {
				return number;
			}
			this.#throwError();
		}
	}
	#calculateTotalAmount() {
		const foodArr = this.#orderedFoodArr;
		let total = 0;
		foodArr.forEach((food) => {
			const foodAmount = food.getAmount();
			total += foodAmount;
		});
		if (total < MIN_AMOUNT) {
			this.#throwError();
		}
		if (total > MAX_AMOUNT) {
			this.#throwError();
		}
		return total;
	}
	#calculateTotalPrice() {
		const foodArr = this.#orderedFoodArr;
		let total = 0;
		foodArr.forEach((food) => {
			total += food.getPrice() * food.getAmount();
		});
		return total;
	}
	getFoodArr() {
		return this.#orderedFoodArr;
	}
	getTotalPrice() {
		return this.#calculateTotalPrice();
	}
	getTotalAmount() {
		return this.#calculateTotalAmount();
	}
	#throwError() {
		throw new MenuError();
	}
}
export default Menu;
