import { loginWifi, passwordWifi } from "../../services/dataForComponents";
function WiFiComponent() {
  return (
    <div className="text-contact d-flex text-start-special">
      Login: <span className="text-black">{loginWifi}</span> <br />
      Password: <span className="text-black">{passwordWifi}</span>
    </div>
  );
}
export default WiFiComponent;
