// --------- import external dependencies ----------
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

// --------- import screen component with lazy load ----------
const Home = lazy(() => import("../screens/Home"))
const About = lazy(() => import("../screens/About"))
const Contact = lazy(() => import("../screens/Contact"))
const Projects = lazy(() => import("../screens/Projects"))
const Product= lazy(() => import("../screens/Product"))
const Front= lazy(() => import("../screens/Front"))
const Graphics= lazy(() => import("../screens/Graphics"))









function AppRoute() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
             <Route exact path="/" element={<Home />} /> 
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="/front" element={<Front/>} />
          <Route exact path="/graphics" element={<Graphics/>} />





              {/* 
          <Route exact path="/signup" component={Signup} />
              <Route exact path="/forget" component={Forget} /> 
             <Route exact path="/dashboard" component={Dashboard} />  */}
            {/*<Route exact path="/music" component={Music} />  */}
  
  
  
            
          </Routes>
        </Router>
      </Suspense>
  
  
    );
  }
  
  export default AppRoute;