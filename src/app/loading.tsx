import SkeletonCard from "./components/SkeletonCard"

export default function Product(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        <SkeletonCard isLoading={true}/>
        <SkeletonCard isLoading={true}/>
        <SkeletonCard isLoading={true}/>
        <SkeletonCard isLoading={true}/>
        <SkeletonCard isLoading={true}/>
        <SkeletonCard isLoading={true}/>
        </div>
    )
}