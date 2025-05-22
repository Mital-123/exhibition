import React from 'react';

function Imageslider() {
  const logos = [
    { img: "https://camo.envatousercontent.com/3641e902d71b12171b47c1836d1da794b4f5c7c2/68747470733a2f2f692e696d6775722e636f6d2f6638573651614e2e6a7067" },
    { img: "https://gumlet.assettype.com/down-to-earth%2Fimport%2Fdte%2Fuserfiles%2Fimages%2Fyoga(1).jpg" },
    { img: "https://i.pinimg.com/736x/9c/45/7e/9c457eb944acc02dba33dd2c1ca4f465.jpg" },
    { img: "https://i.pinimg.com/736x/c7/2d/b2/c72db210a8f2150cff316eb3b5099231.jpg" },
    { img: "https://i.pinimg.com/736x/7e/a3/b6/7ea3b6296c228b8d7785b966d0d97a7b.jpg" },
    { img: "https://scx2.b-cdn.net/gfx/news/hires/2022/chefs-kiss-research-sh.jpg" },
    { img: "https://gadyalkashmir.com/wp-content/uploads/2024/06/international-yoga-day-2020-01-1-scaled-1.jpg" },
    { img: "https://www.shutterstock.com/image-photo/world-famous-restaurant-asian-female-600nw-2141026799.jpg" },
    { img: "https://www.goldenlotusmala.com/cdn/shop/articles/intnl-yoga-day_1600x.jpg?v=1687360515" },
    { img: "https://dwnjscqilqpcr.cloudfront.net/assets/uploads/posts_large/2025/5/1747450191_Yoga.jpg" },
    { img: "https://i.pinimg.com/736x/c7/2d/b2/c72db210a8f2150cff316eb3b5099231.jpg" },
    { img: "https://images.sbs.com.au/dims4/default/0dec9f6/2147483647/strip/true/crop/1800x1013+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Fyourlanguage%2Fpublic%2Fpodcast_images%2Fgettyimages-905559618.jpg&imwidth=600" },
  ];
  const logos02 = [
    { img: "https://jknewstoday.com/wp-content/uploads/2024/06/101177427.jpg" },
    { img: "https://technopark.org/storage/images/702.jpg" },
    { img: "https://img.freepik.com/premium-photo/food-blogger-adorable-healthy-chef-recording-video-social-media-cooking-process_140725-166617.jpg" },
    { img: "https://media.istockphoto.com/id/1307586844/photo/man-watching-video-recipe-on-laptop-and-cooking-at-home.jpg?s=612x612&w=0&k=20&c=xBGSzTW-iVOLRaCXqoTS3Rbc_OeP3OAOP8y1dhGVBHw=" },
    { img: "https://img.freepik.com/free-vector/world-yoga-day-celebration-poster-woman-doing-asana-with-leaves-design_1017-52639.jpg" },
    { img: "https://as2.ftcdn.net/v2/jpg/01/31/48/69/1000_F_131486900_skZLVPitbgr35N1fGiUZ29PpR2oWNaJ6.jpg" },
    { img: "https://www.bkkkids.com/wp-content/uploads/2024/10/iStock-503779060.jpg" },
    { img: "https://mir-s3-cdn-cf.behance.net/projects/404/eedbab37825563.Y3JvcCw0MDQsMzE2LDAsMA.png" },
    { img: "https://static.india.com/wp-content/uploads/2020/01/Healthy-food-for-kids.jpg?impolicy=Medium_Widthonly&w=400" },
    { img: "https://img.freepik.com/free-vector/flat-international-yoga-day-illustration_23-2149397992.jpg" },
    { img: "https://www.trophiesplusmedals.co.uk/media/blog/5-Award-Ceremony-Ideas-to-Wow-the-Audience.jpg" },

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
