// import Seo from "../shared/Seo";
 import Navbar from "../components/Navbar"
 import Blob from "../components/Blob"

// import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

// import { Link } from "react-router-dom";






function Home(){


  

    return(

        <>

<Navbar/> 
<Blob/>
{/* ----------- svg for the header section ---------- */}
                <div className="signup__page"> 

                  
                    <div className="header_section">


                  
                        <img alt= "het" src="./assets/IMG_4167-removebg 1.svg"/>


                        <div className="text_section">
                            <h2>Hi</h2>
                            <h1>I’m Adeola Daniel</h1>

                            <p> Front-end Developer   <b> | </b> Product Designer <b> | </b>  Graphics Designer</p>

                            <span>i'm a Front-end developer that also loves designing. i build my designs with <br/> figma then do the conversion with react js. i love building awesome  things<br/> for the web and designing user friendly platform that helps the society at <br/> large</span>
                        </div>
                     
                       
           
                    

                    </div>
                        {/* -------------------- Sponsor section ------------------ */}


                    
                </div>
          
        </>
    );
}

export default Home;