import React from 'react';
import python from '../../img/OIP.jpeg'
import java from '../../img/java-logo.png'
import tailwind from '../../img/Tailwind_CSS_Logo.svg.png'
import javascript from '../../img/javascript.png'
import html from '../../img/html.png'
import springboot from '../../img/spring-boot-ok.png'
import react from '../../img/react.png'
import webdesign from '../../img/web-design.png'
import postgres from '../../img/pgAdmin.png'



export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div data-aos='fade-up'
             data-aos-delay ='200'
             className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white'>Skills</h1>
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>I am a versatile programmer with expertise in multiple programming languages and frameworks. My primary stack includes Python and Java, where I excel in developing robust and efficient solutions. Additionally, I have working knowledge of JavaScript, React.js, Django, and Spring Boot. I am dedicated to continuously expanding my skill set to stay updated with modern technologies and deliver innovative solutions.</p>


            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'> 
                <img src={python} alt="" className='rounded-full w-20 h-20 object-cover' />
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'> 
                <img src={java} alt="" className='rounded-full w-24 h-24 object-cover' />
                </li>

                <li className='lg:w-1/3 mb-4 w-1/2'> 
                <img src={javascript} alt="" className='rounded-full w-24 h-24 object-cover' />

                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'> 
                <img src={html} alt="" className='rounded-full w-24 h-24 object-cover' />
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'> 
                <img src={springboot} alt="" className='rounded-full w-24 h-24 object-cover' />

                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'> 
                <img src={tailwind} alt="" className='rounded-full w-24 h-24 object-cover' />

                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'> 
                <img src={react} alt="" className='rounded-full w-24 h-24 object-cover' />

                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'> 
                <img src={webdesign} alt="" className='rounded-full w-24 h-24 object-cover' />

                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'> 
                <img src={postgres} alt="" className='rounded-full w-24 h-24 object-cover' />

                </li>

                

            </nav>

            </div>

        </div>

    </section>
    
  )
}
