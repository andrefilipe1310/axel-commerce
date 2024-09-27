import { SignUp } from "@clerk/nextjs"


type SignUpProps = {
    searchParams:{
        redirectUrl:string
    }  
}
export default function SignInPage({searchParams:{redirectUrl}}:SignUpProps){
    return (
        <section className="py-14">
            <div className="container mx-auto px-4">
                <div className="justify-center">
                    <SignUp signInUrl="/sign-in" forceRedirectUrl={redirectUrl}/>
                </div>
            </div>
        </section>
    )
}