import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/Sign_in/Signin'
import Signup from './components/Sign_up/Signup'
//import StudentData from './components/Student_data'
function App() {
  return (
<>
<BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='/students' element={<StudentData />} /> */}
        </Routes> 
      </BrowserRouter>
</>
  );
}

export default App;

// import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ChakraProvider } from '@chakra-ui/react'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import {Card } from './components/cards';
// import React from 'react';

// import SignIn from './components/sign_in/Sign_in'; // Ensure this path is correct

