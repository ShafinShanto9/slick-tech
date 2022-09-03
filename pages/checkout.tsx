import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import Header from '../components/Header'
import { selectCartItems, selectCartTotal } from '../redux/cartSlice'
import Currency from "react-currency-formatter";
import CheckoutProduct from '../components/CheckoutProduct'
import { ChevronDownIcon } from '@heroicons/react/outline'

const Checkout = () => {
    const items = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal);
    const router = useRouter()

    const [groupedItemsInCart, setGroupedItemsInCart] = useState(
    {} as { [key: string]: Product[] }
    );

    useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setGroupedItemsInCart(groupedItems);
    }, [items]);
    
  return (
    <div>
        <Head>
            <title>Checkout-</title>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
          <Header />
          <main>
            <div>
                <h1 className='my-4 text-3xl font-semibold lg:text-4xl'>
                    {items.length > 0 ? "Review Your Cart" : "Your Cart is Empty"}      
                </h1> 
                <p className='my-4'>free delivaries in our specified zone</p>
                  
                {items.length === 0 && 
                ( < Button
                    title='Continue Shopping'
                    onClick={()=> router.push('/')} 
                  />
                  ) 
                }
              </div>
              {items.length > 0 && (
          <div className="mx-5 md:mx-8">
            {Object.entries(groupedItemsInCart).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))}

            <div className="my-12 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>
                      <Currency quantity={cartTotal} currency="USD" />
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>FREE</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-x-1 lg:flex-row">
                      Estimated tax for:{" "}
                      <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Enter zip code
                        <ChevronDownIcon className="h-6 w-6" />
                      </p>
                    </div>
                    <p>$ -</p>
                  </div>
                </div>

                <div className="flex justify-between pt-4 text-xl font-semibold">
                  <h4>Total</h4>
                  <h4>
                    <Currency quantity={cartTotal} currency="USD" />
                  </h4>
                </div>
              </div>

              <div className="my-14 space-y-4">
                <h4 className="text-xl font-semibold">
                  How would you like to check out?
                </h4>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="order-2 flex flex-1 flex-col items-center rounded-xl bg-gray-200 p-8 py-12 text-center">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      <span>Cash on Delivary</span>
                    </h4>
                    <Button title="Order" />
                    <p className="mt-2 max-w-[240px] text-[13px]">
                      If choose this service you may pay some extra charge
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      Pay in full
                      <span>
                        <Currency quantity={cartTotal} currency="USD" />
                      </span>
                    </h4>

                    <Button
                      noIcon
                    //   loading={loading}
                      title="Check Out"
                      width="w-full"
                    //   onClick={createCheckoutSession}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
          </main>  
    </div>
  )
}

export default Checkout