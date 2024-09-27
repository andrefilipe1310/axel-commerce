
import { useCartStore } from "@/store"
import { formatPrice } from "@/lib/utils"
import { CardState } from "@/store"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
 //const useStore = useCartStore()
 

export default function CheckoutButton(props:{totalPrice:number,cartStore:CardState}){
    const router = useRouter()
    const {user} = useUser() 

    const handlerCheckout = async () => {
        if (!user) {
            props.cartStore.toogleCart()
            router.push("/sign-in")
            return
        }
        props.cartStore.setCheckout('checkout')
    }
    return(
       
        <div>
        <p className="text-teal-600 font-bold">Total: {formatPrice(props.totalPrice)}</p>
        <button onClick={()=>props.cartStore.setCheckout('checkout')} className="w-full rounded-md bg-teal-600 text-white py-2 mt-2">Finalizar Compra</button>
       </div> 
    )
}