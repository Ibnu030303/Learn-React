import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: (() => {
            const storedCart = localStorage.getItem("cart");
            try {
                return storedCart ? JSON.parse(storedCart) : []; // Safely parse or default to empty array
            } catch (error) {
                console.error("Error parsing cart data:", error); // Log any parsing error
                return []; // Return empty array if parsing fails
            }
        })()
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find(item => item.id === action.payload.id);

            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload); // Add new item if it doesn't exist
            }
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
