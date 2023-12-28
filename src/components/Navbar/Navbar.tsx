"use client"
import { useRouter } from "next/navigation"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center w-3/4 mx-40 gap-10 my-5 ">
      <div onClick={() => {router.push("/")}}> <Logo /> </div>

      <div className="flex flex-1"> <Search  /> </div>
    </div>
  )
}

export default Navbar