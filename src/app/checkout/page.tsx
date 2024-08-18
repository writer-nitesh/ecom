'use client'
import CartItemCard from "@/components/cart/cartItemCard"
import CheckoutItemCard from "@/components/checkoutItemCard"
import useStore from "@/data/store"
import Link from "next/link"

export default function Checkout() {
  const { cart } = useStore()

  const total = parseFloat(cart.reduce((total, item) => {
    return total + parseFloat(item.price) * item.qty;
  }, 0).toFixed(2));

  const percent_disc = parseFloat((total * 10 / 100).toFixed(2))

  const fixed = 10


  return (
    <div className="flex flex-col lg:px-56 px-4 py-4 gap-4">

      <h1 className="font-bold text-xl">Checkout</h1>


      {/* Show Cart Items */}
      <div className="flex flex-col gap-2">
        {
          cart.length != 0 && cart.map((item) => {
            return <CheckoutItemCard product={item} />
          })
        }
      </div>


      {/* Show When Cart is Empty */}

      {
        cart.length == 0 && <span className='text-sm capitalize text-center py-4'>no items in cart</span>

      }
      <hr className=" border" />
      {/* Show Total when cart have items  */}
      {
        cart.length != 0 &&
        <div className="flex flex-col items-end  gap-2  w-full">
          <div className="w-1/2 flex flex-col ">
            <div className="flex w-full justify-between">
              <span>Subtotal</span>
              <span>{total}</span>
            </div>
            <div className="flex w-full justify-between ">
              <span>Discount</span>
              <span>$ {fixed} </span>
            </div>
            <div className="flex w-full justify-between">
              <span>10% off</span>
              <span>$ {percent_disc}</span>
            </div>
            <hr className=" border my-2" />
            <div className="flex w-full justify-between  line-through">
              <span>Discount</span>
              <span>$ {fixed} </span>
            </div>
            <div className="flex w-full justify-between line-through">
              <span>10% off</span>
              <span>$ {percent_disc}</span>
            </div>
            <div className="flex w-full justify-between font-bold">
              <span>Total</span>
              <span>$ {(total - percent_disc - fixed)}</span>
            </div>
          </div>

          <Link
            href='/checkout'
            className='bg-black w-1/2 text-white p-2 rounded-md text-center'
          >
            Order Now
          </Link>
        </div>

      }

    </div>
  )
}
