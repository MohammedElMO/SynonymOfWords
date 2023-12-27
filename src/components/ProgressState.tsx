import React, { ReactNode } from "react";
import Loading from "./status/Loading";
import Done from "./status/Done";

function ProgressState({ status }: { status: Status }) {
  const mapper: {
    [key in Status]: { component: ReactNode };
  } = {
    loading: {
      component: <Loading />,
    },
    done: {
      component: <Done />,
    },
    start: {
      component: <></>,
    },
  };
  return <div>{mapper[status].component}</div>;
}

export default ProgressState;
