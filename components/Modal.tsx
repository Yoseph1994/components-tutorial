import Image from "next/image";

function Modal() {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-16 max-md:p-5 flex flex-row justify-between max-md:flex-col max-md:items-center max-md:text-center">
      <div className="size-1/2 max-md:w-full">
        <Image
          src="/assets/product-modal/images/headphone.png"
          alt="Headphone"
          width={250}
          height={250}
          className="object-contain max-md:mx-auto max-md:mb-5"
        />
      </div>

      <div className="">
        <span className="bg-black text-white mb-2 py-1 px-3 rounded-full">
          Free shipping
        </span>
        <h2 className="text-2xl mt-4 font-bold">
          Razer Kraken Kitty Edt Gaming Headset Quartz
        </h2>
        <p className="line-through mt-2">$799</p>
        <h1 className="font-bold text-4xl mt-6 ">$599</h1>
        <p className="opacity-40 text-sm mt-4">
          This offer is valid until April 3rd or as long as stock lasts!
        </p>
        <button className="bg-blue-500 shadow-md shadow-blue-900 text-white w-full px-10 py-5 rounded-lg mt-4">
          Add to cart
        </button>
        <div className="flex items-center mt-5 space-x-4">
          <span className="w-4 h-4 rounded-full bg-green-300 inline-block"></span>
          <span className="text-sm">50+ pcs. in stock</span>
        </div>
        <div className="flex flex-row max-md:flex-col space-x-4 max-md:space-x-0 max-md:space-y-4 mt-5">
          <button className="py-4 px-8  border-[3px] border-zinc-300 rounded-xl  space-x-4 flex justify-center items-center">
            <Image
              src="/assets/product-modal/images/weight.png"
              alt="Facebook"
              width={30}
              height={30}
            />
            <span className="text-lg">Add to cart</span>
          </button>
          <button className="py-4 px-8  border-[3px] border-zinc-300 rounded-xl  space-x-4 flex justify-center items-center">
            <Image
              src="/assets/product-modal/images/heart.png"
              alt="Facebook"
              width={30}
              height={30}
            />
            <span className="text-lg">Add to wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
