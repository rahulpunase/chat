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
	},
	nullCheck: (object, arrayOfKeysToIgnore) => {
		const keys = Object.keys(object);
		const nullKeys = [];
		keys.forEach((key, index) => {
			if (arrayOfKeysToIgnore) {
				!arrayOfKeysToIgnore.includes(key) && (object[key] || nullKeys.push(key))
			} else {
				object[key] || nullKeys.push(key);
			}
		});
		return nullKeys;
	}
}

export default utilMethods;