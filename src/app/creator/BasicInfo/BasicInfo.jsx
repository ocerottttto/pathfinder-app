import React from "react";
import { setProperty } from "../ducks/character.js";
import { useDispatch, useSelector } from "react-redux";
import { Segment, Form, Icon } from "semantic-ui-react";

// import SetRace from "./SetRace";
// import SetClass from "./SetClass";

const xpRates = [
  { key: "f", value: "fast", text: "Fast" },
  { key: "n", value: "normal", text: "Normal" },
  { key: "s", value: "slow", text: "Slow" }
];

const genders = [
  { key: "m", value: "m", text: "Male" },
  { key: "f", value: "f", text: "Female" }
];

const alignments = [
  { key: "lg", value: "lg", text: "Lawful Good" },
  { key: "ng", value: "ng", text: "Neutral Good" },
  { key: "cg", value: "cg", text: "Chaotic Good" },
  { key: "ln", value: "ln", text: "Lawful Neutral" },
  { key: "tn", value: "tn", text: "True Neutral" },
  { key: "cn", value: "cn", text: "Chaotic Neutral" },
  { key: "le", value: "le", text: "Lawful Evil" },
  { key: "ne", value: "ne", text: "Neutral Evil" },
  { key: "ce", value: "ce", text: "Chaotic Evil" }
];

const deities = [{ key: "0", value: "0", text: "Test" }];

export default function BasicInfo(props) {
  // componentDidUpdate(prevProps) {
  //   if (character.race !== prevProps.character.race)
  //     this.setState({ ...this.state, openSetRace: false });
  //   if (character.class !== prevProps.character.class)
  //     this.setState({ ...this.state, openSetCharacter: false });
  // }

  const dispatch = useDispatch();
  const character = useSelector(state => state.character);

  function handleChange(event) {
    dispatch(setProperty(event.target.name, event.target.value));
  }

  return (
    <Segment basic>
      <Form.Group>
        <Form.Input
          fluid
          label="Name"
          name="name"
          defaultValue={character.name}
          onBlur={handleChange}
          width={3}
        />
        <Form.Input
          fluid
          label="Player"
          name="player"
          defaultValue={character.player}
          onBlur={handleChange}
          width={3}
        />
        <Form.Input
          fluid
          label="Campaign"
          name="campaign"
          defaultValue={character.campaign}
          onBlur={handleChange}
          width={3}
        />
        <Form.Select
          fluid
          label="XP Rate"
          name="xpRate"
          defaultValue={character.xpRate}
          onChange={handleChange}
          options={xpRates}
          placeholder="Normal"
          width={2}
        />
        <Form.Select
          fluid
          label="Gender"
          name="gender"
          defaultValue={character.gender}
          onChange={handleChange}
          options={genders}
          width={2}
        />
        <Form.Select
          fluid
          label="Alignment"
          name="alignment"
          defaultValue={character.alignment}
          onChange={handleChange}
          search
          selection
          options={alignments}
          width={3}
        />
      </Form.Group>
      <Form.Group>
        {/*<TransitionablePortal
          transition={{ animation: "scale", duration: 500 }}
          closeOnTriggerClick
          openOnTriggerClick
          trigger={
            <Form.Input
              fluid
              label="Race"
              name="race"
              value={character.race.name}
              icon={
                <Icon
                  name="search"
                  circular
                  link
                  error={
                    character.class.name === "" ? "true" : "false"
                  }
                  onClick={() =>
                    this.setState({ ...this.state, openSetRace: true })
                  }
                />
              }
              width={4}
              readOnly
            />
          }
        >
          <Segment
            style={{
              left: "15%",
              top: "10%",
              right: "15%",
              bottom: "10%",
              position: "fixed",
              zIndex: 1000
            }}
          >
            <SetRace />
          </Segment>
        </TransitionablePortal>
        <TransitionablePortal
          transition={{ animation: "scale", duration: 500 }}
          closeOnTriggerClick
          openOnTriggerClick
          trigger={
            <Form.Input
              fluid
              label="Class"
              name="class"
              value={character.class.name}
              icon={
                <Icon
                  name="search"
                  circular
                  link
                  error={
                    character.class.name === "" ? "true" : "false"
                  }
                  onClick={() =>
                    this.setState({ ...this.state, openSetCharacter: true })
                  }
                />
              }
              width={6}
              readOnly
            />
          }
        >
          <Segment
            style={{
              left: "15%",
              top: "10%",
              right: "15%",
              bottom: "10%",
              position: "fixed",
              zIndex: 1000
            }}
          >
            <SetClass />
          </Segment>
          </TransitionablePortal>*/}
        {/* <Form.Input
          fluid
          label="Level"
          name="level"
          type="number"
          value={character.level}
          icon={
            <Icon
              name="plus"
              disabled={!this.state.canLevelUp}
              bordered
              color={this.state.canLevelUp ? "yellow" : null}
              link
              onClick={() => {
                // this.setState({ ...this.state, canLevelUp: false });
                // this.handleChange(
                //   "level",
                //   parseInt(character.level) + 1
                // );
              }}
            />
          }
          width={2}
          readOnly
        /> */}
        <Form.Input
          fluid
          label="Current XP"
          name="currentXp"
          type="number"
          defaultValue={character.currentXp}
          onBlur={handleChange}
          placeholder={0}
          width={2}
        />
        <Form.Input
          fluid
          label="Next Level XP"
          name="nextLvlXp"
          value={character.nextLvlXp}
          onBlur={handleChange}
          readOnly
          width={2}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          fluid
          label="Age"
          name="age"
          type="number"
          defaultValue={character.age}
          onBlur={handleChange}
          placeholder="years"
          width={2}
        />
        <Form.Input
          fluid
          label="Age Group"
          name="ageGroup"
          value={character.ageGroup}
          onBlur={handleChange}
          readOnly
          width={2}
        />
        <Form.Input
          fluid
          label="Height"
          name="height"
          type="number"
          defaultValue={character.height}
          onBlur={handleChange}
          placeholder="ft."
          width={2}
        />
        <Form.Input
          fluid
          label="Weight"
          name="weight"
          type="number"
          defaultValue={character.weight}
          onBlur={handleChange}
          placeholder="lb."
          width={2}
        />
        <Form.Input
          fluid
          label="Size"
          name="size"
          value={character.size}
          onBlur={handleChange}
          readOnly
          width={2}
        />
        <Form.Input
          fluid
          label="Hometown"
          name="hometown"
          value={character.hometown}
          onBlur={handleChange}
          width={3}
        />
        <Form.Select
          fluid
          label="Deity"
          name="deity"
          value={character.deity}
          onBlur={handleChange}
          search
          selection
          options={deities}
          width={3}
        />
      </Form.Group>
    </Segment>
  );
}
