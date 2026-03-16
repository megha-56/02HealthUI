import React from 'react'


const Main=()=>{
    return(
        <div className='bg-pink-50  h-screen w-screen  flex'>
            <div className=' pl-5 md:pl-5 '>
                <div className='font-[Menlo] font-bold text-6xl md:text-6xl md:pl-20 md:pt-45 pl-20 pt-45 '><h1>Welcome to <br/> Believe Therapy</h1></div>
                <div className='font-[Menlo] font-bold text-3xl  md:text-3xl md:pl-20 md:pt-5  pl-20 pt-5'><h3>Believe in Change,Invest in you</h3></div>
                <div className=' flex font-[Menlo] text-xl  md:text-xl md:pl-20 md:pt-5 pl-20 pt-5'><h2> Hello, I'm Kate and I offer counselling and <br/> Psychotherapy in Hull and online.</h2></div>
                <div className='font-[Menlo] text-normal  md:text-normal  md:pl-20 pl-20 md:pt-5 pt-5'><h4>Starting therapy can be really daunting,but at Believe Therapy,<br/>I will offer a safe and accepting space where you will be <br/> listened to and your feelings will be validatedand explored. </h4></div>
            </div >
            
            <div className="relative w-fit h-auto md:pl-35 pl-35 md:pt-17  pt-17    " >
               <img src="/flower.png" className="w-full h-auto" alt="image"/>

            <div className="absolute inset-0 "></div>

                 <h1 className="absolute pt-20 pl-5 md:pt-20 md:pl-5 inset-0 flex items-center justify-center 
                     text-black text-xl font-medium font-[italic]">
                     Here you can borrow my<br/> belief in you,ultil you can <br/>find yours again... 
                </h1>
            </div>

        </div>
    )
}
export default Main 