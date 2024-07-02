'use client';
import apiService from "@/app/services/apiService";
import { useEffect,useState } from "react";
import PropertyListItem from "./PropertyListItem";

export type propertyType = {
    id:string;
    title:string;
    price_per_night:number;
    image_url:string;
}

const PropertyList = () => {
    const [properties,setProperties] = useState<propertyType[]>([]);
    
    const get_properties = async () => {

     const tmpProperties = await apiService.get('/api/properties/');
     setProperties(tmpProperties.data);
        
    };

    useEffect(()=> {
        get_properties();
    },[]);

    return (
<>      
         {properties.map((property)=>{
                 return (
                    <PropertyListItem
                    key={property.id}
                    property={property}/>
                 )
         })
        
         }
        
</>
    )
}


export default PropertyList;