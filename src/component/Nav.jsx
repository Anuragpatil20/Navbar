import React from 'react'

export default function Nav() {
  return (
    <nav class="bg-indigo-950 ">
    <div class="flex w-[1080px] mx-auto relative justify-between items-center h-16">
        <a href="/" class="cursor-pointer py-7 pr-7">

            <img src="https://img.freepik.com/premium-photo/free-vector-colorful-bird-illustration-gradient-bird-colorful-logo-gradient-vector_971166-59253.jpg" width="60px" height="25px" alt=""/>
        </a>

        <ul class="flex gap-6 text-[15px] font-semibold hidden md:flex gap-8 text-lg">

            <li class="text-white hover:text-blue-600  cursor-pointer transition-all duration-200 py-5 relative group ">
                <a href="/home">Home</a>
               <div class="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block "></div>
            </li>

            <li class="text-white hover:text-blue-600 cursor-pointer transition-all duration-200 py-5 relative group">
                <a href="/#">About_us</a>
               <div class="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block "></div>
            </li>

       

            <li class="text-white hover:text-blue-600 cursor-pointer transition-all duration-200 py-5 relative group">
                <a href="/contact">Contact</a>
               <div class="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block "></div>
            </li>

            <li class="text-white hover:text-blue-600 cursor-pointer transition-all duration-200 py-5 relative group">
                <a href="/#">Gallery</a>
               <div class="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block "></div>
            </li>

           

            
          
      </ul>

        <div class="flex items-center hidden md:flex gap-8 text-lg  space-x-6">

            <img src="https://wallpapercave.com/wp/wp3400419.png"
            width="28px"
            height="20px"
            alt=""/>

            <a href='/login'><button class="bg-blue-950 text-white font-bold py-3 px-5 border-blue-500 border rounded-sm text-sm hover:bg-blue-500 transition-all duration-200 ">
                Log in
            </button></a>

           <a href='/register'> <button class="bg-white text-blue-500 py-3 px-5 text-sm font-bold flex items-center hover:text-blue-900 transition-all duration-200 ">
                Sign up
                <img src="https://tse3.mm.bing.net/th?id=OIP.7upJrtgHHZdsJxP2TQk-hQHaD3&pid=Api&P=0&h=180" 
                width="25px"
                height="20px"
                alt=""/>
            </button></a>
            
        </div>
    </div>
    <div id="mobileMenu" class="md:hidden bg-indigo-950 text-white  p-5 space-y-3">
    <a href="/home" class="block hover:bg-gray-700 py-2 px-4 rounded">Home</a>
    <a href="/#" class="block hover:bg-gray-700 py-2 px-4 rounded">About_us</a>
    <a href="/contact" class="block hover:bg-gray-700 py-2 px-4 rounded">contact</a>
    <a href="/#" class="block hover:bg-gray-700 py-2 px-4 rounded">Gallery</a>
  </div>
  <div class="md:hidden bg-indigo-950 text-white   p-5 space-y-3">

            <img src="https://wallpapercave.com/wp/wp3400419.png"
            width="28px"
            height="20px"
            alt=""/>

            <a href='/login'><button class="bg-blue-950 text-white font-bold py-3 px-5 border-blue-500 border rounded-sm text-sm hover:bg-blue-500 transition-all duration-200 ">
                Log in
            </button></a>

           <a href='/register'> <button class="bg-white text-blue-500 py-3 px-5 text-sm font-bold flex items-center hover:text-blue-900 transition-all duration-200 ">
                Sign up
                <img src="https://tse3.mm.bing.net/th?id=OIP.7upJrtgHHZdsJxP2TQk-hQHaD3&pid=Api&P=0&h=180" 
                width="25px"
                height="20px"
                alt=""/>
            </button></a>
            
        </div>
   </nav>

  )
}
