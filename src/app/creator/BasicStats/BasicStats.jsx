import React from "react";
import "./BasicStats.css";
import { setProperty, setInitiative } from "../ducks/character.js";
import { useDispatch, useSelector } from "react-redux";
import { Segment, Grid, Header, Form } from "semantic-ui-react";

// import SaveThrowsTable from "./SaveThrowsTable";
// import DmgBox from "./DmgBox";

export default function BasicStats() {
  const dispatch = useDispatch();
  const character = useSelector(state => state.character);

  function handleChange(event) {
    dispatch(setProperty(event.target.name, event.target.value));
  }

  function handleInitiativeChange(event) {
    handleChange(event);
    dispatch(setInitiative());
  }

  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width={11}>
          <Segment>
            <Form.Group widths={"equal"}>
              <Form.Input
                fluid
                label="HP"
                name="hp-current"
                type="number"
                defaultValue={character.hp.current}
                onBlur={handleChange}
              />
              <Form.Input
                fluid
                label="Max HP"
                name="hp-max"
                value={character.hp.maxHp}
                readOnly
              />
              <Form.Input
                fluid
                label="Non Lethal Dmg"
                name="hp-nonLethalDmg"
                type="number"
                defaultValue={character.hp.nonLethalDmg}
                onBlur={handleChange}
              />
              <Form.Input
                fluid
                label="DR"
                name="dr"
                type="number"
                defaultValue={character.dr}
                onBlur={handleChange}
              />
              <Form.Input
                fluid
                label="Hit Die"
                name="hd"
                value={character.class.hd}
                readOnly
              />
              <Form.Input
                fluid
                label="Spell Resistance"
                name="spellRes"
                type="number"
                defaultValue={character.hd}
                onBlur={handleChange}
              />
            </Form.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          <Segment>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Initiative"
                name="initiative-value"
                value={character.initiative.value}
                readOnly
              />
              <Header as="h3">=</Header>
              <Form.Input
                fluid
                label="Dex Mod"
                name="dex-mod"
                value={character.abilities.dex.mod}
                readOnly
              />
              <Header as="h3">+</Header>
              <Form.Input
                fluid
                label="Misc Mod"
                name="initiative-misc"
                type="number"
                defaultValue={character.initiative.misc}
                onChange={handleInitiativeChange}
              />
            </Form.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column width={7}>
          {/* <SaveThrowsTable level={character.level} /> */}
        </Grid.Column>
        <Grid.Column width={9}></Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column width={7}>
          {/* <DmgBox handleChange={handleChange} /> */}
        </Grid.Column>
        <Grid.Column width={9}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
