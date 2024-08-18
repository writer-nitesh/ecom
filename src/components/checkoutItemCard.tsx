import useStore from "@/data/store";
import { CartItem } from "@/utils/types";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";


export default function CheckoutItemCard({ product }: { product: CartItem }) {
    const { removeItemFromCart, deleteItemFromCart, addItemToCart } = useStore()

    function handleRemoveCartItem() {
        removeItemFromCart(product.id)
    }
    function handleaddCartItem() {
        addItemToCart(product)
    }
    function handleDeleteCartItem() {
        deleteItemFromCart(product.id)
    }

    const { image, price, title, qty } = product
    return (


        <div className="flex  lg:flex-row flex-col items-center p-2  gap-4" >
            <div className="flex items-center justify-start gap-2 w-full">
                <div className="lg:size-32 w-24 h-24">
                    <img src={image} alt={title} className=' h-full w-full object-cover rounded-sm ' />
                </div>
                <div className="flex flex-col">
                    <span className="lg:w-96 w-40 lg:line-clamp-none line-clamp-1">{title}</span>
                </div>
            </div>
            <div className="flex lg:gap-8 gap-4 w-full  items-center justify-end ">
                <div className="flex items-center gap-4 w-20">
                    <button aria-label="add cart item" type="button" onClick={handleaddCartItem}>
                        <HiPlus className="size-5" />
                    </button>

                    <span>{qty}</span>
                    <button aria-label="remove cart item" type="button" onClick={handleRemoveCartItem}>
                        <HiMinus className="size-5" />
                    </button>
                </div>
                <div className="flex items-center justify-end w-20">
                    <span>$ {parseFloat(price) * qty}</span>
                </div>
                <div className="flex items-center justify-center">
                    <button aria-label="Delete cart item" type="button" onClick={handleDeleteCartItem}>
                        <MdDelete className="size-6" />
                    </button>
                </div>
            </div>

        </div>
    )
}
