import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const DoneToaster = ({ isClicked }: { isClicked: boolean }) => {
  const notify = () =>
    toast("Great There are synonyms and antonyms for this word", {
      duration: 3000,
      position: "top-right",

      // Styling
      style: {
        textAlign: "center",
      },

      // Custom Icon
      icon: "👏",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });
  useEffect(() => {
    if (isClicked) notify();
  }, [isClicked]);

  return (
    <div>
      <Toaster />
    </div>
  );
};

export default DoneToaster;
