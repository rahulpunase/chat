const utilMethods = {
	/**
	 * @param string {string}
	 * @param toLength {number}
	 */
	getSmallerString: (string, toLength) => {
		const stringLength = string.length;
		if (stringLength > toLength) {
			return string.substring(0, toLength - 3) + '...';
		} else {
			return string;
		}
	}
}

export default utilMethods;