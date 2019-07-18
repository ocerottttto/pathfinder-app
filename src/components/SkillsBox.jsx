import React from "react";
import "./SkillsBox.css";
import { Segment, Form, Table } from "semantic-ui-react";

const skillNames = [
  { key: "acr", value: "acrobatics", text: "Acrobatics" },
  { key: "app", value: "appraise", text: "Appraise" },
  { key: "cli", value: "climb", text: "Climb" },
  { key: "cra", value: "craft", text: "Craft" },
  { key: "dip", value: "diplomacy", text: "Diplomacy" },
  { key: "dis", value: "disableDevice", text: "Disable Device" },
  { key: "dsg", value: "disguise", text: "Disguise" },
  { key: "esc", value: "escapeArtist", text: "Escape Artist" },
  { key: "fly", value: "fly", text: "Fly" },
  { key: "han", value: "handleAnimal", text: "Handle Animal" },
  { key: "hea", value: "heal", text: "Heal" },
  { key: "int", value: "intimidate", text: "Intimidate" },
  { key: "kar", value: "knowArcana", text: "Knowledge (Arcana)" },
  { key: "kdg", value: "knowDungeon", text: "Knowledge (Dungeon)" },
  { key: "ken", value: "knowEngine", text: "Knowledge (Engineering)" },
  { key: "kge", value: "knowGeo", text: "Knowledge (Geography)" },
  { key: "khi", value: "knowHistory", text: "Knowledge (History)" },
  { key: "klo", value: "knowLocal", text: "Knowledge (Local)" },
  { key: "kna", value: "knowNature", text: "Knowledge (Nature)" },
  { key: "kno", value: "knowNobility", text: "Knowledge (Nobility)" },
  { key: "kpl", value: "knowPlanes", text: "Knowledge (Planes)" },
  { key: "kre", value: "knowReligion", text: "Knowledge (Religion)" },
  { key: "lin", value: "linguistics", text: "Linguistics" },
  { key: "per", value: "perception", text: "Perception" },
  { key: "prf", value: "perform", text: "Perform" },
  { key: "prf", value: "profession", text: "Profession" },
  { key: "rid", value: "ride", text: "Ride" },
  { key: "sns", value: "senseMotive", text: "Sense Motive" },
  { key: "slh", value: "sleightHand", text: "Sleight Hand" },
  { key: "spe", value: "spellcraft", text: "Spellcraft" },
  { key: "ste", value: "stealth", text: "Stealth" },
  { key: "srv", value: "survival", text: "Survival" },
  { key: "swm", value: "swim", text: "Swim" },
  { key: "use", value: "useMagicDevice", text: "Use Magic Device" }
];

export class SkillsBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.props.sendChange(event.target.name, event.target.data);
  };

  render() {
    return (
      <Segment basic>
        <Table definition compact basic="very" celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell width="2">Score</Table.HeaderCell>
              <Table.HeaderCell className="operator" />
              <Table.HeaderCell className="input" width="2">
                Ability Modifier
              </Table.HeaderCell>
              <Table.HeaderCell className="operator" />
              <Table.HeaderCell className="input" width="2">
                Skill Ranks
              </Table.HeaderCell>
              <Table.HeaderCell className="operator" />
              <Table.HeaderCell className="input" width="2">
                Misc
              </Table.HeaderCell>
              <Table.HeaderCell width="2">Class Skill</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {/* Rows */}
            {Object.keys(this.state).map((name, i) => {
              return (
                <Row
                  key={name}
                  name={skillNames[i]}
                  skills={this.state}
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

  calculateScore(score) {
    let mod = (score - 10) / 2;
    return mod > 0 ? mod | 0 : mod.toFixed(0);
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
            value={this.calculateMod(this.props.skills[value].score)}
            onChange={this.handleChange}
            readOnly
          />
        </Table.Cell>
        <Table.Cell className="operator">
          <center>
            <h4>= DEX</h4>
          </center>
        </Table.Cell>
        <Table.Cell className="input">
          <Form.Input
            fluid
            name={value + "-dex-mod"}
            value={this.props.skills[value]}
            readOnly
          />
        </Table.Cell>
        <Table.Cell className="operator">
          <center>
            <h4>+</h4>
          </center>
        </Table.Cell>
        <Table.Cell className="input">
          <Form.Input fluid readOnly />
        </Table.Cell>
        <Table.Cell className="operator">
          <center>
            <h4>+</h4>
          </center>
        </Table.Cell>
        <Table.Cell className="input">
          <Form.Input fluid readOnly />
        </Table.Cell>
        <Table.Cell />
      </Table.Row>
    );
  }
}
