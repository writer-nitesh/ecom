import { Product } from "@/utils/types";
import Link from "next/link";
import AddToCart from "../cart/addToCart";


export default function Card({ product }: { product: Product }) {

    const { image, price, title, id } = product

    return (
        <Link href={`/products/${id}`} className="group relative shadow-md rounded-md p-2">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    alt={title}
                    src={image}
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 gap-2 flex justify-between">
                <div className="flex w-full ">
                    <h3 className="text-sm line-clamp-2 text-gray-700">
                        {title}
                    </h3>
                </div>
                <div className="flex gap-4  w-fit   items-center justify-end">
                    <span className="text-sm font-medium  flex items-center justify-center w-20 text-gray-900">
                        <span>$ {price}</span>
                    </span>
                    <AddToCart product={product} />
                </div>
            </div>

        </Link >
    )
}
