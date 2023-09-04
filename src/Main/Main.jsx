import Button from "react-bootstrap/Button";
import Success from "../Start/Success";

import { useDispatch, useSelector } from "react-redux";
import { setShowMenuSelect } from "../services/stateServices";
import MenuSelect from "./MenuSelect";

function Main() {
  const dispatch = useDispatch();
  const showMenuSelect = useSelector((state) => state.showMenuSelect);
  const handleShowMenuSelect = () => {
    dispatch(setShowMenuSelect(true));
  };
  return (
    <>
      <Success />
      {/* {!showMenuSelect && (
        <Button className="pressable-button" onClick={handleShowMenuSelect}>
          START
        </Button>
      )} */}
      {!showMenuSelect && <MenuSelect />}
      {showMenuSelect && <MenuSelect showMenu={showMenuSelect} />}
    </>
  );
}

export default Main;
