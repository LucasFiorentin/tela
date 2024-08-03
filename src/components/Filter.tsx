import { AlignVerticalSpaceAround, LayoutGrid, SlidersHorizontal } from "lucide-react";

export function Filter() {
    return (
    <div className="h-[100px] w-full bg-[#F9F1E7] flex  items-center">
    <SlidersHorizontal className="w-[25px] h-[25px] ml-[93px]"/>
    <p className="font-normal text-[20px] leading-7 ml-[35px]">Filter</p>
    <LayoutGrid className="w-[24px] h-[24px] ml-[67px]" />
    <AlignVerticalSpaceAround className="ml-[49px]"/>
    <p className="ml-[51px] border-l-[2px] border-[#9F9F9F] pl-7 font-normal text-[16px] leading-6 text-black">
        Showing 1–16 of 32 results
    </p>

    <div className="gap-3 ml-[260px] flex justify-center items-center">
    <p className="font-normal text-[20px] leading-7">Show</p>
    <div className=" bg-white "> 
        <input className="p-3 pt-1 text-[20px] pb-1 w-11 border-none outline-none text-[#9F9F9F]" type="text" placeholder="16"/>
    </div>
    
    </div>
    <div className="gap-3 ml-[40px] flex justify-center items-center mr-[93px]">
    <p className="font-normal text-[20px] leading-7">Short by</p>
    <div className=" bg-white "> 
    <input className="p-3 pt-1 text-[20px] pb-1 w-24 border-none outline-none text-[#9F9F9F]" type="text" placeholder="Default"/>
    </div>
    
    </div>
     </div>
    )
}
