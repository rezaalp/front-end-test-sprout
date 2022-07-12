import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ballBg from "../assets/ballBg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PokeItem({ name, url }) {
  let capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
  const [data, setData] = useState("");
  const navigate = useNavigate();
  function navigateDetail() {
    navigate(`/${name}`);
  }
  let backgroundPoke = "";
  if (data) {
    let type = data.types[0].type.name;
    if (type === "grass") {
      backgroundPoke = "#5C9967";
    } else if (type === "fire") {
      backgroundPoke = "#c95858";
    } else if (type === "water") {
      backgroundPoke = "#8FC5D2";
    } else if (type === `bug`) {
      backgroundPoke = "#AC8354";
    } else if (type === "normal") {
      backgroundPoke = "#c98fef";
    }
  }

  useEffect(() => {
    async function getPoke() {
      try {
        const { data } = await axios.get(url);
        console.log(data);
        setData(data);
      } catch (err) {}
    }
    getPoke();
  }, []);
  return (
    <>
      {data && (
        <Box
          cursor={"pointer"}
          onClick={navigateDetail}
          borderRadius={"10px"}
          pos={"relative"}
          overflow={"hidden"}
          w={"170px"}
          h={"130px"}
          bgColor={backgroundPoke}
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
                <Text color={"#fafafa"} fontWeight={"bold"}>
                  {capitalizeName}
                </Text>
                {data.types.map((el, index) => {
                  return (
                    <Box
                      key={index}
                      marginTop={"10px"}
                      borderRadius={"10"}
                      bgColor={"rgba(0, 0, 0, 0.2)"}
                      width={"65px"}
                    >
                      <Text color={"#fafafa"} key={index} textAlign={"center"}>
                        {el.type.name.charAt(0).toUpperCase() +
                          el.type.name.slice(1)}
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
              src={data.sprites.other["official-artwork"].front_default}
            ></Image>
          </Box>
        </Box>
      )}
    </>
  );
}
