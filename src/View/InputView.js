import { MissionUtils } from '@woowacourse/mission-utils';


const InputView = class {
	constructor() {
		this.readData = this.readData;
	}
	async readData(message) {
		return await MissionUtils.Console.readLineAsync(message);
	}
};

export default InputView;
