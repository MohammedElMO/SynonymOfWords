import { ReactNode } from "react";
// import DoneToaster from "../assets/animations/toaster/DoneToaster";
import Loading from "./status/Loading";

function ProgressState({
  status,
}: // isClicked,
{
  // isClicked: boolean;
  status: Status;
}) {
  const mapper: {
    [key in Status]: { component: ReactNode };
  } = {
    loading: {
      component: <Loading />,
    },
    done: {
      component: <></>,
    },
    start: {
      component: <></>,
    },
  };
  return <div>{mapper[status].component}</div>;
}

export default ProgressState;
