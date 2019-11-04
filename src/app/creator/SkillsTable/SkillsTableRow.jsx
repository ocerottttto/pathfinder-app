import React from "react";
import { Form, Table } from "semantic-ui-react";
// import { connect } from "react-redux";
// import { setSkill } from "../ducks/character";

// import { calculateSkillScore } from "../../shared/Utils";

export default function SkillsTableRow(props) {
  // componentDidUpdate(prevPros) {
  //     let score = calculateSkillScore(props.mod, props.skill);
  //     if (score !== prevPros.skill.score)
  //         this.handleChange("score", score);
  // }

  // handleChange(name, value) {
  //     if (value !== "")
  //         props.sendChange(props.skillName, {
  //             ...props.skill, [name]: parseInt(value)
  //         });
  // }

  const handleChange = event => {
    props.handleChange(event.target.name, event.target.value);
  };

  return (
    <Table.Row textAlign="center">
      <Table.Cell>{props.skillInfo.text}</Table.Cell>
      <Table.Cell>
        <Form.Input
          fluid
          name={"score"}
          value={props.skill.score}
          size="small"
          readOnly
        />
      </Table.Cell>
      <Table.Cell className="operator">
        <center>
          <h4>= {props.skillInfo.ability.toUpperCase()}</h4>
        </center>
      </Table.Cell>
      <Table.Cell className="input">
        <Form.Input
          fluid
          name={"mod"}
          value={props.mod}
          size="small"
          readOnly
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
          name={"ranks"}
          type="number"
          defaultValue={props.skill.ranks}
          onChange={handleChange}
          size="small"
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
          name={"misc"}
          type="number"
          defaultValue={props.skill.misc}
          onChange={handleChange}
          size="small"
        />
      </Table.Cell>
      <Table.Cell>
        <Form.Checkbox
          name={"classSkill"}
          checked={props.skill.classSkill}
          readOnly
        />
      </Table.Cell>
    </Table.Row>
  );
}
