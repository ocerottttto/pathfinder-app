import React from "react";
import "./App.css";
import { Grid, Header } from "semantic-ui-react";
import PageHeader from "./creator/PageHeader";
import CharacterCreator from "./creator/CharacterCreator";

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
