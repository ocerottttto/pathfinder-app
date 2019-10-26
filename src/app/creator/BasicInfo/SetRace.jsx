import React from "react";
import { Segment, Header, Button, Table } from "semantic-ui-react";
import { connect } from 'react-redux';
import { setCharacter } from "../ducks/character";

class SetRace extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedRace: {} };
        this.handleChange = () => {
            let skills = this.props.character.skills;
            this.state.selectedRace.classSkills.forEach(skill => {
                this.props.character.skills[skill].classSkill = true;
            });
    
            this.props.handleChange({
                ...this.props.character, class: this.state.selectedRace, skills: skills
            })
        }
    }

    render() {
        return (
            <Segment basic compact>
                <Header>Select Race</Header>
                <div style={{ height: '50vh', overflowY: 'auto' }}>
                    <Table compact="very" celled sortable selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={6}>Name</Table.HeaderCell>
                                <Table.HeaderCell width={10}>Description</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {/* Rows */}
                            {this.props.races !== undefined && Object.keys(this.props.races).map((name, i) => {
                                return (
                                    <Table.Row
                                        key={i}
                                        active={this.state.selectedRace.name === this.props.races[name].name}
                                        onClick={() => this.setState({ ...this.state, selectedRace: this.props.races[name] })}
                                    >
                                        <Table.Cell>{this.props.races[name].name}</Table.Cell>
                                        <Table.Cell>{this.props.races[name].desc}</Table.Cell>
                                    </Table.Row>
                                );
                            })}
                            {/* END Rows */}
                        </Table.Body>
                    </Table>
                </div>
                <Button
                    floated='right'
                    primary size='small'
                    style={{ bottom: '1vh' }}
                    onClick={this.handleChange}
                    disabled={this.state.selectedRace.name === undefined}
                >Select</Button>
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return { character: state.character, races: state.races };
}

function mapDispatchToProps(dispatch) {
    return {
        handleChange: (value) => dispatch(setCharacter(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetRace);