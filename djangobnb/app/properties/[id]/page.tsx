import Image  from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
const PropertyDetailPage = ()=>{

    return(
        <main className="max-w-[1500px] mx-auto px-4 pb-4">
        <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
            <Image fill
            src='/pool2.jpg'
            className="object-cover w-full h-full"
            alt="pool"/>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl" >Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>
                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        <Image src="/pool1.jpg"
                        width={50}
                        height={50}
                        objectFit="cover"
                        style={{clipPath: 'circle()'}}
                        alt="ProfilePic"
                        />
                        <p><strong>John Doe</strong> is Your Host</p>

                    </div>
                    <hr />
                    <p className="mt-6 text-lg">
                        Description ...... ajdfdjkhfkjasdhfkjsdhfakjh
                    </p>
          </div>
          
            <ReservationSidebar/>
         
        </div>
        </main>
    )
}

export default PropertyDetailPage;