import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function RegistrationWaiting() {
    return (
        <Box textAlign="center" py={10} px={6}>
          <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Thank you for submitting
          </Heading>
          <Text color={'gray.500'}>
            Your application is under review, we will let you know shortly
          </Text>
        </Box>
      );
}
