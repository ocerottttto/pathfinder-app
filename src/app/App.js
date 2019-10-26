import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import PageHeader from "./creator/PageHeader";
import CharacterCreator from "./creator/CharacterCreator";

function App() {
  return (
      <Container>
        <PageHeader />
        <CharacterCreator />
      </Container>
  );
}

export default App;
