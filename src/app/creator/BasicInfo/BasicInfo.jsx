import React from "react";
import { Segment, Form, TransitionablePortal } from "semantic-ui-react";
import { connect } from 'react-redux'
import { setProperty } from '../ducks/character.js'

import SetClass from "./SetClass";

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

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openSetCharacter: false };

    this.handleChange = (event, data) => {
      const name = data !== undefined ? data.name : event.target.name;
      const value = data !== undefined ? data.value : event.target.value;
      this.props.sendChange(name, value);
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.character.class !== prevProps.character.class)
      this.setState({ ...this.state, openSetCharacter: false });
  }

  render() {
    return (
      <Segment basic>
        <Form.Group>
          <Form.Input
            fluid
            label="Name"
            name="name"
            defaultValue={this.props.character.name}
            onBlur={this.handleChange}
            width={3}
          />
          <Form.Input
            fluid
            label="Player"
            name="player"
            defaultValue={this.props.character.player}
            onBlur={this.handleChange}
            width={3}
          />
          <Form.Input
            fluid
            label="Campaign"
            name="campaign"
            defaultValue={this.props.character.campaign}
            onBlur={this.handleChange}
            width={3}
          />
          <Form.Select
            fluid
            label="XP Rate"
            name="xpRate"
            defaultValue={this.props.character.xpRate}
            onChange={this.handleChange}
            options={xpRates}
            placeholder="Normal"
            width={2}
          />
          <Form.Select
            fluid
            label="Gender"
            name="gender"
            defaultValue={this.props.character.gender}
            onChange={this.handleChange}
            options={genders}
            width={2}
          />
          <Form.Select
            fluid
            label="Alignment"
            name="alignment"
            defaultValue={this.props.character.alignment}
            onChange={this.handleChange}
            search
            selection
            options={alignments}
            width={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            fluid
            label="Race"
            name="race"
            defaultValue={this.props.character.race}
            onBlur={this.handleChange}
            icon={{ name: "search", circular: true, link: true }}
            width={4}
          />
          <Form.Input
            fluid
            label="Class"
            name="class"
            value={this.props.character.class.name}
            onClick={() => this.setState({ ...this.state, openSetCharacter: true })}
            icon={{ name: "search", circular: true, link: true }}
            width={6}
          />
          <TransitionablePortal
            transition={{ animation: 'scale', duration: 500 }}
            open={this.state.openSetCharacter}
          >
            <SetClass />
          </TransitionablePortal>
          <Form.Input
            fluid
            label="Level"
            name="lvl"
            type='number'
            defaultValue={this.props.character.level}
            onBlur={this.handleChange}
            width={2}
          />
          <Form.Input
            fluid
            label="Current XP"
            name="currentXp"
            type='number'
            defaultValue={this.props.character.currentXp}
            onBlur={this.handleChange}
            placeholder="0"
            width={2}
          />
          <Form.Input
            fluid
            label="Next Level XP"
            name="nextLvlXp"
            value={this.props.character.nextLvlXp}
            onBlur={this.handleChange}
            readOnly
            width={2}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            fluid
            label="Age"
            name="age"
            type='number'
            defaultValue={this.props.character.age}
            onBlur={this.handleChange}
            placeholder="years"
            width={2}
          />
          <Form.Input
            fluid
            label="Age Group"
            name="ageGroup"
            value={this.props.character.ageGroup}
            onBlur={this.handleChange}
            readOnly
            width={2}
          />
          <Form.Input
            fluid
            label="Height"
            name="height"
            type='number'
            defaultValue={this.props.character.height}
            onBlur={this.handleChange}
            placeholder="ft."
            width={2}
          />
          <Form.Input
            fluid
            label="Weight"
            name="weight"
            type='number'
            defaultValue={this.props.character.weight}
            onBlur={this.handleChange}
            placeholder="lb."
            width={2}
          />
          <Form.Input
            fluid
            label="Size"
            name="size"
            value={this.props.character.size}
            onBlur={this.handleChange}
            readOnly
            width={2}
          />
          <Form.Input
            fluid
            label="Hometown"
            name="hometown"
            value={this.props.character.hometown}
            onBlur={this.handleChange}
            width={3}
          />
          <Form.Select
            fluid
            label="Deity"
            name="deity"
            value={this.props.character.deity}
            onBlur={this.handleChange}
            search
            selection
            options={deities}
            width={3}
          />
        </Form.Group>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { character: state.character };
}

function mapDispatchToProps(dispatch) {
  return {
    sendChange: (name, value) => dispatch(setProperty(name, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);
