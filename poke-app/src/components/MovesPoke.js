import { Flex, Text } from "@chakra-ui/react";

export default function MovesPoke({ moves }) {
  let newMoves = moves.slice(0, 6);
  console.log(newMoves);
  return (
    <>
      <Flex marginLeft={"10px"} marginTop={"30px"} flexDir={"column"}>
        {newMoves.map((el, index) => {
          return (
            <div key={index}>
              <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"}>
                {el.move.name}
              </Text>
            </div>
          );
        })}
      </Flex>
    </>
  );
}
