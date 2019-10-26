import React, { Suspense } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Segment, Grid, Dimmer, Loader } from "semantic-ui-react";

import { setAbilitiesInfo } from "../ducks/character";

export default function Stats(props) {
  const dispatch = useDispatch();

  const AbilitiesTable = React.lazy(() => {
    return axios.get("http://localhost:3000/abilitiesInfo").then(response => {
      dispatch(setAbilitiesInfo(response.data));
      console.log(response);
      return import("../AbilitiesBox/AbilitiesTable");
    });
  });

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
            {/* <TraitsTable /> */}
            {/* <ProficienciesTable /> */}
          </Grid.Column>
          <Grid.Column width="9">{/* <SkillsTable /> */}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
