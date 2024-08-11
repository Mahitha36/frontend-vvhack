import React, { useState } from 'react';
import { FormControl, FormLabel, Input, FormHelperText, Button, Box, Heading } from '@chakra-ui/react';
import axios from 'axios';
import api from './Actions/Api'; // Ensure the correct path

const ResetPassword = () => {

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(api + "/updatepass", { email, newPassword });
      if (response.data.message === "Password updated successfully") {
        alert("Password updated successfully. You can now log in.");
        window.location.href = "/signin";
      } else {
        alert("Error: Unable to update password");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="#f7fafc"
    >
      <Box
        padding="30px"
        maxWidth="400px"
        boxShadow="lg"
        borderRadius="md"
        backgroundColor="white"
        borderWidth="1px"
        borderColor="gray.300"
      >
        <Heading as="h2" size="lg" textAlign="center" marginBottom="20px">Reset Password</Heading>

        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            type='email'
            placeholder="Enter your email"
            marginBottom="12px"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>New Password</FormLabel>
          <Input
            type='password'
            placeholder="Enter your new password"
            marginBottom="12px"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>confirm Password</FormLabel>
          <Input
            type='password'
            placeholder="Enter your new password"
            marginBottom="12px"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormHelperText marginBottom="16px">
            Enter and confirm your new password.
          </FormHelperText>

          <Button
            colorScheme="teal"
            width="100%"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </FormControl>

      </Box>
    </Box>
  );
}

export default ResetPassword;