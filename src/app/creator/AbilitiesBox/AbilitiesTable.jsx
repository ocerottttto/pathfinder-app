import React from "react";
import "./AbilitiesTable.css";
import { Segment, Table } from "semantic-ui-react";
import { connect } from "react-redux";

import AbilitiesTableRow from "./AbilitiesTableRow";

class AbilitiesTable extends React.Component {
  render() {
    return (
      <Segment basic>
        <Table compact="very" celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>Abilities</Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell width={4}>Name</Table.HeaderCell>
              <Table.HeaderCell width={3}>Ability Score</Table.HeaderCell>
              <Table.HeaderCell width={3}>Ability Mod</Table.HeaderCell>
              <Table.HeaderCell width={3}>Base Score</Table.HeaderCell>
              <Table.HeaderCell width={3}>Misc</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {/* Rows */}
            {Object.keys(this.props.abilitiesInfo).map((name, i) => {
              return (
                <AbilitiesTableRow
                  key={i}
                  abilityName={name}
                  ability={this.props.abilities[name]}
                  abilityInfo={this.props.abilitiesInfo[name]} />
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
  return { abilitiesInfo: state.abilitiesInfo, abilities: state.character.abilities };
}

export default connect(mapStateToProps)(AbilitiesTable);
