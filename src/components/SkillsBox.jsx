import React from "react";
import "./SkillsBox.css";
import { Segment, Form, Table } from "semantic-ui-react";

const skillNames = [
  { key: "acr", value: "acrobatics", text: "Acrobatics", ability: "dex" },
  { key: "app", value: "appraise", text: "Appraise", ability: "dex" },
  { key: "cli", value: "climb", text: "Climb", ability: "dex" },
  { key: "cra", value: "craft", text: "Craft", ability: "dex" },
  { key: "dip", value: "diplomacy", text: "Diplomacy", ability: "dex" },
  { key: "dis", value: "disableDevice", text: "Disable Device", ability: "dex" },
  { key: "dsg", value: "disguise", text: "Disguise", ability: "dex" },
  { key: "esc", value: "escapeArtist", text: "Escape Artist", ability: "dex" },
  { key: "fly", value: "fly", text: "Fly", ability: "dex" },
  { key: "han", value: "handleAnimal", text: "Handle Animal", ability: "dex" },
  { key: "hea", value: "heal", text: "Heal", ability: "dex" },
  { key: "int", value: "intimidate", text: "Intimidate", ability: "dex" },
  { key: "kar", value: "knowArcana", text: "Knowledge (Arcana)", ability: "dex" },
  { key: "kdg", value: "knowDungeon", text: "Knowledge (Dungeon)", ability: "dex" },
  { key: "ken", value: "knowEngine", text: "Knowledge (Engineering)", ability: "dex" },
  { key: "kge", value: "knowGeo", text: "Knowledge (Geography)", ability: "dex" },
  { key: "khi", value: "knowHistory", text: "Knowledge (History)", ability: "dex" },
  { key: "klo", value: "knowLocal", text: "Knowledge (Local)", ability: "dex" },
  { key: "kna", value: "knowNature", text: "Knowledge (Nature)", ability: "dex" },
  { key: "kno", value: "knowNobility", text: "Knowledge (Nobility)", ability: "dex" },
  { key: "kpl", value: "knowPlanes", text: "Knowledge (Planes)", ability: "dex" },
  { key: "kre", value: "knowReligion", text: "Knowledge (Religion)", ability: "dex" },
  { key: "lin", value: "linguistics", text: "Linguistics", ability: "dex" },
  { key: "per", value: "perception", text: "Perception", ability: "dex" },
  { key: "prf", value: "perform", text: "Perform", ability: "dex" },
  { key: "prf", value: "profession", text: "Profession", ability: "dex" },
  { key: "rid", value: "ride", text: "Ride", ability: "dex" },
  { key: "sns", value: "senseMotive", text: "Sense Motive", ability: "dex" },
  { key: "slh", value: "sleightHand", text: "Sleight Hand", ability: "dex" },
  { key: "spe", value: "spellcraft", text: "Spellcraft", ability: "dex" },
  { key: "ste", value: "stealth", text: "Stealth", ability: "dex" },
  { key: "srv", value: "survival", text: "Survival", ability: "dex" },
  { key: "swm", value: "swim", text: "Swim", ability: "dex" },
  { key: "use", value: "useMagicDevice", text: "Use Magic Device", ability: "dex" }
];

export class SkillsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: this.props.skills, abilities: this.props.abilities, };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    let names = event.target.name.split("-");
    var properties = { ...this.state.skills };
    properties[names[0]][names[1]] = Number.parseInt(event.target.value);
    this.setState({ skills: properties });
    this.props.sendChange("skills", this.state.skills);
  };

  render() {
    //console.log(this.state);
    return (
      <Segment basic>
      <p>{this.state.abilities.str.mod}</p>
        <Table definition compact="very" basic="very" celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell width="2">Score</Table.HeaderCell>
              <Table.HeaderCell width="2" className="operator" />
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
              <Table.HeaderCell>Class Skill</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
{console.log(this.state.abilities.str.mod)}
          <Table.Body>
          {console.log(this.state.abilities.str.score)}
            {/* Rows */}
            {Object.keys(this.state.skills).map((name, i) => {
              return (
                <Row
                  key={name}
                  name={skillNames[i]}
                  skills={this.state.skills}
                  mod={this.state.abilities[skillNames[i].ability].mod}
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

  calculateScore(mod, ranks, misc, classSkill) {
    let score = mod + ranks + misc + (ranks >= 1 && classSkill ? 3 : 0);
    return isNaN(score) ? "" : score;
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
            value={this.calculateScore(this.props.mod, this.props.skills[value].ranks, this.props.skills[value].misc, this.props.skills[value].classSkill)}
            onChange={this.handleChange}
            readOnly
          />
        </Table.Cell>
        <Table.Cell className="operator">
          <center>
            <h4>= {this.props.name.ability.toUpperCase()}</h4>
          </center>
        </Table.Cell>
        <Table.Cell className="input">
          <Form.Input
            fluid
            name={value + "-mod"}
            value={this.props.mod}
            readOnly />
        </Table.Cell>
        <Table.Cell className="operator">
          <center>
            <h4>+</h4>
          </center>
        </Table.Cell>
        <Table.Cell className="input">
          <Form.Input
            fluid
            name={value + "-ranks"}
            defaultValue={this.props.skills[value].ranks + ""}
            onChange={this.handleChange}
          />
        </Table.Cell>
        <Table.Cell className="operator">
          <center>
            <h4>+</h4>
          </center>
        </Table.Cell>
        <Table.Cell className="input">
          <Form.Input
            fluid
            name={value + "-misc"}
            value={this.props.skills[value].misc}
            onChange={this.handleChange}
            readOnly
          />
        </Table.Cell>
        <Table.Cell>
          <Form.Checkbox checked={this.props.skills[value].classSkill} />
        </Table.Cell>
      </Table.Row>
    );
  }
}
