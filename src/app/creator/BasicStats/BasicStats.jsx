import React from "react"
import "./BasicStats.css";
import { Segment, Grid, Header, Form } from "semantic-ui-react"
import { connect } from "react-redux"
import { setProperty } from "../ducks/character.js"

import SaveThrowsTable from "./SaveThrowsTable"

class BasicStats extends React.Component {
    componentDidUpdate(prevProps) {
        let value = this.calculateInititative(this.props.character.abilities.dex.mod, this.props.character.initiative.misc);
        if (value !== prevProps.character.initiative.value) {
            this.handleChange("initiative-value", value);
        }
    }

    handleChange(name, value) {
        if (value !== "") {
            let property = name.split("-");
            if (property.length > 1)
                this.props.sendChange([property[0]], { ...this.props.character[property[0]], [property[1]]: parseInt(value) });
            else
                this.props.sendChange([property[0]], parseInt(value));
        }
    }

    calculateMaxHp(hd, conMod) {
        let maxHp = parseInt(hd.replace("d", "")) + conMod;
        return maxHp = isNaN(maxHp) ? "" : parseInt(maxHp);
    }

    calculateInititative(mod, misc) {
        let score = mod + misc;
        return score = isNaN(score) ? "" : parseInt(score);
    }

    render() {
        const handleChange = event => {
            this.handleChange(event.target.name, event.target.value);
        }

        let maxHp = this.calculateMaxHp(this.props.character.class.hd, this.props.character.abilities.con.mod);
        if (maxHp !== this.props.character.hp.maxHp)
            this.props.sendChange("hp", { ...this.props.character["hp"], current: parseInt(maxHp), maxHp: parseInt(maxHp) });

        return (
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column width={11}>
                        <Segment>
                            <Form.Group widths={"equal"}>
                                <Form.Input
                                    fluid
                                    label='HP'
                                    name="hp-current"
                                    type="number"
                                    defaultValue={this.props.character.hp.current}
                                    onBlur={handleChange}
                                />
                                <Form.Input
                                    fluid
                                    label='Max HP'
                                    name="hp-max"
                                    value={this.props.character.hp.maxHp}
                                    readOnly
                                />
                                <Form.Input
                                    fluid
                                    label='Non Lethal Dmg'
                                    name="hp-nonLethalDmg"
                                    type="number"
                                    defaultValue={this.props.character.hp.nonLethalDmg}
                                    onBlur={handleChange}
                                />
                                <Form.Input
                                    fluid
                                    label='DR'
                                    name="dr"
                                    type="number"
                                    defaultValue={this.props.character.dr}
                                    onBlur={handleChange}
                                />
                                <Form.Input
                                    fluid
                                    label='Hit Die'
                                    name="hd"
                                    value={this.props.character.class.hd}
                                    readOnly
                                />
                                <Form.Input
                                    fluid
                                    label='Spell Resistance'
                                    name="spellRes"
                                    type="number"
                                    defaultValue={this.props.character.hd}
                                    onBlur={handleChange}
                                />
                            </Form.Group>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Segment>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Initiative'
                                    name="initiative-value"
                                    value={this.props.character.initiative.value}
                                    readOnly
                                />
                                <Header as='h3'>=</Header>
                                <Form.Input
                                    fluid
                                    label='Dex Mod'
                                    name="dex-mod"
                                    value={this.props.character.abilities.dex.mod}
                                    readOnly
                                />
                                <Header as='h3'>+</Header>
                                <Form.Input
                                    fluid
                                    label='Misc Mod'
                                    name="initiative-misc"
                                    type="number"
                                    defaultValue={this.props.character.initiative.misc}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column width={7}>
                        <SaveThrowsTable level={this.props.character.level} />
                    </Grid.Column>
                    <Grid.Column width={9}>
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        );
    }
}

function mapStateToProps(state) {
    return { character: state.character };
}

function mapDispatchToProps(dispatch) {
    return {
        sendChange: (name, value) => dispatch(setProperty(name, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicStats);