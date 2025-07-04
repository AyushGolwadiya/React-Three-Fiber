import { navLists } from "../constants"
import { appleImg, bagImg, searchImg } from "../utils"

const Navbar = () => {
  return (
    <header className="w-full flex">
      <nav className="w-full flex items-center justify-between">
        <img src={appleImg} alt="Apple" className="w-[14px] h-[44px]"/>
        <div className="flex gap-7 max-md:hidden">
          {navLists.map((item,index)=> (
            <div key={index} className="text-sm text-gray hover:text-white transition-all">{item}</div>
          ))}
        </div>

        <div className="flex items-center gap-7">
          <img src={searchImg} alt="search" className="w-[18px] h-[44px]" />
          <img src={bagImg} alt="Cart" className="w-[18px] h-[44px]" />
        </div>
      </nav>
    </header>
  )
}
export default Navbar