import React from "react";
import { Segment, Button, Icon, Table, TransitionablePortal } from "semantic-ui-react";
import { connect } from 'react-redux';

import AddTraitFeats from "./AddTraitFeats";

class TraitsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { remainingRows: 0, open: true };
  }

  handleOpen = () => {
    this.setState({ open: true });
    // document.body.style.overflow = "hidden";
  };

  handleClose = () => {
    this.setState({ open: false });
    // document.body.style.overflow = "visible";
  };

  render() {
    return (
      <Segment basic>
        {/* <div style={{ height: '500px', overflowY: 'scroll' }}> */}
        <Table compact="very" celled sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Traits / Feats / Racial Traits</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell width={5}>Name</Table.HeaderCell>
              <Table.HeaderCell width={9}>Description</Table.HeaderCell>
              <Table.HeaderCell width={2}>Type</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {/* Rows */}
            {Object.keys(this.props.racialTraits).map((name, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{this.racialTraits[name].name}</Table.Cell>
                  <Table.Cell>{this.racialTraits[name].desc}</Table.Cell>
                  <Table.Cell textAlign='center'>RT</Table.Cell>
                </Table.Row>
              );
            })}
            {Object.keys(this.props.traits).map((name, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{this.traits[name].name}</Table.Cell>
                  <Table.Cell>{this.traits[name].desc}</Table.Cell>
                  <Table.Cell textAlign='center'>T</Table.Cell>
                </Table.Row>
              );
            })}
            {Object.keys(this.props.feats).map((name, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{this.feats[name].name}</Table.Cell>
                  <Table.Cell>{this.feats[name].desc}</Table.Cell>
                  <Table.Cell textAlign='center'>F</Table.Cell>
                </Table.Row>
              );
            })}
            {Object.keys(this.props.special).map((name, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{this.props.special[name]}</Table.Cell>
                  <Table.Cell>{this.props.special[name]}</Table.Cell>
                  {/* <Table.Cell>{this.props.special[name].desc}</Table.Cell> */}
                  <Table.Cell textAlign='center'>S</Table.Cell>
                </Table.Row>
              );
            })}
            {this.props.traits.length === 0 && this.props.feats.length === 0 && this.props.racialTraits.length === 0 && this.props.special.length === 0 && (
              <Table.Row>
                <Table.Cell colSpan='3'><i>No traits/feats</i></Table.Cell>
              </Table.Row>
            )}
            {/* END Rows */}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <TransitionablePortal
                  transition={{ animation: 'scale', duration: 500 }}
                  closeOnTriggerClick
                  onOpen={this.handleOpen}
                  onClose={this.handleClose}
                  openOnTriggerClick
                  trigger={
                    <Button floated='right' icon labelPosition='left' primary size='small' >
                      <Icon name='user' /> Add Trait/Feat
                    </Button>
                  }
                >
                  <AddTraitFeats />
                </TransitionablePortal>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        {/* </div> */}
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { traits: state.character.traits, feats: state.character.feats, racialTraits: {}/*state.character.race.raceTraits*/, special: state.character.class.stats.special };
}

export default connect(mapStateToProps)(TraitsTable);