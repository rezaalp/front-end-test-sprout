import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ballBg from "../assets/ballBg.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import AboutPoke from "../components/AboutPoke";
import BaseStatsPoke from "../components/BaseStatsPoke";
import EvolutionPoke from "../components/EvolutionPoke";
import MovesPoke from "../components/MovesPoke";
export default function DetailPoke() {
  const [data, setData] = useState("");
  console.log(data);
  const [select, setSelect] = useState("About");
  let params = useParams();
  let subMenuColor = "#D9DCDD";
  function selectSubMenu(e) {
    console.log(e.target.innerText);
    setSelect(e.target.innerText);
  }

  let menu = ["About", "Base Stats", "Evolution", "Moves"];
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
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${params.name}`
        );
        // console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    getPoke();
  }, []);
  return (
    <>
      {data && (
        <Box
          width={"390px"}
          minH={"100vh"}
          backgroundSize={"cover"}
          direction={"column"}
          bgColor={backgroundPoke}
          position={"relative"}
          overflow={"hidden"}
        >
          <Box marginLeft={"30px"} marginTop={"20px"}>
            <Text
              fontSize={"2xl"}
              fontWeight={"bold"}
              textAlign={"left"}
              color={"#fafafa"}
            >
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            </Text>
            <Text
              fontSize={"2xl"}
              fontWeight={"bold"}
              textAlign={"right"}
              color={"#fafafa"}
              //   marginRight={"200px"}
              pos={"absolute"}
              right={"25px"}
            >
              {data.id < 10 ? `#00${data.id}` : `#0${data.id}`}
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
          </Box>
          <Image
            overflow={"hidden"}
            pos={"absolute"}
            opacity={"0.2"}
            width={"184px"}
            right={"-4px"}
            top={"98px"}
            height={"auto"}
            src={ballBg}
          ></Image>
          <Box
            marginTop={"150px"}
            position={"relative"}
            width={"auto"}
            backgroundColor={"#fafafa"}
            height={"100%"}
            borderTopRadius={"20px"}
            padding={"1px 0"}
          >
            <Image
              pos={"absolute"}
              margin={"auto"}
              marginTop={"-130px"}
              width={"200px"}
              height={"200px"}
              right={"95px"}
              src={data.sprites.other["official-artwork"].front_default}
            ></Image>
            <Box margin={"auto"} marginTop={"100px"}>
              <Flex justifyContent={"space-around"} margin={"auto"}>
                {menu.map((el) => {
                  if (el === select) {
                    return (
                      <Text
                        cursor={"pointer"}
                        onClick={(e) => selectSubMenu(e)}
                        fontWeight={"bold"}
                        fontSize={"18px"}
                        color={"#8C9094"}
                        _hover={{ color: "#8C9094" }}
                        key={el}
                      >
                        {el}
                      </Text>
                    );
                  }
                  return (
                    <Text
                      cursor={"pointer"}
                      onClick={(e) => selectSubMenu(e)}
                      fontWeight={"bold"}
                      fontSize={"18px"}
                      color={subMenuColor}
                      _hover={{ color: "#8C9094" }}
                      key={el}
                    >
                      {el}
                    </Text>
                  );
                })}
              </Flex>
              {select === "About" && (
                <>
                  <AboutPoke
                    species={data.species.name}
                    height={data.height}
                    weight={data.weight}
                    abilities={data.abilities}
                  ></AboutPoke>
                </>
              )}
              {select === "Base Stats" && (
                <>
                  <BaseStatsPoke stats={data.stats}></BaseStatsPoke>
                </>
              )}
              {select === "Evolution" && (
                <>
                  <EvolutionPoke name={data.name}></EvolutionPoke>
                </>
              )}
              {select === "Moves" && (
                <>
                  <MovesPoke moves={data.moves}></MovesPoke>
                </>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
