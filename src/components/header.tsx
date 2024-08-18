import Link from "next/link";
import Cart from "./cart/cart";

export default function Header() {
    return (
        <div className='flex items-center justify-between px-4 py-5'>
            <Link href="/" className="font-bold">ECOM</Link>
            <div className='flex gap-5'>
                <nav className='flex items-center justify-center'>
                    <ul className='flex gap-4'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                    </ul>
                </nav>

                <Cart />
            </div>
        </div>
    )
}
