//below two imports are for react-inbuilt-carousel 
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
    return (
        //h-res_screen is utility height created by me ( see in tailwind config file)
        <div className='relative drop-shadow-lg' >

            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={2000}>
                
                <div>
                    {/* lazy loading is important , so that it does not slow down your user experience , becoz it helps in loading only when the image comes on screen , does not load on start of website */}
                    <img loading="lazy" className='h-screen-70 object-cover object-center'  src="https://images.unsplash.com/photo-1637217423028-25a89722c380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80" alt="image" />
                </div>
                <div>
                    <img loading="lazy" className='h-screen-70 object-cover object-center' src="https://images.pexels.com/photos/1460873/pexels-photo-1460873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="image" />
                </div>
                <div>
                    <img loading="lazy" className='h-screen-70 object-cover object-center' src="https://images.pexels.com/photos/2180877/pexels-photo-2180877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" height="100%" alt="image" />
                </div>
                <div>
                    <img loading="lazy" className='h-screen-70 object-cover object-center' src="https://images.unsplash.com/photo-1585558061463-5cb48b456fc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" width="100%" height="100%" alt="image" />
                </div>
                <div>
                    <img loading="lazy" className='h-screen-70 object-cover object-center' src="https://images.pexels.com/photos/2260555/pexels-photo-2260555.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" width="100%" height="100%" alt="image" />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
