// Define the Product interface
export interface Product {
    id: string;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

'use client'

import CategoryCard from '@/components/category/categoryCard';
import Loader from '@/components/loader';
import Card from '@/components/product/productCard';
import useDatabase from '@/utils/useDatabase';

export default function Mens() {

    // Fetch data from the database
    const { data, error, loading } = useDatabase("/products/category/men's clothing?limit=10");

    if (loading) return <Loader />;

    // Handle error state
    if (error) return <p className='text-center py-4 capitalize'>Error loading data.</p>;

    return (
        <div className='p-4 flex flex-col gap-4'>
            <CategoryCard
                className='w-full h-60'
                imgSrc='https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                title="womens"
            />

            <div className='grid lg:grid-cols-4 md:grid-cols- grid-cols-1 gap-4'>
                {data && data.length > 0 ? (
                    // Render each product in the data array
                    data.map((product: Product) => (
                        <Card key={product.id} product={product} />
                    ))
                ) : (
                    <p className=' text-center col-span-4   py-4 capitalize'>No products found</p>
                )}
            </div>
        </div>
    );
}
