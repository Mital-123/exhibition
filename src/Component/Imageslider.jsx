import React from 'react';

function Imageslider() {
     const logos = [
    { img: "https://camo.envatousercontent.com/3641e902d71b12171b47c1836d1da794b4f5c7c2/68747470733a2f2f692e696d6775722e636f6d2f6638573651614e2e6a7067" },
    { img: "https://gumlet.assettype.com/down-to-earth%2Fimport%2Fdte%2Fuserfiles%2Fimages%2Fyoga(1).jpg" },
    { img: "https://i.pinimg.com/736x/9c/45/7e/9c457eb944acc02dba33dd2c1ca4f465.jpg" },
    { img: "https://i.pinimg.com/736x/c7/2d/b2/c72db210a8f2150cff316eb3b5099231.jpg" },
    { img: "https://i.pinimg.com/736x/7e/a3/b6/7ea3b6296c228b8d7785b966d0d97a7b.jpg" },
    { img: "https://gadyalkashmir.com/wp-content/uploads/2024/06/international-yoga-day-2020-01-1-scaled-1.jpg" },
    { img: "https://i.pinimg.com/736x/07/46/80/0746809e67352720c1bfb200bec50810.jpg" },
    { img: "https://www.armandhammer.com/-/media/aah/feature/articles/laundry-articles/header-clean-fabric.jpg" },
    { img: "https://cdn.shopify.com/s/files/1/0030/2333/9618/files/79.jpg?v=1607110939" },
    { img: "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2023_05/1963367/230201-laundry-stripping-kb-2x1.jpg" },
    { img: "https://www.threads4thought.com/cdn/shop/products/GoodJuju-Laundry-Strip-01.jpg?crop=center&height=469&v=1628637310&width=375" },
  ];
  const logos02 = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fgDuxzLJiVDZxc9MRO6Ct4oT7YZBdFRsdXPARGzwAzFdTb4YBwJ_aNkxIhv6ktwkyqY&usqp=CAU" },
    { img: "https://img.choice.com.au/-/media/8f073d5cbc914b1482391501f0238782.ashx?w=660&jq=80%20660w" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBtJGN8eVfNzq172qgySP3mfKm61DyvVQbLyCJJyuyhFbiP2oyTWazq6h6wsbowQhwwM&usqp=CAU" },
    { img: "https://transform-cf1.nws.ai/https%3A//cdn.thenewsroom.io/platform/story_media/1288817962/how-to-get-rid-of-static-cling-in-your-laundry-1.webp/w_1200,c_limit/" },
    { img: "https://www.marthastewart.com/thmb/nxxVFCxBOikmk5ElgxXay_CeCi4=/400x266/filters:no_upscale():max_bytes(150000):strip_icc():focal(2739x1625:2741x1627)/laundry-room-organizing-lead-getty-1023-c779027b3cc644578cf3aa947ed62e82.jpg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oYVNhNNt4_sqd3jt5YrFTwzG0dUb3upfba5swfEYNYDia8exeTe7rSZXYz-Pyhy43Lg&usqp=CAU" },
    { img: "https://cdn.create.vista.com/api/media/small/718042596/stock-photo-man-cozy-homewear-holds-laundry-bag-front-washing-machine" },
    { img: "https://www.southernliving.com/thmb/NDV6WFYZk3TRzJDUJozhBsA09e4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1467840031-61d56f92c2fa41fd8ac15e8653d10ae0.jpg" },
    { img: "https://cdn.mos.cms.futurecdn.net/BbGYHn9hp3ou6PL5EEAdhG-1200-80.jpg" },
    { img: "https://www.housedigest.com/img/gallery/the-laundry-sorting-hack-that-prolong-the-life-of-your-detergent/intro-1696600307.jpg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvJmjWcjpVlQyIKINEol66h9e7oytbiec7Q&s" },
  ];
  return (
   <>
   
         <div className='schedule'>
             <div className="partners-logo-slider  mt-2 pt-2 pt-lg-5">
            <div className="slide-track">

              {logos.concat(logos).map((logo, index) => (
                <div className="sliderun m-2 rounded-4" key={index}>
                  <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
                </div>
              ))}
              {logos.concat(logos).map((logo, index) => (
                <div className="sliderun m-2 rounded-4" key={index}>
                  <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
                </div>
              ))}

            </div>
          </div>
          <div className="partners-logo-slider  mb-2 pb-lg-5">
            <div className="slide-track02">

              {logos02.concat(logos02).map((logo, index) => (
                <div className="sliderun m-2 rounded-4" key={index}>
                  <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
                </div>
              ))}
              {logos02.concat(logos02).map((logo, index) => (
                <div className="sliderun m-2 rounded-4" key={index}>
                  <img src={logo.img} alt="Logo" className="img-fluid  d-flex slign-content-center align-items-center justify-content-center object-fit-cover w-100 h-100 rounded-4" />
                </div>
              ))}
            </div>
          </div>
         </div>
   </>
  );
}

export default Imageslider;
