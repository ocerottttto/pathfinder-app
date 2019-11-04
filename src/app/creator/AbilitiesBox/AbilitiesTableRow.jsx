import React from "react";
import { Form, Table } from "semantic-ui-react";
// import { setAbility } from "../ducks/character";

// import { calculateAbilityScore, calculateAbilityMod } from "../../shared/Utils";

export default function AbilitiesTableRow(props) {
  // componentDidUpdate(prevPros) {
  //     let score = calculateAbilityScore(props.ability);
  //     if (score !== prevPros.ability.score)
  //         props.sendChange(props.abilityName, {
  //             ...props.ability, score: score, mod: calculateAbilityMod(score)
  //         });
  // }

  // handleChange(name, value) {
  //     if (value !== "")
  //         props.sendChange(props.abilityName, {
  //             ...props.ability, [name]: parseInt(value)
  //         });
  // }

  return (
    <Table.Row textAlign="center">
      <Table.Cell>{props.abilityInfo.text}</Table.Cell>
      <Table.Cell>
        <Form.Input
          fluid
          name="score"
          value={props.ability.score}
          size="small"
          readOnly
        />
      </Table.Cell>
      <Table.Cell>
        <Form.Input
          fluid
          name="mod"
          value={props.ability.mod}
          size="small"
          readOnly
        />
      </Table.Cell>
      <Table.Cell>
        <Form.Input
          fluid
          name="base"
          type="number"
          defaultValue={props.ability.base}
          onChange={props.handleChange}
          size="small"
        />
      </Table.Cell>
      <Table.Cell>
        <Form.Input
          fluid
          name="misc"
          defaultValue={props.ability.misc}
          onChange={props.handleChange}
          size="small"
        />
      </Table.Cell>
    </Table.Row>
  );
}
