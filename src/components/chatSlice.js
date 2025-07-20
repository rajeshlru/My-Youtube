import { LIVE_CHAT_COUNT } from "./utils/constants";

const { createSlice } = require("@reduxjs/toolkit");

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // state.messages.splice(LIVE_CHAT_COUNT, 1);
      // state.messages.push(action.payload);

      state.messages.push(action.payload);

      // ✅ Trim old messages if limit exceeds 25
      if (state.messages.length > LIVE_CHAT_COUNT) {
        state.messages.splice(0, state.messages.length - 25);
      }
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
