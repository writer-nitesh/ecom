'use client'
import useStore from '@/data/store';
import { useEffect, useRef, useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import CartItemCard from './cartItemCard';
import Link from 'next/link';

export default function Cart() {
    const [isCartOpen, setisCartOpen] = useState<boolean>(false)
    const cartRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const { cart } = useStore()

    const totalItems = cart.reduce((total, item) => { return total + item.qty }, 0)

    function handleCartToggle() {
        setisCartOpen(prevState => !prevState);
    }

    function handleClickOutside(event: MouseEvent) {
        if (
            cartRef.current && !cartRef.current.contains(event.target as Node) &&
            buttonRef.current && !buttonRef.current.contains(event.target as Node)
        ) {
            setisCartOpen(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.body.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='relative'>
            <button
                type="button"
                className="flex outline-none"
                onClick={handleCartToggle}
                ref={buttonRef}
            >
                <HiOutlineShoppingCart className="size-6" />
                <div
                    className="bg-red-500 size-4 rounded-full text-[8px] items-center justify-center flex p-2 text-white -top-2 relative select-none"
                >
                    <span>{totalItems}</span>
                </div>
            </button>


            {
                isCartOpen && (
                    <div
                        ref={cartRef}
                        className='shadow-md bg-white absolute max-h-96 overflow-y-auto z-10 right-0 lg:w-96 lg:mt-2 mt-4 rounded-md p-2 flex-col flex gap-2'
                    >
                        {/* Show Cart Items */}

                        {
                            cart.length != 0 && cart.map((item) => {
                                return <CartItemCard product={item} />
                            })
                        }

                        {/* Show When Cart is Empty */}

                        {
                            cart.length == 0 && <span className='text-sm capitalize text-center py-4 lg:w-96 w-48'>no items in cart</span>

                        }

                        {/* Show Checkout when cart have items  */}
                        {
                            cart.length != 0 &&
                            <Link
                                href='/checkout'
                                className='bg-black w-full text-white p-2 rounded-md text-center'
                            >
                                Checkout
                            </Link>

                        }

                    </div>
                )
            }


        </div>
    )
}
