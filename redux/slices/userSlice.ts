import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shopItems, rewardItems } from "../../config/constants";
import { Reward } from "../../config/interfaces";

export interface ItemSlice {
  shopItems: Reward[];
  rewardItems: Reward[];
}

const initialState: ItemSlice = {
  shopItems,
  rewardItems,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onChangeShopItems: (state: ItemSlice, action: PayloadAction<Reward[]>) => {
      state.shopItems = action.payload;
    },
    onChangeRewardItems: (state: ItemSlice, action: PayloadAction<Reward[]>) => {
      state.rewardItems = action.payload;
    },
  },
});

export const { onChangeRewardItems, onChangeShopItems } = userSlice.actions;

export default userSlice.reducer;
