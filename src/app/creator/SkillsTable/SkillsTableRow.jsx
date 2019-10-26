import React from "react";
import { Form, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { setSkill } from "../ducks/character";

import { calculateSkillScore } from "../../shared/Utils"

class SkillsTableRow extends React.Component {
    componentDidUpdate(prevPros) {
        let score = calculateSkillScore(this.props.mod, this.props.skill);
        if (score !== prevPros.skill.score)
            this.handleChange("score", score);
    }

    handleChange(name, value) {
        if (value !== "")
            this.props.sendChange(this.props.skillName, {
                ...this.props.skill, [name]: parseInt(value)
            });
    }

    render() {
        const handleChange = event => {
            this.handleChange(event.target.name, event.target.value);
        }

        return (
            <Table.Row textAlign='center' >
                <Table.Cell>{this.props.skillInfo.text}</Table.Cell>
                <Table.Cell>
                    <Form.Input
                        fluid
                        name={"score"}
                        value={this.props.skill.score}
                        size="small"
                        readOnly
                    />
                </Table.Cell>
                <Table.Cell className="operator">
                    <center>
                        <h4>= {this.props.skillInfo.ability.toUpperCase()}</h4>
                    </center>
                </Table.Cell>
                <Table.Cell className="input">
                    <Form.Input
                        fluid
                        name={"mod"}
                        value={this.props.mod}
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
                        defaultValue={this.props.skill.ranks}
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
                        defaultValue={this.props.skill.misc}
                        onChange={handleChange}
                        size="small"
                    />
                </Table.Cell>
                <Table.Cell>
                    <Form.Checkbox name={"classSkill"} checked={this.props.skill.classSkill} readOnly />
                </Table.Cell>
            </Table.Row>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendChange: (name, value) => dispatch(setSkill(name, value))
    }
}

export default connect(null, mapDispatchToProps)(SkillsTableRow);