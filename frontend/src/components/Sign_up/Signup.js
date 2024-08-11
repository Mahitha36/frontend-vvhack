import React, { useState } from 'react';
import axios from 'axios';
import { Box, Card, CardBody, Input, FormControl, FormLabel, Button, Stack } from "@chakra-ui/react";
import api from '../actions/Api';

const Signup = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const signup = async () => {
    try{
    const res = await axios.post(api + "/signup", {
      FirstName,
      LastName,
      PhoneNumber,
      Email,
      password
    });
    if(res.data.message === "This email alerady exist"){
      alert("his email alerady exist")
    }else{
      alert(res.data.message)
    }
    
   }catch (e) {
    console.log(e);
    alert("An error occured.Please try again")
   }

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh" 
      backgroundColor="gray.100"
    >
      <Card 
        className="signup-card" 
        width="400px" 
        boxShadow="xl" 
        borderRadius="md" 
        backgroundColor="white"
      >
        <CardBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel className="signup-label">First Name</FormLabel>
              <Input 
                type='text' 
                className="signup-input" 
                placeholder='Enter your First name'
                value={FirstName} 
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel className="signup-label">Last Name</FormLabel>
              <Input 
                type='text'
                className="signup-input"
                placeholder='Enter your Last name'
                value={LastName} 
                onChange={(e) => setLastName(e.target.value)}
              /> 
            </FormControl>
            <FormControl>
              <FormLabel className="signup-label">Phone Number</FormLabel>
              <Input 
                type='number' 
                className="signup-input"
                placeholder='Enter your phone number'
                value={PhoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel className="signup-label">Email Address</FormLabel>
              <Input 
                type='email' 
                className="signup-input" 
                placeholder='Enter your email'
                value={Email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </FormControl>
            <FormControl>
              <FormLabel className="signup-label">Password</FormLabel>
              <Input 
                type='password' 
                className="signup-input" 
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </FormControl>
            <Button 
              className="signup-button" 
              size='lg' 
              mt={4} 
              colorScheme="teal" 
              onClick={signup}
              _hover={{ bg: "teal.600" }}
            >
              Sign Up
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
}
export default Signup;