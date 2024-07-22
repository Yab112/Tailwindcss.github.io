import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
   <section className="max-container">
    <h3 className="font-palanquin text-center text-4xl font-bold">what Our <span className="text-coral-red">Customer</span> Say?</h3>
    <p className="m-auto mt-4 max-w-lg  text-center info-text"> Hear genuine stories from our satisfied customers about their
    exceptional experiences with us.</p>
    <div className="flex flex-1 justify-evenly items-center mt-24 max-lg:flex-col gap-18">
      {
        reviews.map((review)=>(
          <ReviewCard imgURl={review.imgURL} CustomerName={review.customerName} rating={review.rating} Feedback
          ={review.feedback} key={review.customerName}/>
        ))
      }
    </div>
   </section>
  )
}

export default CustomerReviews
