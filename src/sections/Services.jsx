import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
   <section className="flex justify-center max-conainer gap-9 flex-wrap ">
    {services.map((service)=>{
      return <ServiceCard key={service.id} {...service}/>
    })}
   </section>
  )
}
export default Services
