import React from "react";
import "./SkillsTable.css";
import { Segment, Table } from "semantic-ui-react";
import { connect } from "react-redux";

import SkillsTableRow from "./SkillsTableRow";

class SkillsTable extends React.Component {
  render() {
    return (
      <Segment basic>
        <Table compact="very" celled collapsing style={{ width: "100%" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='9'>Skills</Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell width="2">Name</Table.HeaderCell>
              <Table.HeaderCell width="2">Score</Table.HeaderCell>
              <Table.HeaderCell width="2" className="operator" />
              <Table.HeaderCell className="input" width="2">Ability Mod</Table.HeaderCell>
              <Table.HeaderCell className="operator" />
              <Table.HeaderCell className="input" width="2">Skill Ranks</Table.HeaderCell>
              <Table.HeaderCell className="operator" />
              <Table.HeaderCell className="input" width="2">Misc</Table.HeaderCell>
              <Table.HeaderCell>Class Skill</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* Rows */}
            {Object.keys(this.props.skillsInfo).map((name, i) => {
              return (
                <SkillsTableRow
                  key={i}
                  skillName={name}
                  skill={this.props.skills[name]}
                  skillInfo={this.props.skillsInfo[name]}
                  mod={this.props.abilities[this.props.skillsInfo[name].ability].mod} />
              );
            })}
            {/* END Rows */}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { skillsInfo: state.skillsInfo, skills: state.character.skills, abilities: state.character.abilities, classSkills: state.character.class.classSkills };
}

export default connect(mapStateToProps)(SkillsTable);