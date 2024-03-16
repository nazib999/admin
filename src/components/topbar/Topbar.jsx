import { faChevronDown, faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2">
      <div className="flex items-center gap-5">
        <div className="flex gap-2 items-center">
            
          <FontAwesomeIcon icon={faFlagUsa} />
          <span className="font-light">ENGLISH</span>
          <FontAwesomeIcon
            className="text-[14px]"
            icon={faChevronDown}
            style={{ color: "red" }}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-light">U.S Doller $</span>
          <FontAwesomeIcon
            className="text-[14px]"
            icon={faChevronDown}
            style={{ color: "red" }}
          />
        </div>
      </div>
      <div>
        <button className="font-light">My Panel</button>
        <button className="ml-5 font-light">Logout</button>
      </div>
    </div>
  );
};

export default Topbar;
