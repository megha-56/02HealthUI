import React from 'react'


const Main=()=>{
    return(
        <div className='bg-pink-50 h-screen w-screen flex'>
            <div >
                <div className='font-[Menlo] font-bold text-6xl pl-20 pt-50'><h1>Welcome to <br/> Believe Therapy</h1></div>
                <div className='font-[Menlo] font-bold text-3xl text-pink-900 pl-20 pt-5'><h3>Believe in Change,Invest in you</h3></div>
                <div className=' flex font-[Menlo] text-xl pl-20 pt-5'><h2> Hello, I'm Kate and I offer counselling and <br/> Psychotherapy in Hull and online.</h2></div>
                <div className='font-[Menlo]  pl-20 pt-5'><h4>Starting therapy can be really daunting,but at Believe Therapy,<br/>I will offer a safe and accepting space where you will be <br/> listened to and your feelings will be validatedand explored. </h4></div>
            </div >
            {/* <div className=' flex pl-10 '>
                <img   className='h-150 w-150 ' src='flower.png' alt='image'/>
                
        
            </div> */}
            <div className="relative w-fit pl-15 pt-10" >
               <img src="/flower.png" class="w-full" alt="image"/>

            <div className="absolute inset-0 "></div>

                 <h1 className="absolute pt-15 pl-5 inset-0 flex items-center justify-center 
                     text-black text-xl font-medium font-[italic]">
                     Here you can borrow my<br/> belief in you,ultil you can <br/>find yours again... 
                </h1>
            </div>

        </div>
    )
}
export default Main