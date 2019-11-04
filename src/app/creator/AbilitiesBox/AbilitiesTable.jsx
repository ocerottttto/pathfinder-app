import React from "react";
import "./AbilitiesTable.css";
import { useDispatch, useSelector } from "react-redux";
import { setProperty } from "../ducks/character.js";
import { Segment, Table } from "semantic-ui-react";

import AbilitiesTableRow from "./AbilitiesTableRow";

//     let maxHp = calculateMaxHp(
//       character.hp.maxHp,
//       character.class.hd,
//       character.level
//     );
//     let maxHpMod = calculateMaxHpMod(
//       character.level,
//       character.abilities.con.mod
//     );
//     if (
//       character.level !== prevProps.character.level ||
//       character.abilities.con.mod !==
//         prevProps.character.abilities.con.mod
//     )
//       sendChange("hp", {
//         ...character["hp"],
//         current: parseInt(maxHp) + parseInt(maxHpMod),
//         maxHp: parseInt(maxHp),
//         maxHpMod: parseInt(maxHpMod)
//       });
//   }

export default function AbilitiesTable(props) {
  const dispatch = useDispatch();
  const abilitiesInfo = useSelector(state => state.abilitiesInfo);
  const abilities = useSelector(state => state.character.abilities);

  function handleChange(event) {
    dispatch(setProperty(event.target.name, event.target.value));
  }

  return (
    <Segment basic>
      <Table compact="very" celled>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell colSpan="5">Abilities</Table.HeaderCell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.HeaderCell width={4}>Name</Table.HeaderCell>
            <Table.HeaderCell width={3}>Ability Score</Table.HeaderCell>
            <Table.HeaderCell width={3}>Ability Mod</Table.HeaderCell>
            <Table.HeaderCell width={3}>Base Score</Table.HeaderCell>
            <Table.HeaderCell width={3}>Misc</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/* Rows */}
          {Object.keys(abilitiesInfo).map((name, i) => {
            return (
              <AbilitiesTableRow
                key={i}
                abilityName={name}
                abilityInfo={abilitiesInfo[name]}
                ability={abilities[name]}
                handleChange={handleChange}
              />
            );
          })}
          {/* END Rows */}
        </Table.Body>
      </Table>
    </Segment>
  );
}
