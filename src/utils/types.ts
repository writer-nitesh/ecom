export interface Product {
    id: string
    title: string
    price: string
    category: string
    description: string
    image: string
}

{ }

export interface CartItem extends Product {
    qty: number;
}

export type AlertProps = {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
}

export interface State {
    user: boolean;
    cart: CartItem[];
    alert: AlertProps | null
}

export interface Actions {
    addItemToCart: (product: Product) => void;
    removeItemFromCart: (id: string) => void;
    deleteItemFromCart: (id: string) => void;
    setAlert: (data: AlertProps | null) => void;
    loginUser: () => void;
}
