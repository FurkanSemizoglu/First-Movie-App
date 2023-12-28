"use client"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";


const page = () => {
/*   const router = useRouter();
  const searchParams = useSearchParams();
  const id  =  searchParams.get("id") */
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id , " iddd  ")
  return (

    <div>{id}</div>
  )
}

export default page