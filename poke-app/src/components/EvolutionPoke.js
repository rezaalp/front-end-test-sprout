import { Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EvolutionPoke({ name }) {
  const [chainUrl, setChainUrl] = useState("");
  const [firstEvo, setFirstEvo] = useState("");
  const [secondEvo, setsecondEvo] = useState("");
  const [thirdEvo, setthirdEvo] = useState("");

  async function getFirst() {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${chainUrl.species.name}`
      );
      setFirstEvo(data.sprites.other["official-artwork"].front_default);
    } catch (err) {}
  }

  async function getSecond() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${chainUrl.evolves_to[0].species.name}`
    );
    setsecondEvo(data.sprites.other["official-artwork"].front_default);
    try {
    } catch (err) {}
  }
  async function getThird() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${chainUrl.evolves_to[0].evolves_to[0].species.name}`
    );
    setthirdEvo(data.sprites.other["official-artwork"].front_default);
    try {
    } catch (err) {}
  }
  if (chainUrl) {
    getFirst();
    if (chainUrl.evolves_to.length > 0) {
      getSecond();
      if (chainUrl.evolves_to[0].evolves_to.length > 0) {
        getThird();
      }
    }
  }

  useEffect(() => {
    let evoUrl;
    async function getSpecies() {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${name}`
        );

        const evoData = await axios.get(data.evolution_chain.url);

        setChainUrl(evoData.data.chain);
      } catch (err) {
        console.log(err);
      }
    }
    getSpecies();
  }, []);
  return (
    <>
      <Flex marginLeft={"10px"} marginTop={"30px"} flexDir={"column"}>
        <Flex alignItems={"center"} gap={"0px"} margin={"auto"} flexDir={"row"}>
          {firstEvo && (
            <>
              <Image width={"80px"} src={firstEvo}></Image>
              {secondEvo && <Text textAlign={"center"}>{"->"}</Text>}
            </>
          )}
          {secondEvo && (
            <>
              <Image width={"80px"} src={secondEvo}></Image>
              <Text textAlign={"center"}>{"->"}</Text>
            </>
          )}
          {thirdEvo && <Image width={"80px"} src={thirdEvo}></Image>}
        </Flex>
      </Flex>
    </>
  );
}
