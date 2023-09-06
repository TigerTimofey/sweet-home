import Success from "../Start/Success";

import { useSelector } from "react-redux";

import MenuSelect from "./MenuSelect";

function Main() {
  const showMenuSelect = useSelector((state) => state.showMenuSelect);

  return (
    <>
      <Success />
      <br /> <br /> <br /> <br /> <br />
      {!showMenuSelect && <MenuSelect />}
      {showMenuSelect && <MenuSelect showMenu={showMenuSelect} />}
    </>
  );
}

export default Main;
