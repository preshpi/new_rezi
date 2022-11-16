import React from 'react'

function About() {
  return (
    <div name='about' className="pt-5 dark:bg-[#0C1017]">
    <h1 className="lg:text-5xl text-3xl dark:text-white text-black text-center mt-3 font-bold tracking-wide mb-5 pt-5">About Regiz</h1>
    
    <div className="dark:text-gray-300 about-text text-black" data-aos="slide-up">
      
      <div className="box place-items-center text-center lg:text-start justify-center lg:w-[800px] m-10">
      <input type="checkbox" id="check"/>

      <p className="text-xl leading-10 tracking-wider" data-aos="slide-up">
       Regiz is a Generation Alpha Digital Documentation Technology (DOCUTECH) 
       project that focuses on the authentication, verification, and digitization 
       of documents so that they can be electronically stored more compactly and securely. 
       It may be educational certificates or professional certifications, computerized receipts,
        work identification cards, or any suitable documents.
      </p>

      <div className="content">
        <p className="text-xl mt-3 leading-10 tracking-wider">
        The Document would be snapped and uploaded on the Regiz platform in selected 
        formats e.g pdf. Every document that is uploaded will be minted upon and given a 
        unique identification code. which will automatically make it a certified digital copy, 
        thereby eradicating fake or in-genuine digital copies of a document.         
        </p>

        <p className="text-xl mt-3 leading-10 tracking-wider">
        All documents that are issued by a government-registered institution/organization will pass through a verification/confirmation process.
        </p>

        <p className="text-xl mt-3 leading-10 tracking-wider">
        These documents can also be looked up by a third party, (using the Regiz app) with authorization from the owner to confirm their authenticity globally.
        </p>

        <p className="text-xl mt-3 leading-10 tracking-wider">
        Regiz will be a decentralized application, (where users will be in charge of their Data Like they are in Charge of their Money)
         built on blockchain technology. 
        </p>

        <p className="text-xl mt-3 leading-8 tracking-wide">
        These documents will then become digital assets with monetary value.
        </p>
       
      </div>

      <label for="check" className="px-3 py-3 rounded-full text-white  hover:text-black bg-[#66CC7B] hover:[#] hover:animate-bounce dark:text-black">READ MORE</label>
      </div> 

    </div> 

  </div>
  )
}

export default About