export const ConversationActions = {
	SET_CONVERSATIONS: 'SET_CONVERSATIONS',
	SET_SELECTED: 'SET_SELECTED',
	LOADING: 'LOADING',
}

export const _setConversationActive = (conversation) => ({
	type: ConversationActions.SET_SELECTED,
	payload: conversation
});

export const _onActiveConversationFetched = (conversations, count) => ({
	type: ConversationActions.SET_CONVERSATIONS,
	payload: {
		conversations: conversations,
		count: count
	}
})