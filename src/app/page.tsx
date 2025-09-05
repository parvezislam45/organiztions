
import About from "./ui/About";
import Blog from "./ui/Blog";
import ContactUs from "./ui/Contactus";
import Gallery from "./ui/Gellery";
import Services from "./ui/Services";
import Slider from "./ui/Slider";
import Testimonials from "./ui/Testimonials";
import Video from "./ui/Video";


export default function Home(){
  return (
    <div>
      <Slider/>
      <About/>
      <Video/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Blog/>
      <ContactUs/>
    </div>
  )
}