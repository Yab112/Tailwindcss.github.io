const Subscribe = () => {
  return (
   <section id="contact-us" className="flex justify-between max-lg:flex-col items-center gap-10 max-container">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-center">
        Sign Up For <span className="text-coral-red">Updates </span>& News Latter
      </h3>

      <div className="flex gap-3">
           <input type="text" name="" id="" placeholder="subscribe@gmail.com" className="bg-transparent border-b border-slate-gray outline-none pb-2 w-[300px]"/>
           <div>
               <button className="bg-coral-red text-white px-10 py-2 rounded-full font-palanquin font-bold">Subscribe</button>
           </div>
      </div>
    </section>
  )
}

export default Subscribe
