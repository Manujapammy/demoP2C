
import React from 'react';
import Swiper from 'react-id-swiper';

const Test = () => {

  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <Swiper {...params}>
      
      <div>
        <div class="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>

          <div class="card-image">
            <img src="images/project-2.jpg" alt="" class="card-img" />
          </div>
        </div>

        <div class="card-content">
          <h2 class="name">David Dell</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

          <button class="button">View More</button>
        </div>
      </div></div>
      <div><div class="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>

          <div class="card-image">
            <img src="images/project-2.jpg" alt="" class="card-img" />
          </div>
        </div>

        <div class="card-content">
          <h2 class="name">David Dell</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

          <button class="button">View More</button>
        </div>
      </div></div>
      <div><div class="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>

          <div class="card-image">
            <img src="images/project-2.jpg" alt="" class="card-img" />
          </div>
        </div>

        <div class="card-content">
          <h2 class="name">David Dell</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

          <button class="button">View More</button>
        </div>
      </div></div>
      <div><div class="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>

          <div class="card-image">
            <img src="images/project-2.jpg" alt="" class="card-img" />
          </div>
        </div>

        <div class="card-content">
          <h2 class="name">David Dell</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

          <button class="button">View More</button>
        </div>
      </div></div>
      <div><div class="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>

          <div class="card-image">
            <img src="images/project-2.jpg" alt="" class="card-img" />
          </div>
        </div>

        <div class="card-content">
          <h2 class="name">David Dell</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

          <button class="button">View More</button>
        </div>
      </div></div>
    </Swiper>
  )
};

export default Test;
