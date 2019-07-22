import React from "react";
import { Segment, Grid, Header, Form } from "semantic-ui-react";
import { BasicInfo } from "./BasicInfo";
import { AbilitiesBox } from "./AbilitiesBox";
import { SkillsBox } from "./SkillsBox";
import BaseStatsComponent from "./BaseStatsComponent";
import characterModel from "../CharacterModel.json";

import axios from "axios";

export class CharacterCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { character: characterModel };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, value) => {
      var properties = { ...this.state };
      properties[name] = { [name]: value };
      console.log(properties);
      this.setState(properties);
      this.forceUpdate();
  };

  handleSubmit = () => {
    axios
      .get("http://localhost:3000/characters/1")
      .then(response => console.log(response));
  };

  render() {
    console.log(this.state);
    return (
      <Segment padded="very" attached>
        <Form onSubmit={this.handleSubmit}>
          <Header as="h3" dividing>
            Basic Informations
          </Header>
          <BasicInfo
            sendChange={this.handleChange}
            character={this.state.character}
          />
          <Header as="h3" dividing>
            Stats
          </Header>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width="7">
                <AbilitiesBox
                  sendChange={this.handleChange}
                  character={this.state.character}
                />
                <BaseStatsComponent character={this.state.character} />
              </Grid.Column>
              <Grid.Column width="9">
                <SkillsBox
                  sendChange={this.handleChange}
                  skills={this.state.character.skills}
                  abilities={this.state.character.abilities}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Form.Button content="Submit" />
        </Form>
      </Segment>
    );
  }
}
