import React from "react";
import "./AbilitiesBox.css";
import { Segment, Form, Table } from "semantic-ui-react";

const abilityNames = [
  { key: "str", value: "str", text: "Strength" },
  { key: "dex", value: "dex", text: "Dexterity" },
  { key: "cos", value: "cos", text: "Costitution" },
  { key: "int", value: "int", text: "Intelligence" },
  { key: "wis", value: "wis", text: "Wisdom" },
  { key: "cha", value: "cha", text: "Charisma" }
];

export class AbilitiesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.character.abilities;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    let names = event.target.name.split("-");
    var properties = { ...this.state };
    properties[names[0]][names[1]] = Number.parseInt(event.target.value);
    this.setState(properties);
    this.props.sendChange("abilities", this.state);
  };

  render() {
    //console.log(this.state);
    return (
      <Segment basic>
        <Table definition compact="very" basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={4} />
              <Table.HeaderCell width={3}>Ability Score</Table.HeaderCell>
              <Table.HeaderCell width={3}>Ability Modifier</Table.HeaderCell>
              <Table.HeaderCell width={3}>Bonus</Table.HeaderCell>
              <Table.HeaderCell width={3}>Penalty</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {/* Rows */}
            {Object.keys(this.state).map((name, i) => {
              return (
                <Row
                  key={name}
                  name={abilityNames[i]}
                  abilities={this.state}
                  sendChange={this.handleChange}
                />
              );
            })}
            {/* END Rows */}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.props.sendChange(event);
    
  };

  calculateMod(score) {
    let mod = (score - 10) / 2;
    mod = mod > 0 ? mod | 0 : mod.toFixed(0);
    return isNaN(mod) ? "" : mod;
  }

  render() {
    let value = this.props.name.value;
    return (
      <Table.Row>
        <Table.Cell>{this.props.name.text}</Table.Cell>
        <Table.Cell>
          <Form.Input
            fluid
            name={value + "-score"}
            defaultValue={this.props.abilities[value].score + ""}
            onChange={this.handleChange}
          />
        </Table.Cell>
        <Table.Cell>
          <Form.Input
            fluid
            name={value + "-mod"}
            value={this.calculateMod(this.props.abilities[value].score)}
            onChange={this.handleChange}
            readOnly
          />
        </Table.Cell>
        <Table.Cell>
          <Form.Input
            fluid
            name={value + "-bonus"}
            value={this.props.abilities[value].bonus}
          />
        </Table.Cell>
        <Table.Cell>
          <Form.Input
            fluid
            name={value + "-penalty"}
            value={this.props.abilities[value].penalty}
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}
