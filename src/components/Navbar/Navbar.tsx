import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
  return (
    <div className="flex items-center  mx-40 gap-10 my-5">
      <div className=""> <Logo /> </div>

      <div className="flex flex-1"> <Search  /> </div>
    </div>
  )
}

export default Navbar