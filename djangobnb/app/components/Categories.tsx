import Image from 'next/image';
const Categories = () => {
    return (
       
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-400">
            <Image src="/pool.jpg" alt="pools" width="25" height="25"/>
            <span className='text-xs'>Pools</span>
            </div>
            
            <div className="pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-400">
            <Image src="/country_side.jpg" alt="pools" width="25" height="25"/>
            <span className='text-xs'>Country Side</span>
            </div>

            <div className="pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-400">
            <Image src="/castles.jpg" alt="pools" width="25" height="25"/>
            <span className='text-xs'>Castles</span>
            </div>

            <div className="pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-400">
            <Image src="/tiny_homes.jpg" alt="pools" width="25" height="25"/>
            <span className='text-xs'>Tiny Homes</span>
            </div>

        </div>
    )
}

export default Categories;