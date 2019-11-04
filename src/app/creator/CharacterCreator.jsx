import React, { Suspense } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setCharacter } from "./ducks/character";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";

export default function CharacterCreator() {
  // const dispatch = useDispatch();

  const Content = React.lazy(() => {
    return Promise.all([
      axios.get("http://localhost:3000/characters/" + 1).then(response => {
        // dispatch(setCharacter(response.data));
        console.log(response);
        setTimeout(() => {
          toast({
            title: "Character - " + response.status,
            description: <p>{response.statusText}</p>,
            size: "small"
          });
        }, 600);
        return import("./Content");
      }),
      new Promise(resolve => setTimeout(resolve, 500))
    ]).then(([moduleExports]) => moduleExports);
  });

  return (
    <>
      <SemanticToastContainer />
      <Suspense
        fallback={
          <Segment>
            <Dimmer active inverted>
              <Loader indeterminate content="Loading" inverted />
            </Dimmer>
          </Segment>
        }
      >
        <Content />
      </Suspense>
    </>
  );
}

// setTimeout(() => {
//   toast({
//     type: "warning",
//     icon: "envelope",
//     title: "Warning Toast",
//     description:
//       "This is a Semantic UI toast wich waits 5 seconds before closing",
//     size: "small",
//     animation: "bounce",
//     time: 5000,
//     // onClose: () => alert("you close this toast"),
//     onClick: () => alert("you click on the toast"),
//     onDismiss: () => alert("you have dismissed this toast")
//   });
// }, 5000);
