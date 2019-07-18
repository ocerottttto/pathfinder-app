import React from "react";
import "./App.css";
import { Grid, Header } from "semantic-ui-react";
import { CharacterCreator } from "./components/CharacterCreator";
import PageHeader from "./components/PageHeader";

function App() {
  return (
    <Grid centered>
      <Grid.Column>
        <Header as="h1"> </Header>
        <PageHeader />
        <CharacterCreator />
      </Grid.Column>
    </Grid>
  );
}

export default App;
