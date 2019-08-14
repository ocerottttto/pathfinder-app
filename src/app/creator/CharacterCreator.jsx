import React from "react";
import { Segment, Grid, Header, Button, Form } from "semantic-ui-react";
import { connect } from 'react-redux'
import { setCharacter, setClasses, setAbilitiesInfo, setSkillsInfo, setSaveThrowsInfo } from './ducks/character';

import BasicInfo from "./BasicInfo/BasicInfo";
import BasicStats from "./BasicStats/BasicStats";
import AbilitiesTable from "./AbilitiesBox/AbilitiesTable";
import SkillsTable from "./SkillsTable/SkillsTable";
import TraitsTable from "./TraitsTable/TraitsTable";
import ProficienciesTable from "./ProficienciesTable/ProficienciesTable";

import { Link } from "react-scroll";
import axios from "axios";

export class CharacterCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characterLoaded: true, classesLoaded: false, abilityInfoLoaded: false, skillsInfoLoaded: false, saveThrowsInfoLoaded: false };
    this.setClasses();
    this.setAbilitiesInfo();
    this.setSkillsInfo();
    this.setSaveThrowsInfo();
  }

  loadCharacter = async () => {
    try {
      axios.get('http://localhost:3000/characters/' + this.state.id).then((promise) => {
        this.props.setCharacter(promise.data);
        this.setState({ ...this.state, characterLoaded: true });
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  setCharacter = async (character) => {
    try {
      axios.put('http://localhost:3000/characters/5', character).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.error(error);
    }
  }

  setClasses = async () => {
    try {
      axios.get('http://localhost:3000/classes').then((promise) => {
        this.props.setClasses(promise.data);
        this.setState({ ...this.state, classesLoaded: true });
      });
    } catch (error) {
      console.error(error);
    }
  }

  setAbilitiesInfo = async () => {
    try {
      axios.get('http://localhost:3000/abilitiesInfo').then((promise) => {
        this.props.setAbilitiesInfo(promise.data);
        this.setState({ ...this.state, abilityInfoLoaded: true });
      });
    } catch (error) {
      console.error(error);
    }
  }

  setSkillsInfo = async () => {
    try {
      axios.get('http://localhost:3000/skillsInfo').then((promise) => {
        this.props.setSkillsInfo(promise.data);
        this.setState({ ...this.state, skillsInfoLoaded: true });
      });
    } catch (error) {
      console.error(error);
    }
  }

  setSaveThrowsInfo = async () => {
    try {
      axios.get('http://localhost:3000/saveThrowsInfo').then((promise) => {
        this.props.setSaveThrowsInfo(promise.data);
        this.setState({ ...this.state, saveThrowsInfoLoaded: true });
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.props.character);
    if (this.state.characterLoaded)
      return (
        <Segment padded="very" attached>
          <Form>
            <Header name="basic-info" as="h3" dividing>
              Basic Informations
            </Header>
            <BasicInfo />

            <Header name="basic-stats" as="h3" dividing>
              Basic Stats
            </Header>
            {this.state.saveThrowsInfoLoaded && (<BasicStats />)}
            {!this.state.saveThrowsInfoLoaded && (<Segment loading />)}

            <Header name="stats" as="h3" dividing>
              Stats
            </Header>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width="7">
                  {this.state.abilityInfoLoaded && (<AbilitiesTable />)}
                  {!this.state.abilityInfoLoaded && (<Segment style={{ width: "410.26px", height: "349.59px", margin: "14px" }} loading />)}
                  <TraitsTable />
                  <ProficienciesTable />
                </Grid.Column>
                <Grid.Column width="9">
                  {this.state.skillsInfoLoaded && (<SkillsTable />)}
                  {!this.state.skillsInfoLoaded && (<Segment style={{ width: "543.4px", height: "1774.19px", margin: "14px" }} loading />)}
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Header name="inventory" as="h3" dividing>
              Inventory
            </Header>
            <Grid>

            </Grid>
          </Form>
          {/* <Button>
            <Link activeClass="active"
              to="basic-stats"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-10}
              duration={500}
              delay={10}
              isDynamic={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
            >
              Scroll to Basic Informations
            </Link>
          </Button> */}
          <Button onClick={() => this.setCharacter(this.props.character)}>Save</Button>
          <Button onClick={() => this.loadCharacter()}>Load</Button>
          <Form.Input
            fluid
            label="ID"
            name="id"
            defaultValue="0"
            onChange={(event) => this.setState({ ...this.state, id: event.target.value })}
          />
        </Segment>
      );
    else
        return null;
  }
}


function mapStateToProps(state) {
  return { character: state.character };
}

function mapDispatchToProps(dispatch) {
  return {
    setCharacter: (name, value) => dispatch(setCharacter(name, value)),
    setClasses: (name, value) => dispatch(setClasses(name, value)),
    setAbilitiesInfo: (name, value) => dispatch(setAbilitiesInfo(name, value)),
    setSkillsInfo: (name, value) => dispatch(setSkillsInfo(name, value)),
    setSaveThrowsInfo: (name, value) => dispatch(setSaveThrowsInfo(name, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreator);