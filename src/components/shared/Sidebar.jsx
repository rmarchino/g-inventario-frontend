import { SiBoehringeringelheim } from "react-icons/si";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../lib/consts/Navigations";

import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";
import PropTypes from "prop-types";

const linkClasses =
  "flex items-center gap-2 font-ligth px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-neutral-100">
      <div className="flex items-center gap-2 px-1 py-3">
        <SiBoehringeringelheim fontSize={35} color="orange" />
        <span className="text-neutral-100 text-lg font-bold">
          Corporación Textil
        </span>
      </div>

      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}

        <div
          className={classNames("text-orange-400 cursor-pointer", linkClasses)}
        >
          <span className="flex flex-row gap-0.5">
            <HiOutlineLogout className="text-xl" />
            Cerrar sesión
          </span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

export const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
};

SidebarLink.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
