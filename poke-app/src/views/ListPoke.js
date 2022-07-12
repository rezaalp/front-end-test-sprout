import { Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PokeItem from "../components/PokeItem";
import axios from "axios";
export default function ListPoke() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getPoke() {
      try {
        const { data } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
        );
        setData(data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getPoke();
  }, []);
  return (
    <>
      <Flex
        background={""}
        width={"390px"}
        minH={"100vh"}
        backgroundSize={"cover"}
        alignItems={"center"}
        direction={"column"}
        justifyContent={"flex-start"}
        bgColor={"#152237"}
      >
        <Text
          color={"white"}
          marginTop={"40px"}
          fontSize={"30px"}
          fontWeight={"bold"}
        >
          Pokedex
        </Text>
        <Flex
          marginTop={"30px"}
          gap={"10px"}
          marginBottom={"15"}
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          justify={"center"}
        >
          {data &&
            data.map((el, index) => {
              return (
                <PokeItem url={el.url} name={el.name} key={el.name}></PokeItem>
              );
            })}
        </Flex>
      </Flex>
    </>
  );
}
