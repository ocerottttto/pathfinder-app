import React from "react";
import { useSelector } from "react-redux";
import { Segment, Form, Header, Grid } from "semantic-ui-react";
// import { Link } from "react-scroll";

const BasicInfo = React.lazy(() => import("./BasicInfo/BasicInfo"));
const BasicStats = React.lazy(() => import("./BasicStats/BasicStats"));
const Stats = React.lazy(() => import("./Stats/Stats"));

export default function Content() {
  console.log(useSelector(state => state));

  return (
    <Segment>
      <Form>
        <Header name="basic-info" as="h3" dividing>
          Basic Informations
        </Header>
        <BasicInfo />
        <Header name="basic-stats" as="h3" dividing>
          Basic Stats
        </Header>
        <BasicStats />
        <Header name="stats" as="h3" dividing>
          Stats
        </Header>
        <Stats />
        <Header name="inventory" as="h3" dividing>
          Inventory
        </Header>
        <Grid></Grid>
        {/* <Button>
          <Link
            activeClass="active"
            to="basic-stats"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={500}
            delay={10}
            isDynamic={true}
            // onSetActive={handleSetActive}
            // onSetInactive={handleSetInactive}
            ignoreCancelEvents={false}
          >
            Scroll to Basic Stats
          </Link>
        </Button> */}
        <Segment>
          <Grid.Row>
            {/* <Button onClick={() => this.setCharacter(this.props.character)}>
              Save
            </Button>
            <Button onClick={() => this.loadCharacter()}>Load</Button>
            <Input
              fluid
              label="ID"
              name="id"
              width="3"
              defaultValue="0"
              onChange={event =>
                this.setState({ ...this.state, id: event.target.value })
              }
            /> */}
          </Grid.Row>
        </Segment>
      </Form>
    </Segment>
  );
}
