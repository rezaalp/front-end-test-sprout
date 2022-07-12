import logo from "./logo.svg";
import "./App.css";
import ListPoke from "./views/ListPoke";
import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import DetailPoke from "./views/DetailPoke";
function App() {
  return (
    <div>
      <Flex justifyContent={"center"}>
        <Routes>
          <Route path="/" element={<ListPoke />}></Route>
          <Route path="/:name" element={<DetailPoke></DetailPoke>}></Route>
        </Routes>
      </Flex>
    </div>
  );
}

export default App;
