const initialState = {
    user: null,
    chatHistory: [],
  };
  
  const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return { ...state, chatHistory: [...state.chatHistory, action.payload] };
      default:
        return state;
    }
  };
  
  export default chatReducer;
  