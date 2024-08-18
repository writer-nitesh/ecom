import { Actions, State } from '@/utils/types';
import { create } from 'zustand';


// Create the Zustand store
const useStore = create<State & Actions>((set) => ({
    user: false,
    cart: [],
    alert: null,
    
    addItemToCart: (product) => set((state) => {
        // Check if the product is already in the cart
        const existingProductIndex = state.cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            // If it exists, increment the quantity
            const updatedCart = [...state.cart];
            updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                qty: updatedCart[existingProductIndex].qty + 1
            };
            return { cart: updatedCart };
        } else {

            return {
                cart: [...state.cart, { ...product, qty: 1 }]
            };
        }
    }),



    deleteItemFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
    })),

    removeItemFromCart: (id) => set((state) => {
        const existingProductIndex = state.cart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...state.cart];
            const item = updatedCart[existingProductIndex];

            if (item.qty > 1) {
                // If quantity is greater than 1, decrement the quantity
                updatedCart[existingProductIndex] = {
                    ...item,
                    qty: item.qty - 1
                };
                return { cart: updatedCart };
            } else {
                // If quantity is 1, remove the item from the cart
                return { cart: updatedCart.filter((_, index) => index !== existingProductIndex) };
            }
        }

        // If the item does not exist, return the cart unchanged
        return { cart: state.cart };
    }),

    loginUser: () => set({ user: true }),
    setAlert: (data) => set({ alert: data })
}));

export default useStore;
