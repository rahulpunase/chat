export const GeneralAction = {
	CHANGE_QUERY: 'CHANGE_QUERY',
	EVENT: 'EVENT',

	_onSearchQueryChange: (query) => ({
		type: this.CHANGE_QUERY,
		payload: query
	}),

	_onDispatchEvent: (name, event) => ({
		type: this.EVENT,
		payload: {
			event: event,
			name: name
		}
	}),
}