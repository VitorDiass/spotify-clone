import React, { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { FaChevronDown, FaExternalLinkAlt, FaUserCircle } from "react-icons/fa";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton,
} from "@chakra-ui/react";

interface props {
  children?: React.ReactNode;
}

const Header = ({ children }: props) => {
  const route = useLocation();
  const history = useNavigate();

  return (
    <header>
      <div className="flex justify-between items-center sticky top-0 z-50 p-4 bg-neutral-900 border-b border-neutral-800 h-20">
        <div className="flex items-center text-spotify-link-subtle gap-x-2">
          <IoChevronBackCircleOutline
            size={35}
            className="cursor-pointer"
            onClick={() => history(-1)}
          />
          <IoChevronForwardCircleOutline
            size={35}
            className="cursor-pointer"
            onClick={() => history(1)}
          />
          {children}
        </div>
        <div className="flex items-center">
          <Menu >
            <MenuButton className="!border-none !bg-spotify-black !rounded-full" as={Button} variant='outline' rightIcon={<FaChevronDown />}>
              <div className="flex items-center gap-x-3 text-sm">
              <FaUserCircle size={18}/> USERNAME
              </div>
            </MenuButton>
            <MenuList className="!bg-spotify-divider-color font-gothamlight border-none">
              <MenuItem className="focus:!bg-spotify-scrollbar-hover flex justify-between">Account <FaExternalLinkAlt/></MenuItem>
              <MenuItem className="focus:!bg-spotify-scrollbar-hover">Profile</MenuItem>
              <MenuItem className="focus:!bg-spotify-scrollbar-hover flex justify-between">Uprade to premium <FaExternalLinkAlt/></MenuItem>
              <MenuItem className="focus:!bg-spotify-scrollbar-hover">Settings</MenuItem>
              <MenuDivider/>
              <MenuItem className="focus:!bg-spotify-scrollbar-hover ">Log out</MenuItem>
            </MenuList>
          </Menu>
          {/*  <button className="flex items-center gap-x-2 py-1 px-2 rounded-full bg-spotify-black">
            <FaUserCircle size={25} /> USER <FaChevronDown />
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
