import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ballBg from "../assets/ballBg.png";
export default function PokeItem({ name, url }) {
  let type = ["Water", "Blue"];
  return (
    <>
      <Box
        borderRadius={"10px"}
        pos={"relative"}
        overflow={"hidden"}
        w={"170px"}
        h={"130px"}
        bgColor={"salmon"}
      >
        <Flex
          marginTop={"20px"}
          justifyContent={"flex-start"}
          alignContent={"flex-start"}
          paddingLeft={"10px"}
          paddingRight={"10px"}
        >
          <Box>
            <Flex flexDir={"column"}>
              <Text>{name}</Text>
              {type.map((el, index) => {
                return (
                  <Box
                    key={index}
                    marginTop={"10px"}
                    borderRadius={"10"}
                    bgColor={"rgba(0, 0, 0, 0.2)"}
                    width={"50px"}
                  >
                    <Text key={index} textAlign={"center"}>
                      {el}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </Flex>
        <Box width={"85px"}>
          <Image
            overflow={"hidden"}
            pos={"absolute"}
            opacity={"0.2"}
            width={"120px"}
            right={"-20px"}
            top={"30px"}
            height={"auto"}
            src={ballBg}
          ></Image>

          <Image
            position={"absolute"}
            marginTop={"25px"}
            right={"-2px"}
            top={"10px"}
            width={"85px"}
            height={"85px"}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
          ></Image>
        </Box>
      </Box>
    </>
  );
}
