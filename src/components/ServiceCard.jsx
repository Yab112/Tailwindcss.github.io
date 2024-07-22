const ServiceCard = ({imgURL,label,subtext}) => {
  return (
     <div className="flex-1 sm:max-w-[300px] max-w-[250px] flex flex-col gap-4 items-center justify-center bg-white rounded-2xl shadow-3xl px-10 py-16">
            <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex"> 
                <img src={imgURL}alt="shoeimages width-[24] height-[24]" />
            </div>
            <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
            <p className="ml-4 mt-3 break-words font-montserrat text-lg leaeding-normal text-slate-gray">{subtext}</p>
     </div>
      
  )
}

export default ServiceCard
