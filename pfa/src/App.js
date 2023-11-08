import {Routes, Route } from 'react-router-dom';
import SignUp from './Templates/Sign Up/SignUp';
import Signin from './Templates/SignIn/Signin';
import Dashboard from './Templates/Dashboard/Dashboard';
import Homepage from './Templates/Homepage/Homepage';


function App() {
  return (
   <>
  
   <Routes>
       <Route path='/' element={ <Homepage/>}/>
       <Route path='/Dashboard' element={<Dashboard/> }/>
       <Route path='/register' element={ <SignUp/>}/>
       <Route path='/Sign-in' element={ <Signin/>} />




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
