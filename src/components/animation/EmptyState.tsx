import React from "react";
import Lottie, { useLottie, useLottieInteractivity } from "lottie-react";
import emptyState from "../../assets/animations/emptyState.json";
function EmptyState() {
  const options = {
    width: 10,
    height: 10,
    autoplay: true,
    animationData: emptyState,
    loop: true,
  };

  const { View } = useLottie(options);
  return <>{View}</>;
}

export default EmptyState;
