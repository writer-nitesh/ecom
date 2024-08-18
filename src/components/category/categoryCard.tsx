import React, { HTMLAttributes } from 'react';
import CategoryCardItems from './categoryCardItems';
import Link from 'next/link';

interface CategoriesProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    imgSrc: string;
    title: string;
}

export default function CategoryCard({ className, imgSrc, title }: CategoriesProps) {
    return (
        <Link href={"/categories/" + title} className={className} >
            <CategoryCardItems
                imgSrc={imgSrc}
                title={title}
            />
        </ Link>
    );
}
