import CategoryCard from '@/components/category/categoryCard';
export default function Home() {
  return (
    <div className='gap-4 flex flex-col p-4 '>

      <CategoryCard
        className='w-full h-72'
        imgSrc='https://images.pexels.com/photos/9649296/pexels-photo-9649296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        title='jewelery'
      />

      <div className='w-full flex gap-4'>
        <CategoryCard
          className='w-1/2 h-72'
          imgSrc='https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title="mens"
        />
        <CategoryCard
          className='w-1/2 h-72'
          imgSrc='https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title="womens"
        />
        <CategoryCard
          className='w-1/2 h-72'
          imgSrc='https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='electronics'
        />
      </div >
    </div >
  )
}
