// import Seo from "../shared/Seo";
import Navbar from "../components/Navbar"
import Blob from "../components/Blob"

// import { Container } from "react-bootstrap";






function Contact(){


  

    return(

        <>

<Navbar/> 
<Blob/>


                <div className="signup__page"> 
                <div className="header_section_about">


                  
<img alt= "het" src="./assets/image-removebg-preview (3) 1.svg"/>

<div className="text_section_about">
    <h2>I’m available </h2>
    <h1>Contact me</h1>

    <div className="input_section">
        <input type="text" placeholder="Name" /> <br/>
        <input type="email" placeholder="Email" /><br/>
        <input className="messager" type="text" placeholder="Message" /><br/>

    </div>
    <button className="contact_but">
        Send Message <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12h11m0 0-4.588-4m4.588 4-4.588 4" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
</div>


</div>
  
    
                  
                    

                        
                   
                </div>
          
        </>
    );
}

export default Contact;