import useStore from "@/data/store";
import { CartItem, Product } from "@/utils/types";
import { HiMinus } from "react-icons/hi2";


export default function CartItemCard({ product }: { product: CartItem }) {
    const { removeItemFromCart } = useStore()

    function handleRemoveCartItem() {
        removeItemFromCart(product.id)
    }

    const { image, price, title, qty } = product
    return (
        <div className="flex h-12 gap-1" >
            <div className=" w-20">
                <img src={image} alt={title} className=' h-full w-full object-cover rounded-sm ' />
            </div>
            <div className="flex items-center justify-between gap-2 w-full">
                <div className="flex flex-col">
                    <span className="line-clamp-1 w-52"  >{title}</span>
                    <span>$ {parseFloat(price) * qty}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>x{qty}</span>
                    <button aria-label="remove cart item" type="button" onClick={handleRemoveCartItem}>
                        <HiMinus className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
