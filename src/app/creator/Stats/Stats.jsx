import React, { Suspense, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAbilitiesInfo, setSkillsInfo } from "../ducks/character";
import { Segment, Grid, Dimmer, Loader } from "semantic-ui-react";

export default function Stats(props) {
  const dispatch = useDispatch();

  const [AbilitiesTable] = useState(
    React.lazy(() => {
      return axios.get("http://localhost:3000/abilitiesInfo").then(response => {
        dispatch(setAbilitiesInfo(response.data));
        console.log(response);
        return import("../AbilitiesBox/AbilitiesTable");
      });
    })
  );

  const [TraitsTable] = useState(
    React.lazy(() => import("../TraitsTable/TraitsTable"))
  );

  const [ProficienciesTable] = useState(
    React.lazy(() => import("../ProficienciesTable/ProficienciesTable"))
  );

  const [SkillsTable] = useState(
    React.lazy(() => {
      return axios.get("http://localhost:3000/skillsInfo").then(response => {
        dispatch(setSkillsInfo(response.data));
        console.log(response);
        return import("../SkillsTable/SkillsTable");
      });
    })
  );

  return (
    <Segment basic>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width="7">
            <Suspense
              fallback={
                <Segment>
                  <Dimmer active inverted>
                    <Loader indeterminate content="Loading" inverted />
                  </Dimmer>
                </Segment>
              }
            >
              <AbilitiesTable />
            </Suspense>
            <Suspense
              fallback={
                <Segment>
                  <Dimmer active inverted>
                    <Loader indeterminate content="Loading" inverted />
                  </Dimmer>
                </Segment>
              }
            >
              <TraitsTable />
            </Suspense>
            <Suspense
              fallback={
                <Segment>
                  <Dimmer active inverted>
                    <Loader indeterminate content="Loading" inverted />
                  </Dimmer>
                </Segment>
              }
            >
              <ProficienciesTable />
            </Suspense>
          </Grid.Column>
          <Grid.Column width="9">
            <Suspense
              fallback={
                <Segment>
                  <Dimmer active inverted>
                    <Loader indeterminate content="Loading" inverted />
                  </Dimmer>
                </Segment>
              }
            >
              <SkillsTable />
            </Suspense>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
