// import Seo from "../shared/Seo";
// import Navbar from "../components/Navbar"
import {Nav,Container,Navbar} from "react-bootstrap";






function Navvbar(){


  

    return(

        <>
<Navbar collapseOnSelect expand="lg" className="top_nav">
  <Container>
  <Navbar.Brand href="/"><img alt="logo" src="./assets/logo copy.svg"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav_links">
      <Nav.Link className="Home" href="/about"> 
      <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.472 11.554.72-.208-.72.208Zm0-6.647-.72-.209.72.209Zm17.056 0 .72-.209-.72.209Zm0 6.647-.72-.208.72.208Zm-3.713 3.454-.14-.737.14.736Zm-9.63 0 .14-.737-.14.736Zm0-13.555-.14-.736.14.736Zm9.63 0 .14-.736-.14.736ZM1.52 11.721l-.72.209.72-.209Zm16.96 0 .72.209-.72-.209Zm0-6.981-.72.208.72-.208Zm-16.96 0 .72.208-.72-.208Zm9.23 11.183a.75.75 0 0 0-1.5 0h1.5ZM9.25 19a.75.75 0 0 0 1.5 0h-1.5Zm-1.886-.75a.75.75 0 0 0 0 1.5v-1.5Zm5.272 1.5a.75.75 0 1 0 0-1.5v1.5ZM17.76 4.948l.049.167 1.44-.417-.048-.167-1.44.417Zm.049 6.398-.049.167 1.441.417.049-.167-1.441-.417Zm-15.568.167-.048-.167-1.44.417.048.167 1.44-.417Zm-.048-6.398.048-.167L.8 4.531l-.049.167 1.441.417Zm0 6.231a11.196 11.196 0 0 1 0-6.231l-1.44-.417a12.695 12.695 0 0 0 0 7.065l1.44-.417Zm15.616-6.231c.59 2.038.59 4.193 0 6.231l1.44.417c.67-2.31.67-4.755 0-7.065l-1.44.417Zm-3.133 9.156a25.039 25.039 0 0 1-9.35 0l-.28 1.473c3.272.622 6.637.622 9.91 0l-.28-1.473ZM5.325 2.19a25.04 25.04 0 0 1 9.35 0l.28-1.474a26.54 26.54 0 0 0-9.91 0l.28 1.473Zm0 12.08c-1.492-.284-2.68-1.358-3.085-2.758L.8 11.93c.567 1.96 2.215 3.428 4.245 3.814l.28-1.473Zm9.63 1.473c2.03-.386 3.678-1.854 4.245-3.814l-1.44-.417c-.406 1.4-1.593 2.474-3.085 2.758l.28 1.473Zm-.28-13.554c1.492.284 2.68 1.358 3.084 2.758l1.441-.417c-.567-1.96-2.215-3.428-4.245-3.814l-.28 1.473ZM5.045.717C3.015 1.103 1.367 2.57.8 4.53l1.44.417c.406-1.4 1.593-2.474 3.085-2.758L5.045.717ZM9.25 15.923V19h1.5v-3.077h-1.5ZM7.364 19.75h5.272v-1.5H7.364v1.5Z" fill="#363853"/><path d="m6 9.25 2.059-1.621c.376-.296.564-.444.771-.418.208.027.353.217.643.597l1.054 1.384c.29.38.435.57.643.597.207.026.395-.122.771-.418L14 7.75" stroke="#7A7FED" stroke-width="1.5" stroke-linecap="round"/></svg>
      About Me
</Nav.Link>
      <Nav.Link href="/projects"> 
      <svg width="21" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.773 6.223 5.66 5.48l.113.742Zm5.863 0 .113-.742-.113.742Zm-.302 17.545-.131-.738.13.738Zm-5.259 0 .132-.738-.132.738ZM2.05 20.301l-.717.221.717-.221Zm-.89-9.695.745.087-.744-.087Zm15.163.62.745-.086-.745.087Zm-.777 8.478-.717-.221.717.221Zm-14.35-9.408-.744-.087.745.087ZM5.009 6.34l.113.741-.113-.741Zm.933 17.405-.13.738.13-.738Zm9.46-3.574.716.22-.716-.22Zm.838-9.657-.745.087.745-.087Zm-4.053-4.207-.114.741.114-.741Zm4.589 12.499v-.75.75Zm3.14-4.015-.734.157.733-.157Zm.01.051.734-.157-.734.157Zm0 1.411-.733-.157.733.157Zm-3.098-3.963v-.75.75ZM15.8 18.806l-.726-.189.726.189Zm.619-6.516-.749.049.749-.049Zm-.925-1.69.083.714 1.49-.174-.083-.713-1.49.174Zm-.666 8.883-.144.466 1.433.443.144-.467-1.433-.442Zm-12.924-8.79.037-.31-1.49-.174-.036.31 1.49.174ZM6.207 23.03l-.134-.024-.263 1.477.134.024.263-1.477ZM5.12 7.081l.766-.117-.227-1.483-.765.117.226 1.483Zm6.402-.117.55.084.226-1.483-.55-.084-.226 1.483Zm-5.636 0a18.657 18.657 0 0 1 5.636 0l.226-1.483a20.157 20.157 0 0 0-6.089 0l.227 1.483Zm5.316 16.066a14.294 14.294 0 0 1-4.996 0l-.263 1.477c1.826.324 3.695.324 5.52 0l-.261-1.477Zm-8.437-2.95a22.84 22.84 0 0 1-.862-9.387l-1.49-.174a24.34 24.34 0 0 0 .918 10.003l1.434-.442Zm-.825-9.697a3.781 3.781 0 0 1 3.18-3.302l-.226-1.483A5.281 5.281 0 0 0 .45 10.21l1.49.174Zm-.609 10.14a5.739 5.739 0 0 0 4.478 3.96l.263-1.477a4.239 4.239 0 0 1-3.307-2.926l-1.434.442Zm13.352-.574a4.462 4.462 0 0 1-3.481 3.081l.262 1.477a5.962 5.962 0 0 0 4.652-4.115l-1.433-.443Zm2.3-9.522a5.568 5.568 0 0 0-4.685-4.862l-.227 1.483a4.068 4.068 0 0 1 3.422 3.553l1.49-.174Zm-.21 7.629h-.488v1.5h.489v-1.5Zm2.407-3.108.01.051 1.468-.314-.011-.051-1.467.314Zm.01.051c.078.362.078.736 0 1.097l1.468.315a4.116 4.116 0 0 0 0-1.726L19.192 15Zm-2.416 4.557a3.974 3.974 0 0 0 3.884-3.145l-1.467-.315a2.474 2.474 0 0 1-2.417 1.96v1.5Zm.052-6.516a2.41 2.41 0 0 1 2.354 1.908l1.467-.314a3.91 3.91 0 0 0-3.82-3.094v1.5Zm-1.753 5.577c-.075.29-.157.579-.246.866l1.433.442c.096-.308.184-.619.265-.93l-1.452-.378Zm1.212-.561H15.8v1.5h.486v-1.5Zm-.709-6.742c.04.341.071.683.093 1.025l1.497-.097a21.364 21.364 0 0 0-.1-1.102l-1.49.174Zm.093 1.025a19.88 19.88 0 0 1-.596 6.278l1.452.377c.572-2.202.788-4.482.641-6.752l-1.497.097Zm1.157-.799h-.408v1.5h.408v-1.5Z" fill="#363853"/><path d="M4.5 14.5v.764c0 1.47.342 2.92 1 4.236" stroke="#363853" stroke-width="1.5" stroke-linecap="round"/><path d="M3.5 1S6.44 3.211 6 5c-.363 1.481-3.019.975-3 2.5.022 1.746 4 2 4 2M8.5 1s2.94 2.211 2.5 4c-.363 1.481-3.019.975-3 2.5.022 1.746 4 2 4 2" stroke="#7A7FED"/></svg>
      
       My Projects 
</Nav.Link>
      
      <Nav.Link href="/contact">  
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 9h-2M5 15H4M4 12H2" stroke="#7A7FED" stroke-width="1.5" stroke-linecap="round"/><path d="M12.04 12.765a.75.75 0 0 0 0-1.5v1.5Zm-2.772 0h2.773v-1.5H9.268v1.5Z" fill="#7A7FED"/><path d="m11.837 4.809.354-.661-.354.66Zm8.702 4.668-.354.66.354-.66Zm-.003 5.068.353.662-.353-.662Zm-8.698 4.648-.354-.661.354.661Zm-3.701-3.4-.719-.215.719.215Zm-.006-7.59-.718.215.718-.214Zm1.052 3.526-.72.214.72-.214Zm2.3-6.26 8.702 4.669.709-1.322-8.703-4.668-.709 1.321Zm8.7 8.415-8.699 4.648.707 1.323 8.698-4.648-.707-1.323ZM8.854 16.008l1.046-3.492-1.437-.43-1.046 3.492 1.437.43Zm1.046-4.494L8.85 7.99l-1.437.428 1.05 3.525 1.438-.429Zm1.583 7.018c-.733.392-1.496.227-2.043-.276-.553-.507-.856-1.343-.586-2.248l-1.437-.43c-.444 1.483.055 2.907 1.008 3.783.958.88 2.403 1.222 3.765.494l-.707-1.323Zm8.7-8.394c1.422.762 1.42 2.986-.002 3.746l.707 1.323c2.48-1.325 2.482-5.062.005-6.391l-.71 1.322Zm-7.993-5.99c-1.36-.73-2.807-.391-3.766.488-.954.874-1.455 2.298-1.012 3.782L8.85 7.99c-.27-.905.035-1.741.588-2.248.548-.502 1.311-.666 2.044-.273l.71-1.321Zm-2.29 8.368a1.75 1.75 0 0 0 0-1.002l-1.437.429a.25.25 0 0 1 0 .143l1.437.43Z" fill="#363853"/></svg>
      Contact  </Nav.Link>

    
    </Nav>

   
  </Navbar.Collapse>
  </Container>
</Navbar>
          
        </>
    );
}

export default Navvbar;