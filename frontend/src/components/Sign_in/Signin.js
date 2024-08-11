// import React, { useState } from 'react';
// import { FormControl, FormLabel, Input, FormHelperText, Button, Box, Heading } from '@chakra-ui/react';
// import axios from 'axios';
// import api from '../actions/Api';

// function SignIn() {
//   const [Email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const signin = async () => {
//     await axios.post(api + "/signin", { Email, password })
//       .then((res) => {
//         if (res.data.message === "Login successful") {
//           console.log(res?.data?.values);
//           alert("Login successful");
//         } else {
//           alert("User not found");
//           window.location.href = "/signup";
//         }
//       })
//       .catch((e) => console.log(e));
//   };

//   return (
//     <Box 
//       display="flex" 
//       alignItems="center" 
//       justifyContent="center" 
//       height="100vh" 
//       backgroundColor="#f7fafc"  // Light background color
//     >
//       <Box
//         padding="30px"
//         maxWidth="400px"
//         boxShadow="lg"
//         borderRadius="md"
//         backgroundColor="white"
//         borderWidth="1px"
//         borderColor="gray.300"
//       >
//         <Heading as="h2" size="lg" textAlign="center" marginBottom="20px">Sign In</Heading>
        
//         <FormControl>
//           <FormLabel>Email address</FormLabel>
//           <Input 
//             type='email' 
//             placeholder="Enter your email" 
//             marginBottom="12px" 
//             value={Email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />

//           <FormLabel>Password</FormLabel>
//           <Input 
//             type='password' 
//             placeholder="Enter your password" 
//             marginBottom="12px" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />

//           <FormHelperText marginBottom="16px">
//             We&apos;ll never share your email and password.
//           </FormHelperText>

//           <Button 
//             colorScheme="teal" 
//             width="100%" 
//             onClick={signin}
//           >
//             Submit
//           </Button>
//         </FormControl>
//       </Box>
//     </Box>
//   );
// }

// export default SignIn;













