import React from 'react'

export default function CategoryCardItems({ imgSrc, title }: { imgSrc: string, title: string }) {
    return (
        <div className='w-full h-full relative flex items-center justify-center'>
            <img
                src={imgSrc}
                alt={title}
                className='object-cover object-center h-full w-full  rounded-md'
            />
            <span
                className=' w-full p-4 h-20 text-xl items-center absolute glass flex  text-white px-2 py-1 rounded
                capitalize justify-center' >
                <span>{title}</span>
            </span>
        </div>

    )
}
