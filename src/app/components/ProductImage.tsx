'use client'
import Image from "next/image"
import { ProductType } from "@/types/ProductType"
import { useState } from "react"

type PropsProductImage = {
    product:ProductType
    fill?:boolean
}
export default function ProductImage({product, fill}:PropsProductImage){
    const [loading, setLoading] = useState(true)
return fill? (
    <Image src={product.image} fill alt={product.name} className={`object-cover ${loading ? 'scale-110 blur3xl grayscale':'scale-100 blur-0 grayscale-0'}`}  onLoadingComplete={()=>setLoading(false)}/>
   
):(
    <Image src={product.image} width={400} height={700} alt={product.name} className={`object-cover ${loading ? 'scale-110 blur3xl grayscale':'scale-100 blur-0 grayscale-0'}`}  onLoadingComplete={()=>setLoading(false)}/>
)

}