"use client";

import {
  LuLayoutDashboard,
  LuBell,
  LuCalendar,
  LuUsers,
  LuShield,
} from "react-icons/lu";
import {
  FaLeaf,
  FaSeedling,
  FaTractor,
  FaSun,
  FaDroplet,
} from "react-icons/fa6";
import {
  HiOutlineCodeBracket,
  HiOutlineCommandLine,
  HiOutlineBookOpen,
  HiOutlinePlay,
  HiOutlineAcademicCap,
} from "react-icons/hi2";
import {
  IoFlowerOutline,
  IoCameraOutline,
  IoLocationOutline,
  IoSearchOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { type IconType } from "react-icons";

import type { IconSet } from "@/lib/projects";

/** Five representative glyphs per library, drawn from that library's package. */
export const ICON_SETS: Record<IconSet, IconType[]> = {
  lucide: [LuLayoutDashboard, LuBell, LuCalendar, LuUsers, LuShield],
  fontawesome: [FaLeaf, FaSeedling, FaTractor, FaSun, FaDroplet],
  heroicons: [
    HiOutlineCodeBracket,
    HiOutlineCommandLine,
    HiOutlineBookOpen,
    HiOutlinePlay,
    HiOutlineAcademicCap,
  ],
  ionicons: [
    IoFlowerOutline,
    IoCameraOutline,
    IoLocationOutline,
    IoSearchOutline,
    IoHeartOutline,
  ],
};
