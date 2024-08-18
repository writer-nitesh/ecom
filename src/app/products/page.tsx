import CategoryCard from '@/components/category/categoryCard';
import Loader from '@/components/loader';
import Card from '@/components/product/productCard';
import { Product } from '@/utils/types';
import { Suspense } from 'react';

export default async function Electronics() {
    let data: Product[] = [];

    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        data = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return (
        <Suspense fallback={<Loader />}>
            <div className='p-4 flex flex-col gap-4'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                    {data && data.length > 0 ? (
                        data.map((product: Product) => (
                            <Card key={product.id} product={product} />
                        ))
                    ) : (
                        <p className='text-center col-span-4 py-4 capitalize'>No products found</p>
                    )}
                </div>
            </div>
        </Suspense>
    );
}
