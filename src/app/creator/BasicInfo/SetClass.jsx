import React from "react";
import { Segment, Header, Button, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { setCharacter } from "../ducks/character";

import { parseFormula } from "../../shared/Utils";

class SetClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedClass: {} };
    this.handleChange = () => {
      let skills = this.props.character.skills;
      this.state.selectedClass.classSkills.forEach(skill => {
        this.props.character.skills[skill].classSkill = true;
      });

      this.props.handleChange({
        ...this.props.character,
        class: {
          name: this.state.selectedClass.name,
          hd: this.state.selectedClass.hd,
          proficiencies: this.state.selectedClass.proficiencies,
          skillRanksBonus: this.state.selectedClass.skillRanksBonus,
          stats: this.state.selectedClass.stats[0]
        },
        skills: skills,
        money: parseFormula(this.state.selectedClass.startWealth) * 10
      });
    };
  }

  render() {
    return (
      <Segment basic compact>
        <Header>Select Class</Header>
        <div style={{ height: "50vh", overflowY: "auto" }}>
          <Table compact="very" celled sortable selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={6}>Name</Table.HeaderCell>
                <Table.HeaderCell width={10}>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {/* Rows */}
              {this.props.classes &&
                Object.keys(this.props.classes).map((name, i) => {
                  return (
                    <Table.Row
                      key={i}
                      active={
                        this.state.selectedClass.name ===
                        this.props.classes[name].name
                      }
                      onClick={() =>
                        this.setState({
                          ...this.state,
                          selectedClass: this.props.classes[name]
                        })
                      }
                    >
                      <Table.Cell>{this.props.classes[name].name}</Table.Cell>
                      <Table.Cell>{this.props.classes[name].desc}</Table.Cell>
                    </Table.Row>
                  );
                })}
              {/* END Rows */}
            </Table.Body>
          </Table>
        </div>
        <Button
          floated="right"
          primary
          size="small"
          style={{ bottom: "1vh" }}
          onClick={this.handleChange}
          disabled={this.state.selectedClass.name === undefined}
        >
          Select
        </Button>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { character: state.character, classes: state.classes };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: value => dispatch(setCharacter(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetClass);
