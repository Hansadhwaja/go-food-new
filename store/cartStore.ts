import mongoose from 'mongoose';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
    id: mongoose.Schema.Types.ObjectId;
    name: string;
    quantity: number;
    price: number;
    size: string;
}

interface CartState {
    cart: CartItem[];
    addTocart: (item: CartItem) => void;
    removeFromCart: (id: mongoose.Schema.Types.ObjectId, size: string) => void;
    updateQuantity: (id: mongoose.Schema.Types.ObjectId,size: string, quantity: number) => void;
    clearCart: () => void;
    total: () => number;
}

export const useCartStore = create<CartState>()(
    persist((set, get) => ({
        cart: [],
        addTocart: (item) =>
            set(state => {
                const existintItem = state.cart.find(cartItem => cartItem.id == item.id && cartItem.size == item.size);
                if (existintItem) {
                    return {
                        cart: state.cart
                            .map(cartItem =>
                                cartItem.id == item.id ?
                                    { ...cartItem, quantity: cartItem.quantity + item.quantity }
                                    : cartItem
                            )
                    }
                }
                return { cart: [...state.cart, item] }
            }),
        removeFromCart: (id, size) =>
            set(state => ({
                cart: state.cart.filter(item => item.id != id || item.size != size)
            })),
        updateQuantity: (id,size, quantity) =>
            set(state => (
                {
                    cart: state.cart.map(item =>
                        item.id === id && item.size==size ? { ...item, quantity } : item
                    )
                }
            )
            ),
        clearCart: () => set({ cart: [] }),
        total: (): number =>
            get().cart.reduce((total: number, item: CartItem) => total + Number(item.price*item.quantity), 0)
    }),
        {
            name: 'cart-storage',
            partialize: (state) => ({ cart: state.cart }),
        }
    )
);