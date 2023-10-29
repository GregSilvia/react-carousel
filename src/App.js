import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((e) => (
          <div className="bg-white h-[450px] text-black rounded-xl">
            <div className="h-56 rounded-t-xl bg-yellow-200 flex justify-center items-center">
              <img src={e.img} alt='' className="h-44 w-44 rounded-full"/>
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{e.name}</p>
                <p>{e.review}</p>
                <button className="bg-gray-400 text-white text-leg px-6 py-1 rounded-xl">Read More</button>
                </div>
            </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'Scott Zembsch',
    img: '/images/cat1.jpg',
    review: ''
  },
  {
    name: 'Jake Moore',
    img: '/images/cat2.jpg',
    review: ''
  },
  {
    name: 'Nick Mackenzie',
    img: '/images/cat3.jpg',
    review: ''
  },
  {
    name: 'Mike Mchugo',
    img: '/images/cat4.jpg',
    review: ''
  },
]

export default App;
