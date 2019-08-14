import React from "react";
import { Segment, Header, Button, Tab, Table } from "semantic-ui-react";
import { connect } from 'react-redux';
import { setTraits, setFeats } from "../ducks/character";

class AddTraitFeats extends React.Component {
    constructor(props) {
        super(props);
        this.loadingTraits = true;
        this.loadingFeats = true;
    }

    render() {
        if (this.props.traits !== undefined)
            this.loadingTraits = false;
        if (this.props.traits !== undefined)
            this.loadingFeats = false;
        console.log("aa")
        let panes = [
            {
                menuItem: 'Traits', render: () =>
                    <Tab.Pane attached={false} loading={this.loadingTraits}>
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
                                    {this.props.traits !== undefined && Object.keys(this.props.traits).map((name, i) => {
                                        return (
                                            <Table.Row key={i}>
                                                <Table.Cell>{name}</Table.Cell>
                                                <Table.Cell>{this.props.traits[name].desc}</Table.Cell>
                                            </Table.Row>
                                        );
                                    })}
                                    {/* END Rows */}
                                </Table.Body>
                            </Table>
                        </div>
                    </Tab.Pane>
            },
            {
                menuItem: 'Feats', render: () =>
                    <Tab.Pane attached={false} loading={this.loadingFeats}>
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
                                    {this.props.feats !== undefined && Object.keys(this.props.feats).map((name, i) => {
                                        return (
                                            <Table.Row key={i}>
                                                <Table.Cell>{name}</Table.Cell>
                                                <Table.Cell>{this.props.feats[name].desc}</Table.Cell>
                                            </Table.Row>
                                        );
                                    })}
                                    {/* END Rows */}
                                </Table.Body>
                            </Table>
                        </div>
                    </Tab.Pane>
            }
        ];

        return (
            <Segment style={{ left: '15%', top: '15%', right: '15%', bottom: '15%', position: 'fixed', zIndex: 1000 }}>
                <Header>Add Trait / Feat</Header>
                <Tab menu={{ secondary: true }} panes={panes} />
                <Button floated='right' primary size='small' style={{ marginTop: '1vh' }}>Add</Button>
            </Segment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTraits: (name, value) => dispatch(setTraits(name, value)),
        setFeats: (name, value) => dispatch(setFeats(name, value))
    }
}

function mapStateToProps(state) {
    return { traits: state.traits, feats: state.feats };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTraitFeats);