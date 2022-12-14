import React from 'react'
import { FaStarOfLife } from 'react-icons/fa';
function How() {
  return (
    <div name='how' className="bg-[#fff] dark:bg-[#070909] pt-5">
     <h1 className="text-5xl text-center  dark:text-[#fff] text-black font-bold tracking-wide mb-5 pt-5">How it works</h1>
     <div className="">
      <div className="lg:m-10 m-5 grid lg:grid-cols-2">
        <div>
        <ul className="text-black lg:m-10 m-5">
                <h3 className="lg:text-3xl text-2xl dark:text-[#fff] text-black mb-7 font-bold text-start">Social market place</h3>
                
                <div className="flex mt-3" data-aos="fade-right">
                <div className="px-3 py-3 h-12 rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                </div>
                    <li className="mx-4 dark:text-[#fff] text-black tracking-wide leading-8  lg:text-xl  text-sm">Download the Regiz Dapp from your App/Play Store or Visit regiz.io from your web browser.</li>
                </div>

                <div className="flex mt-3" data-aos="fade-right">
                <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                </div>
                    <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Launch the app and connect your wallet E.g., Meta mask, Trust wallet</li>
                </div>

                <div className="flex mt-4" data-aos="fade-right">
                <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl "/>
                </div>
                    <li className="mx-4 mb-3 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Complete your KYC/ Verification Process</li>
                </div>

                <div className="flex mt-4" data-aos="fade-right">
                <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                </div>
                    <li className="mx-4 mb-3 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Social Interactions.</li>
                </div>

                <div className="flex mt-4" data-aos="fade-right">
                <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                </div>
                    <li className="mx-4 mb-3 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Content Creator Tools.</li>
                </div>
        </ul> 
        </div>

        <div className="flex items-center justify-center">
            <div className="justify-center items-center lg:grid">
            <ul className="text-black lg:m-10 m-5">
                <h3 className="lg:text-3xl text-2xl dark:text-[#fff] text-black mb-7 font-bold text-start">Documentation Technology</h3>
                <div className="flex">
                <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                </div>
                 <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Download the Regiz Dapp from your App/Play,(or visit regiz.io)</li>
                </div>

                <div className="flex  mt-3" data-aos="fade-left">
                <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                </div>
                    <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Launch the app and connect your wallet E.g., Meta mask, Trust wallet.</li>
                </div>

                <div className="flex  mt-3" data-aos="fade-left">
                    <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                    </div>
                    <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Complete your KYC/ Verification Process.</li>
                </div>

                <div className="flex  mt-3" data-aos="fade-left">
                <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                </div>
                    <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Snap and upload your desired document in the selected format. E.g pdf</li>
                </div>

                <div className="flex  mt-3" data-aos="fade-left">
                <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                </div>
                    <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Mint on Document to get a unique document I.D (Grade B verification badge) Genuine Unverified</li>
                </div>

                <div className="flex  mt-3" data-aos="fade-left">
                <div className="px-3 py-3 h-12  rounded-lg bg-[#66CC7B]">
                    <FaStarOfLife className="lg:text-xl text-x"/>
                </div>
                    <li className="mx-4 dark:text-[#fff] text-black text-x tracking-wide leading-8  lg:text-xl text-sm">Proceed to Verify the document from issuing body and upgrade to (Grade A) Genuine Verified.</li>
                </div>
            </ul>
            </div>
        </div> 
      </div>
     </div>
       
    </div>
  )
}

export default How