import { Center, Flex } from "@chakra-ui/react";
import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      minH={"100vh"}
      minW="100wh"
      direction={"column"}
    >
      <Center flexDirection={"column"}>
        <ThreeDots
          height="80"
          width="80"
          color="white"
          ariaLabel="loading"
        />
      </Center>
    </Flex>
  );
};

export default Loading;
