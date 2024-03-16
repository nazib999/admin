import {
  faBars,
  faCartShopping,
  faCodeCompare,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center px-9 py-2 gap-5">
        <Image src="/logo.svg" height={500} width={300} />
        <FontAwesomeIcon icon={faBars} />
        <div className="border-2 flex items-center">
          <input
            type="text"
            placeholder="Shopping for...."
            className="w-[780px] h-5 border-none outline-none p-4"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="bg-red-600 text-white px-4 py-2"
          />
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCodeCompare} />
          <div className="flex flex-col">
            <div className="w-4 h-4 flex items-center justify-center text-white rounded-full bg-red-600">
              <span className="text-[12px]">2</span>
            </div>
            <span className="text-sm font-light">Compare</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faHeart} />
          <div className="flex flex-col">
            <div className="w-4 h-4 flex items-center justify-center text-white rounded-full bg-red-600">
              <span className="text-[12px]">4</span>
            </div>
            <span className="text-sm font-light">Whitelist</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="flex flex-col">
            <div className="w-4 h-4 flex items-center justify-center text-white rounded-full bg-red-600">
              <span className="text-[12px]">0</span>
            </div>
            <span className="text-sm font-light">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
