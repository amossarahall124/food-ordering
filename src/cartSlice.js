import { AccessTimeOutlined } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(
                    `increased ${state.cartItems[itemIndex].name} cart qunatity`, { position: "top-left" }
                )
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
                toast.success(
                    ` ${action.payload.name} added to cart`, { position: "top-left" }
                )
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },


        removeCart: (state, action) => {
            const nextItems = state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            state.cartItems = nextItems;
            toast.success(
                ` item removed to cart`, { position: "top-left" }
            )
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        lowerCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id)

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.info(
                    `decreased ${action.payload.name} cart qunatity`, { position: "top-left" }
                )
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextItems = state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                state.cartItems = nextItems;
                toast.success(
                    ` item removed to cart`, { position: "top-left" }
                )
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity + 20;

                cartTotal.total += itemTotal;
                cartTotal.Quantity += cartQuantity;
                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0,
                });
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        }

    }
})

export default cartSlice.reducer;
export const { addtoCart, removeCart, lowerCart, getTotal } = cartSlice.actions
