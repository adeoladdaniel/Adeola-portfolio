// import Seo from "../shared/Seo";
import Navbar from "../components/Navbar"
import Blob from "../components/Blob"
import ContactForm from "../components/fofrm"

// import { Container } from "react-bootstrap";






function Contact(){


  

    return(

        <>

<Navbar/> 
<Blob/>



                <div className="signup__page"> 
                <div className="header_section_contact">


                  
<img alt= "het" src="./assets/image-removebg-preview (3) 1.svg"/>

<div className="text_section_about">
    <h2>I’m available </h2>
    <h1>Contact me</h1>

    <div className="input_section">
        {/* <input type="text" placeholder="Name" /> <br/> */}
        {/* <input type="email" placeholder="Email" /><br/> */}
        {/* <input className="messager" type="text" placeholder="Message" /><br/> */}
<ContactForm />


    </div>
  
</div>


</div>
  
    
                  
                    

                        
                   
                </div>
          
        </>
    );
}

export default Contact;