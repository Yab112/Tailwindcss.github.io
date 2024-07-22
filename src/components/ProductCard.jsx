import { star } from "../assets/icons"
import { useEffect } from "react";
import { products } from "../constants";
const ProductCard =(product) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={product.imgURL} alt={product.name} 
        className="w-[280px] h-[280px]"/>

        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat leading-normal text-xl text-slate-gray">(2.4)</p>
        </div>
        <h3 className="mt-2 text-2xl font-palanquin font-semibold">
          {product.name}
        </h3>
        <p className="font-montserrat text-2xl leading-norma mt-2 text-coral-red font-semibold">{product.price}</p>

    </div>
  )
}

export default ProductCard
