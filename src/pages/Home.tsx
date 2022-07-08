import { useQuery, gql } from "@apollo/client";
import Transactions from "../components/Transactions";
import { Box, Center, Container } from "@chakra-ui/react";
import Error from "../components/Error";
import Loading from "../components/Loading";

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
    <Box bg="brand.100">
      <Container maxW={"container.xl"} overflowWrap="break-word">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error {...error} />
        ) : (
          <Transactions {...data} />
        )}
      </Container>
    </Box>
  );
};

export default Home;
