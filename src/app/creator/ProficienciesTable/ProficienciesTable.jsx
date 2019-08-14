import React from "react";
import { Segment, Table } from "semantic-ui-react";
import { connect } from 'react-redux';

class ProficienciesTable extends React.Component {
    render() {
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
                        {Object.keys(this.props.proficiencies).map((name, i) => {
                            return (
                                <Table.Row key={i}>
                                    <Table.Cell>{this.props.proficiencies[name]}</Table.Cell>
                                </Table.Row>
                            );
                        })}
                        {this.props.proficiencies.length === 0 && (
                            <Table.Row>
                                <Table.Cell><i>No proficiencies</i></Table.Cell>
                            </Table.Row>
                        )}
                        {/* END Rows */}
                    </Table.Body>
                </Table>
                {/* </div> */}
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return { proficiencies: state.character.class.proficiencies };
}

export default connect(mapStateToProps)(ProficienciesTable);