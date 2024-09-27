import { SignIn } from "@clerk/nextjs"


type SignInProps = {
    searchParams:{
        redirectUrl:string
    }  
}
export default function SignInPage({searchParams:{redirectUrl}}:SignInProps){
    return (
        <section className="py-14">
            <div className="container mx-auto px-4">
                <div className="justify-center">
                    <SignIn signUpUrl="/sign-up" forceRedirectUrl={redirectUrl}/>
                </div>
            </div>
        </section>
    )
}