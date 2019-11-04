import React from "react";
import "./SkillsTable.css";
import { useDispatch, useSelector } from "react-redux";
import { setProperty } from "../ducks/character.js";
import { Segment, Table } from "semantic-ui-react";
// import { calculateSkillRanks } from "../../shared/Utils"

import SkillsTableRow from "./SkillsTableRow";

export default function SkillsTable(props) {
  const dispatch = useDispatch();
  const skills = useSelector(state => state.character.skills);
  const skillsInfo = useSelector(state => state.skillsInfo);
  const abilities = useSelector(state => state.character.abilities);

  function handleChange(event) {
    dispatch(setProperty(event.target.name, event.target.value));
  }

  return (
    <Segment basic>
      <Table compact="very" celled collapsing style={{ width: "100%" }}>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell colSpan="7">Skills</Table.HeaderCell>
            {/* <Table.HeaderCell colSpan='3' className="input">Skill Ranks: {calculateSkillRanks(props.skillRanksBonus, props.abilities.int.mod, 0)}</Table.HeaderCell> */}
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.HeaderCell width="2">Name</Table.HeaderCell>
            <Table.HeaderCell width="2">Score</Table.HeaderCell>
            <Table.HeaderCell width="2" className="operator" />
            <Table.HeaderCell className="input" width="2">
              Ability Mod
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
        <Table.Body>
          {/* Rows */}
          {Object.keys(skillsInfo).map((name, i) => {
            return (
              <SkillsTableRow
                key={i}
                skillName={name}
                skill={skills[name]}
                skillInfo={skillsInfo[name]}
                mod={abilities[skillsInfo[name].ability].mod}
              />
            );
          })}
          {/* END Rows */}
        </Table.Body>
      </Table>
    </Segment>
  );
}
