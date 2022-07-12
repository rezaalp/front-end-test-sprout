import { Flex, Text } from "@chakra-ui/react";

export default function AboutPoke({ weight, height, abilities, species }) {
  let newAbilities = [];
  abilities.forEach((el) => {
    newAbilities.push(el.ability.name);
  });

  let newab = newAbilities.join(", ");

  let data = [
    { menu: "Species", data: species },
    { menu: "Height", data: height },
    { menu: "Weight", data: weight },
    { menu: "Abilities", data: newab },
  ];

  return (
    <>
      <Flex marginLeft={"10px"} marginTop={"30px"} flexDir={"column"}>
        {data.map((el) => {
          return (
            <div key={el.menu}>
              <Flex
                alignItems={"center"}
                flexDir={"row"}
                justifyContent={"flex-start"}
                gap={"30px"}
              >
                <Text
                  width={"130px"}
                  color={"#B7BABE"}
                  fontWeight={"bold"}
                  fontSize={"20px"}
                  alignSelf={"flex-start"}
                >
                  {el.menu}
                </Text>
                <Text
                  maxW={"130px"}
                  alignSelf={"center"}
                  fontWeight={"bold"}
                  fontSize={"16px"}
                >
                  {el.data}
                </Text>
              </Flex>
            </div>
          );
        })}
      </Flex>
    </>
  );
}
