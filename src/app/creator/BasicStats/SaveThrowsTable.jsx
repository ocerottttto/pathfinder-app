import React from "react";
import { Form, Table } from "semantic-ui-react";
import { connect } from 'react-redux';
import { setProperty } from "../ducks/character.js"

class SaveThrowsTable extends React.Component {
    handleChange(name, value) {
        if (value !== "") {
            this.props.sendChange("saveThrows", {
                ...this.props.saveThrows, [name]: {
                    ...this.props.saveThrows[name], value: parseInt(value)
                }
            });
        }
    }

    calculateTotal(baseSave, classBonus, abilityMod, magicMod, misc) {
        let value = baseSave + classBonus + abilityMod + magicMod + misc;
        return isNaN(value) ? 0 : parseInt(value);
    }

    render() {
        return (
            <Table compact="very" celled collapsing style={{ width: "100%" }}>
                <Table.Header>
                    <Table.Row textAlign='center'>
                        <Table.HeaderCell width="3">Saving Throws</Table.HeaderCell>
                        <Table.HeaderCell width="3">Total</Table.HeaderCell>
                        <Table.HeaderCell className="operator" />
                        <Table.HeaderCell className="input" width="3">Base Save</Table.HeaderCell>
                        <Table.HeaderCell className="operator" />
                        <Table.HeaderCell className="input" width="3">Ability Mod</Table.HeaderCell>
                        <Table.HeaderCell className="operator" />
                        <Table.HeaderCell className="input" width="3">Misc</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {/* Rows */}
                    {Object.keys(this.props.saveThrows).map((name, i) => {
                        let saveThrow = this.props.saveThrows[name];
                        let saveThrowInfo = this.props.saveThrowsInfo[name];
                        let baseSave = this.props.classStats[this.props.level - 1].baseSave[name];
                        let mod = this.props.abilities[saveThrowInfo.ability].mod;

                        let total = this.calculateTotal(baseSave, 0, mod, 0, saveThrow.misc);
                        if (total !== saveThrow.value) {
                            this.handleChange(name, parseInt(total));
                        }

                        const handleChange = event => {
                            let property = event.target.name.split("-");
                            if (event.target.value !== "") {
                                this.props.sendChange("saveThrows", {
                                    ...this.props.saveThrows, [property[0]]: {
                                        ...this.props.saveThrows[property[0]], misc: parseInt(event.target.value)
                                    }
                                });
                            }
                        }

                        return (
                            <Table.Row key={i} textAlign='center'>
                                <Table.Cell>{saveThrowInfo.text + " (" + saveThrowInfo.ability + ")"}</Table.Cell>
                                <Table.Cell>
                                    <Form.Input
                                        fluid
                                        name={name + "-value"}
                                        value={saveThrow.value}
                                        readOnly
                                    />
                                </Table.Cell>
                                <Table.Cell className="operator">
                                    <center>
                                        <h4>=</h4>
                                    </center>
                                </Table.Cell>
                                <Table.Cell className="input tab">
                                    <Form.Input
                                        fluid
                                        name={name + "-baseSave"}
                                        value={baseSave}
                                        readOnly
                                    />
                                </Table.Cell>
                                <Table.Cell className="operator">
                                    <center>
                                        <h4>+</h4>
                                    </center>
                                </Table.Cell>
                                <Table.Cell className="input tab">
                                    <Form.Input
                                        fluid
                                        name={name + "-abilityMod"}
                                        value={mod}
                                        readOnly
                                    />
                                </Table.Cell>
                                <Table.Cell className="operator">
                                    <center>
                                        <h4>+</h4>
                                    </center>
                                </Table.Cell>
                                <Table.Cell className="input tab">
                                    <Form.Input
                                        fluid
                                        name={name + "-misc"}
                                        type="number"
                                        defaultValue={saveThrow.misc}
                                        onChange={handleChange}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        );
    }
}

function mapStateToProps(state) {
    return {
        saveThrows: state.character.saveThrows,
        saveThrowsInfo: state.saveThrowsInfo,
        classStats: state.character.class.stats,
        abilities: state.character.abilities
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendChange: (name, value) => dispatch(setProperty(name, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveThrowsTable);