import { ArrowRight, Heart, Search, ShoppingCart, User } from "lucide-react"
import logo from "../assets/logo.png"
import rectangle from "../assets/rectangle.jpg"

export function Header() {
  return (
    <div className="w-full bg-[#FFFFF]">

      <div className="h-[100px] flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <img className="w-[50px] h-[32px]" src={logo} alt="Logo" />
          <p className="text-3xl font-bold">Furniro</p>
        </div>

        <div className="flex items-center gap-10 text-base font-medium leading-6 font-Poppins">
          <p>home</p>
          <p>shop</p>
          <p>about</p>
          <p>contact</p>
        </div>

        <div className="flex items-center gap-10">
          <User />
          <Search />
          <Heart />
          <ShoppingCart />
        </div>

      </div>

      <div className="relative">
        <img className="w-full h-[316px] object-cover" src={rectangle} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
        <p className="text-4xl font-medium mb-2">Shop</p>
        <div className="flex gap-2 items-center">
        <p className="text-lg">Home</p>
            <ArrowRight size={20}/>
        <p className="text-lg">Shop</p>
        </div>
        </div>
      </div>

    </div>
  )
}
