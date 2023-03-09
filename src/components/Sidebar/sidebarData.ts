import { TbTerminal2, TbBrush } from "react-icons/tb";
import { BiUser, BiCalendarCheck, BiCog } from "react-icons/bi";
import {
  HiOutlinePresentationChartLine,
  HiOutlineChatAlt,
  HiChevronDoubleRight,
} from "react-icons/hi";

export const SidebarData = [
  {
    id: "profile",
    title: "Profile",
    icon: BiUser,
  },

  {
    id: "server",
    title: "Server",
    icon: TbTerminal2,
  },

  {
    id: "progress",
    title: "Progress",
    icon: HiOutlinePresentationChartLine,
  },

  {
    id: "chat",
    title: "Chat",
    icon: HiOutlineChatAlt,
  },

  {
    id: "whiteboard",
    title: "Whiteboard",
    icon: TbBrush,
  },

  {
    id: "todo",
    title: "Todo(s)",
    icon: BiCalendarCheck,
  },

  {
    isSpacer: true,
  },

  {
    id: "setting",
    title: "Settings",
    icon: BiCog,
  },

  {
    title: "Collapse",
    icon: HiChevronDoubleRight,
    isCollapseButton: true,
  },
];
