import { useQuery, gql } from "@apollo/client";
import Transactions from "../components/Transactions";
import { Box, Center, Container } from "@chakra-ui/react";

const TRANSACTIONS_QUERY = gql`
  {
    transactions {
      id
      name
      status
      type
      date
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(TRANSACTIONS_QUERY);

  return (
    <Box bg="gray.800">
      <Container maxW={"container.xl"} overflowWrap="break-word">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <pre>{error?.message}</pre>
        ) : (
          <Center>
            <Transactions {...data} />
          </Center>
        )}
      </Container>
    </Box>
  );
};

export default Home;
