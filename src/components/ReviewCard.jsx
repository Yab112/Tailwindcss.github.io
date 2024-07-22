import { star } from "../assets/icons"

const ReviewCard = ({imgURl,CustomerName,rating,Feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col ">
       <img src={imgURl} alt="customer image" className="w-20 h-20 rounded-full object-cover"/>
       <p className="max-w-sm text-center mt-6 info-text">{Feedback}</p>
       <div className="mt-3 flex items-center justify-center gap-2.5">
        <img src={star} alt="star image" className="w-5 h-5 object-contain m-0"/>
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
       </div>
       <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{CustomerName}</h3>
    </div>
  )
}

export default ReviewCard
