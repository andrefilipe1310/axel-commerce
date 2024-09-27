import {create} from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductType } from './types/ProductType'



export type CardState = {
cart:ProductType[]
addProduct:(product:ProductType)=>void
removeProduct:(product:ProductType)=>void
isOpen:boolean
toogleCart:()=>void 
onCheckout:string
setCheckout:(checkout:string)=>void
paymentIntent:string
}

export const useCartStore = create<CardState>()(
    persist((set)=>({
        cart:[],
        addProduct:(item)=>{
            set((state) => {
                const product = state.cart.find((p)=> p.id === item.id)
                if (product) {
                    const updatedCart = state.cart.map((p) =>{
                        if (p.id === item.id) {
                            return{...p,quantity:p.quantity ? p.quantity + 1 : 1}
                        }
                        return p
                    })
                    return {cart:updatedCart}
                }else {
                    return {cart:[...state.cart,{...item,quantity:1}]}
                }
            })
        },
        removeProduct:(item)=>{
            set((state) => {
                const existingProduct = state.cart.find((p)=> p.id === item.id)
               if(existingProduct && existingProduct.quantity! > 0){
                    const updatedCart = state.cart.map((p)=>{
                        if(p.id == item.id){
                            return {...p, quantity:p.quantity! - 1}
                        }
                        return p
                    })
                    return {cart:updatedCart}
               }else{
                const filteredCard = state.cart.filter((p)=>{
                    p.id == item.id
                })
                return {cart:filteredCard}
               }
            })
        },
        onCheckout:"cart",
        setCheckout: (checkout)=> set(()=>({onCheckout:checkout})),
        isOpen:false,
        paymentIntent:'',
        toogleCart: ()=> set((state) => ({isOpen: !state.isOpen}))
    }),{name:'cart-storage'})
)