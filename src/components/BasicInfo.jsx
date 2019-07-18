import React from "react";
import { Segment, Form } from "semantic-ui-react";

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

export class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange = event => {
    this.props.sendChange(event.target.name, event.target.value);
  };

  handleSelectChange = (event, data) => {
    this.props.sendChange(data.name, event.target.textContent);
  };

  render() {
    return (
      <Segment basic>
        <Form.Group>
          <Form.Input
            fluid
            label="Name"
            name="name"
            onBlur={this.handleChange}
            width={3}
          />
          <Form.Input
            fluid
            label="Player"
            name="player"
            onBlur={this.handleChange}
            width={3}
          />
          <Form.Input
            fluid
            label="Campaign"
            name="campaign"
            onBlur={this.handleChange}
            width={3}
          />
          <Form.Select
            fluid
            label="XP Rate"
            name="xpRate"
            onChange={this.handleSelectChange}
            options={xpRates}
            placeholder="Normal"
            width={2}
          />
          <Form.Select
            fluid
            label="Gender"
            name="gender"
            onChange={this.handleSelectChange}
            options={genders}
            width={2}
          />
          <Form.Select
            fluid
            label="Alignment"
            name="alignment"
            onChange={this.handleSelectChange}
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
            onBlur={this.handleChange}
            icon={{ name: "search", circular: true, link: true }}
            width={4}
          />
          <Form.Input
            fluid
            label="Class"
            name="class"
            onBlur={this.handleChange}
            icon={{ name: "search", circular: true, link: true }}
            width={6}
          />
          <Form.Input
            fluid
            label="Level"
            name="lvl"
            onBlur={this.handleChange}
            placeholder="1"
            width={2}
          />
          <Form.Input
            fluid
            label="Current XP"
            name="currentXp"
            onBlur={this.handleChange}
            placeholder="0"
            width={2}
          />
          <Form.Input
            fluid
            label="Next Level XP"
            name="nextLvlXp"
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
            onBlur={this.handleChange}
            placeholder="ft."
            width={2}
          />
          <Form.Input
            fluid
            label="Weight"
            name="weight"
            onBlur={this.handleChange}
            placeholder="lb."
            width={2}
          />
          <Form.Input
            fluid
            label="Size"
            name="size"
            onBlur={this.handleChange}
            readOnly
            width={2}
          />
          <Form.Input
            fluid
            label="Hometown"
            name="hometown"
            onBlur={this.handleChange}
            width={3}
          />
          <Form.Select
            fluid
            label="Deity"
            name="deity"
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
