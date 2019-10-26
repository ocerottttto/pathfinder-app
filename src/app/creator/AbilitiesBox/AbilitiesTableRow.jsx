import React from "react";
import { Form, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { setAbility } from "../ducks/character";

import { calculateAbilityScore, calculateAbilityMod } from "../../shared/Utils"

class AbilitiesTableRow extends React.Component {
    componentDidUpdate(prevPros) {
        let score = calculateAbilityScore(this.props.ability);
        if (score !== prevPros.ability.score)
            this.props.sendChange(this.props.abilityName, {
                ...this.props.ability, score: score, mod: calculateAbilityMod(score)
            });
    }

    handleChange(name, value) {
        if (value !== "")
            this.props.sendChange(this.props.abilityName, {
                ...this.props.ability, [name]: parseInt(value)
            });
    }

    render() {
        const handleChange = event => {
            this.handleChange(event.target.name, event.target.value);
        }

        return (
            <Table.Row textAlign='center'>
                <Table.Cell>{this.props.abilityInfo.text}</Table.Cell>
                <Table.Cell>
                    <Form.Input
                        fluid
                        name="score"
                        value={this.props.ability.score}
                        size="small"
                        readOnly
                    />
                </Table.Cell>
                <Table.Cell>
                    <Form.Input
                        fluid
                        name="mod"
                        value={this.props.ability.mod}
                        size="small"
                        readOnly
                    />
                </Table.Cell>
                <Table.Cell>
                    <Form.Input
                        fluid
                        name="base"
                        type="number"
                        defaultValue={this.props.ability.base}
                        onChange={handleChange}
                        size="small"
                    />
                </Table.Cell>
                <Table.Cell>
                    <Form.Input
                        fluid
                        name="misc"
                        defaultValue={this.props.ability.misc}
                        onChange={handleChange}
                        size="small"
                    />
                </Table.Cell>
            </Table.Row>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendChange: (name, value) => dispatch(setAbility(name, value))
    };
}

export default connect(null, mapDispatchToProps)(AbilitiesTableRow);