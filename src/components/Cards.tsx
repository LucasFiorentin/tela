import img from '../assets/Images.png'
import img3 from '../assets/Images (1).png'
import img4 from '../assets/Images (2).png'
import img2 from '../assets/Images (3).png'
import { ArrowLeftRight, Heart, Share2 } from 'lucide-react'

export function Cards() {
  return (
    <div className="flex gap-x-12 jus">
      <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
        <div>
          <p className=" flex items-center justify-center relative top-9 left-56 -mt-7 text-[#ffffff] bg-[#E97171] rounded-full w-7 h-7 text-[12px] ">
            -30%
          </p>

          <img className="h-[301px] w-[285px]" src={img} alt="" />
        </div>

        <div className="  flex flex-col gap-y-1">
          <div className="flex flex-col ml-4 mt-4 gap-y-1">
            <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
              Syltherine
            </h1>
            <p
              className="
          flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
            >
              Stylish cafe chair
            </p>
          </div>
          <div className="flex ml-4">
            <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
              Rp 2.500.000
            </p>
            <p className="w-[102px] h-[24px] text-[#B0B0B0] font-Poppins-Medium line-through text-[#B0B0B0]">
              Rp 3.500.000
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
        <div>
          <div className="flex font-bold relative top-52 left-16 -mt-10 z-10 bg-white w-44 text-[#B88E2F] p-2 justify-center text-center">
            Add to cart
          </div>
          <div className=" flex items-center justify-center text-center relative top-64 text-white -mt-7 z-10 gap-x-6 pr-1 pl-1">
            <p className="flex gap-x-[2px] font-Poppins font-bold text-base">
              <Share2 className="w-4 h-4 mt-1" /> Share
            </p>
            <p className="flex gap-x-[2px] font-Poppins font-bold text-base">
              <ArrowLeftRight className="w-4 h-4 mt-1" /> Compare
            </p>
            <p className="flex gap-x-[2px] font-Poppins font-bold text-base">
              {' '}
              <Heart className="w-4 h-4 mt-1" /> Like
            </p>
          </div>

          <img
            className="h-[301px] w-[285px] brightness-50 "
            src={img2}
            alt=""
          />
        </div>
        <div className="brightness-50 bg-[#F4F5F7] h-[150px]">
          <div className="  flex flex-col gap-y-1">
            <div className="flex flex-col ml-4 mt-4 gap-y-1">
              <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl opacity-70 ">
                Leviosa
              </h1>
              <p
                className="
          flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
              >
                Stylish cafe chair
              </p>
            </div>
            <div className="flex ml-4">
              <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold opacity-70">
                Rp 2.500.000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
        <div>
          <p className=" flex items-center justify-center relative top-9 left-56 -mt-7 text-[#ffffff] bg-[#E97171] rounded-full w-7 h-7 text-[12px] ">
            -50%
          </p>

          <img className="h-[301px] w-[285px]" src={img3} alt="" />
        </div>

        <div className="  flex flex-col gap-y-1">
          <div className="flex flex-col ml-4 mt-4 gap-y-1">
            <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
              Lolito
            </h1>
            <p
              className="
          flex-1 w-[138px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
            >
              Luxury big sofa
            </p>
          </div>
          <div className="flex ml-4">
            <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
              Rp 7.000.000
            </p>
            <p className="w-[105px] h-[24px] text-[#B0B0B0] font-Poppins-Medium line-through text-[#B0B0B0]">
              Rp 14.000.000
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F7] h-[446px] w-[285px]">
        <div>
          <p className="flex relative top-9 left-56 -mt-7 text-[#ffffff] bg-[#2EC1AC] rounded-full w-7 h-7 text-[10px] items-center justify-center ">
            New
          </p>

          <img className="h-[301px] w-[285px]" src={img4} alt="" />
        </div>

        <div className="  flex flex-col gap-y-1">
          <div className="flex flex-col ml-4 mt-4 gap-y-1">
            <h1 className=" text-[#3A3A3A] font-Poppins-ExtraBold font-bold text-2xl">
              Respira
            </h1>
            <p
              className="
          flex-1 w-[200px] h-[24px] text-[#898989] font-Poppins-Medium text-[15px]"
            >
              Outdoor bar table and stool
            </p>
          </div>
          <div className="flex ml-4">
            <p className="w-[130px] h-[29px] text-[#3A3A3A] font-Poppins-Medium font-bold">
              Rp 500.000
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
