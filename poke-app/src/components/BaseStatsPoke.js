import { Flex, Text, Progress, Stack, Box } from "@chakra-ui/react";

export default function BaseStatsPoke({ stats }) {
  let newAbilities = [];

  let data = [
    { menu: "HP", data: stats[0].base_stat, color: "#C95858" },
    { menu: "Attack", data: stats[1].base_stat, color: "#7AC397" },
    { menu: "Defense", data: stats[2].base_stat, color: "#C95858" },
    { menu: "Sp. Atk", data: stats[3].base_stat, color: "#7AC397" },
    { menu: "Sp. Def", data: stats[4].base_stat, color: "#7AC397" },
  ];

  return (
    <>
      <Flex marginLeft={"10px"} marginTop={"30px"} flexDir={"column"}>
        {data.map((el) => {
          console.log(el.menu);
          let red = "red";
          let green = "green";
          return (
            <div key={el.menu}>
              <Flex
                alignItems={"center"}
                flexDir={"row"}
                justifyContent={"flex-start"}
                gap={"10px"}
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
                  maxW={"90px"}
                  alignSelf={"center"}
                  fontWeight={"bold"}
                  fontSize={"16px"}
                >
                  {el.data}
                </Text>

                <Box
                  borderRadius={"5px"}
                  bgColor={"grey"}
                  height={"7px"}
                  width={"150px"}
                >
                  <Box
                    borderRadius={"5px"}
                    bgColor={el.color}
                    height={"7px"}
                    width={`${el.data}%`}
                  ></Box>
                </Box>
              </Flex>
            </div>
          );
        })}
      </Flex>
    </>
  );
}
