import React from 'react'


const Nav=()=>{
    return(
        <div className='flex h-25 w-screen bg-pink-900 justify-around mx-auto'>
            <div className='flex justify-evenly gap-5 font-[Poppins] pl-7'>
                <button  className='text-white active:underline'>Home</button>
                <button className='text-white '>About Me</button>
                <button className='text-white '>About Therapy</button>
                <button className='text-white '>Sessions</button>
                <button className='text-white '>Contact Us</button>
            </div>

            <div className='flex my-auto'>
                
                <div><button className='flex bg-pink-50 font-[Poppins] h-22 w-55 border rounded-2xl  '>
                    
                        <div className='pt-5 w-[40%] h-2'><img src='https://e7.pngegg.com/pngimages/866/828/png-clipart-pink-hearts-forming-heart-illustration-three-dimensional-geometric-heart-love-heart.png' alt="image"/></div>
                        <div className='text-pink-900 text-3xl'>Believe Therapy</div>
                    
                    </button>
                    
                </div>
                
                
            </div>

        </div>
    )

   
}
 export default Nav