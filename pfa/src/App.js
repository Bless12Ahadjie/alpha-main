import {Routes, Route } from 'react-router-dom';
import SignUp from './Templates/Sign Up/SignUp';
import Signin from './Templates/SignIn/Signin';
import Dashboard from './Templates/Dashboard/Dashboard';
import Homepage from './Templates/Homepage/Homepage';
import Onboard2 from './Templates/Onboard/Onboard2';
import Onboard1 from './Templates/Onboard/Onboard1';
import Error from './Templates/404/Error';



function App() {
  return (
   <>
  
   <Routes>
       <Route path='/' element={ <Homepage/>}/>
       <Route path='/welcome-2' element={ <Onboard1/>}/>
       <Route path='/welcome-1' element={ <Onboard2/>}/>
       <Route path='/Dashboard' element={<Dashboard/> }/>
       <Route path='/register' element={ <SignUp/>}/>
       <Route path='/Sign-in' element={ <Signin/>} />
       <Route path='*' element={<Error/>}/>
       




       {/* <Route path='about' element={<About />}/>
       <Route path='order-summary' element={<Order/>}/>
       <Route path='*' element={<Nomatch/>}/>
       <Route path='products' element={<Product/>}>
         <Route index element={<Feature/>}/>
         <Route path='featured' element={<Feature/>}/>
         <Route path='new' element={<New/>}/>
       </Route> */}



     </Routes>
   
   </>
  );
}

export default App;
