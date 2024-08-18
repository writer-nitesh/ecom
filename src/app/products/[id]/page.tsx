import AddToCart from '@/components/cart/addToCart';
import Loader from '@/components/loader';
import { Product } from '@/utils/types';
import { Suspense } from 'react';


export default async function ProductPage({ params }: { params: { id: string } }) {
    let data: Product | null = null;
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        data = await response.json()
    } catch (error) {
        data = null
    }

    if (data) {
        return (
            <Suspense fallback={<Loader />}>
                <div className='p-4 flex flex-col gap-2'>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            alt={data.title}
                            src={data.image}
                            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="flex w-full">
                        <h3 className="text-lg font-bold  text-black">
                            {data.title}
                        </h3>
                    </div>
                    <div className="mt-4 gap-2 flex justify-between">
                        <AddToCart product={data} />
                        <div className="flex gap-4  w-fit   items-center justify-end">
                            <span className="text-sm font-medium  flex items-center justify-center w-20 text-gray-900">
                                <span>$ {data.price}</span>
                            </span>
                        </div>

                    </div>
                    <div className='mt-4 text-sm text-gray-400'>
                        {data.description}
                    </div>
                </div>
            </Suspense>
        );
    }
    else {
        return <div className=' w-full text-center py-4 capitalize'>
            Something went wrong
        </div>
    }
}
