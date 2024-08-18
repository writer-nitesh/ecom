'use client'
import useStore from "@/data/store";
import { MouseEvent } from "react";
import { BiCartAdd } from "react-icons/bi";
import { Product } from "@/utils/types";


export default function AddToCart({ product }: { product: Product }) {

    const { addItemToCart, setAlert } = useStore()

    function handleAddToCart(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        addItemToCart(product)
        setAlert({ message: `Added ${product.title} to Cart`, type: "success" })
    }

    return (
        <button
            type="button"
            className="text-center outline-none rounded-md text-xs flex items-center justify-center gap-2  "
            aria-label="add to cart"
            onClick={handleAddToCart}
        >
            <BiCartAdd className="size-5" />
        </button>
    )
}
