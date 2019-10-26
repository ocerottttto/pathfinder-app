import React from "react";
import { Segment, Form, Popup } from "semantic-ui-react";
import { connect } from "react-redux";
import "./DmgBox.css";

class DmgBox extends React.Component {
  render() {
    return (
      <Segment>
        <Form.Group>
          <Form.Input
            className="input"
            fluid
            label="Melee AB"
            name="melee-ab"
            value={0}
            size="small"
            width="3"
            readOnly
          />
          <Form.Input className="operator" width="1">
            <center>
              <h4>=</h4>
            </center>
          </Form.Input>
          <Form.Input
            className="input"
            fluid
            label="BAB"
            name="bab"
            value={0}
            size="small"
            width="3"
            readOnly
          />
          <Form.Input className="operator" width="1">
            <center>
              <h4>+</h4>
            </center>
          </Form.Input>
          <Form.Input
            className="input"
            fluid
            label="Strenght Mod"
            name="mod"
            value={0}
            size="small"
            readOnly
          />
          <Form.Input className="operator" width="1">
            <center>
              <h4>+</h4>
            </center>
          </Form.Input>
          <Form.Input
            className="input"
            fluid
            label="Misc"
            name="misc"
            value={0}
            size="small"
            width="3"
            readOnly
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            className="input"
            fluid
            label="CMB"
            name="melee-ab"
            value={0}
            size="small"
            width="3"
            readOnly
          />
          <Form.Input className="operator" width="1">
            <center>
              <h4>=</h4>
            </center>
          </Form.Input>
          <Form.Input
            className="input"
            fluid
            label="BAB"
            name="bab"
            value={0}
            size="small"
            width="3"
            readOnly
          />
          <Form.Input className="operator" width="1">
            <center>
              <h4>+</h4>
            </center>
          </Form.Input>
          <Form.Input
            className="input"
            fluid
            label="Strenght Mod"
            name="mod"
            value={0}
            size="small"
            readOnly
          />
          <Form.Input className="operator" width="1">
            <center>
              <h4>+</h4>
            </center>
          </Form.Input>
          <Popup
            trigger={
              <Form.Input
                className="input"
                fluid
                label="Misc"
                name="misc"
                value={0}
                size="small"
                width="3"
                readOnly
              />
            }
            content="I am positioned to the bottom center"
            position="bottom center"
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            className="input"
            fluid
            label="Ranged AB"
            name="melee-ab"
            value={0}
            size="small"
            readOnly
          />
          <Form.Input className="operator" width="1">
            <center>
              <h4>=</h4>
            </center>
          </Form.Input>
          <Form.Input
            className="input"
            fluid
            label="BAB"
            name="bab"
            value={0}
            size="small"
            width="3"
            readOnly
          />
          <Form.Input className="operator" width="1">
            <center>
              <h4>+</h4>
            </center>
          </Form.Input>
          <Form.Input
            className="input"
            fluid
            label="Dexterity Mod"
            name="mod"
            value={0}
            size="small"
            readOnly
          />
          <Form.Input className="operator" width="1">
            <center>
              <h4>+</h4>
            </center>
          </Form.Input>
          <Form.Input
            className="input"
            fluid
            label="Misc"
            name="misc"
            value={0}
            size="small"
            width="3"
            readOnly
          />
        </Form.Group>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { character: state.character };
}

export default connect(mapStateToProps)(DmgBox);
