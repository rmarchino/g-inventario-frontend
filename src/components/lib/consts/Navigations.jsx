import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

import { FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Productos",
    path: "/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "suppliers",
    label: "Proveedores",
    path: "/suppliers",
    icon: <FaUsers />,
  },
  {
    key: "customers",
    label: "Clientes",
    path: "/customers",
    icon: <FaUsers />,
  },
  {
    key: "entradas",
    label: "Entrada productos",
    path: "/entrada-products",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "salidas",
    label: "Salidas productos",
    path: "/salida-products",
    icon: <FaMoneyCheckDollar />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
