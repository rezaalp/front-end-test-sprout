import logo from "./logo.svg";
import "./App.css";
import ListPoke from "./views/ListPoke";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Flex justifyContent={"center"}>
        <ListPoke></ListPoke>
      </Flex>
    </div>
  );
}

export default App;
