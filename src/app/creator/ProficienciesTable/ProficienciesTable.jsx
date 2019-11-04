import React from "react";
import { Segment, Table } from "semantic-ui-react";

export default function ProficienciesTable(props) {
  return (
    <Segment basic>
      {/* <div style={{ height: '500px', overflowY: 'scroll' }}> */}
      <Table compact="very" celled sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Weapons / Armor Proficiencies</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/* Rows */}
          {/* {Object.keys(props.proficiencies).map((name, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>{props.proficiencies[name]}</Table.Cell>
              </Table.Row>
            );
          })}
          {props.proficiencies.length === 0 && (
            <Table.Row>
              <Table.Cell>
                <i>No proficiencies</i>
              </Table.Cell>
            </Table.Row>
          )} */}
          {/* END Rows */}
        </Table.Body>
      </Table>
      {/* </div> */}
    </Segment>
  );
}
