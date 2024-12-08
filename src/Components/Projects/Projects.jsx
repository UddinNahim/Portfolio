import React from 'react';
import Slider from 'react-slick'
import image from '../../img/image.png'
import image2 from '../../img/image2.png'
import image3 from '../../img/image3.png'
import image4 from '../../img/image4.png'


export default function Projects() {
    const listProjects = [
        {id:1,image:image, title:'Project 1' , description:'Photo description for project'},
        {id:2,image:image2, title:'Project 2' , description:'Photo description for project2'},
        {id:3,image:image3, title:'Project 3' , description:'Photo description for project3'},
        {id:4,image:image4, title:'Project 4' , description:'Photo description for project4'},
    ];
    const settings = {
        dots: true,
        Infinity:true,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true,
        responsive:true [
            {
                breakpoint:700,
                settings:[
                    slidersToShow:1,
                ]
            }
        ]
    }
  return (
    <section >

    </section>
  )
}
