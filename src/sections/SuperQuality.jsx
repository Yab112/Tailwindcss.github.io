import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
     <section id="about-us" className="flex  justify-around items-center max-lg:flex-col  w-full gap-9 max-container ml-9">

    <div className="flex flex-col flex-1 ml-[100px]">
      

            <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
              We Provide you 
               <span className="xl:bg-white xl:whitespace-nowrap  text-coral-red">  Super</span>
              <br />
              <span className="text-coral-red inline-block mt-3">Quality </span>  Shoes
            </h2>

            <p className="mt-4 ml-4 lg:max-w-lg info-text">
              Discover Stylish Nike Arrival, Quality comfort, and innovation for your active life.
            </p>

            <p className="mt-6 lg:max-w-lg ml-4 "> Our dedication to detail and excellence ensures your satisfaction</p>
            <div className="mt-6">
              <Button label="view details" />
            </div>
            
    </div>

    <div className="flex-1 flex justify-center align-center mt-10">
     <img src={shoe8} alt="shoesimage" width={570} height={522} className="objext-contain"/>
    </div>
     </section>
  )
}

export default SuperQuality
