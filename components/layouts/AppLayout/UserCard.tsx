import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { BsFillCaretDownFill } from "react-icons/bs";

const UserCard: React.FC = () => {
  const router = useRouter();
  const { user, isLoading, error } = useUser();

  if (error) {
    return (
      <Menu>
        <div>
          <p>error loding user</p>
        </div>
      </Menu>
    );
  }

  if (isLoading) {
    return (
      <Menu>
        <div>
          <p>loading user</p>
        </div>
      </Menu>
    );
  }

  return (
    <>
      <Menu>
        <MenuButton>
          <div className="mb-auto mt-auto flex">
            <Avatar
              size="sm"
              name={user ? user.name ?? user.email : "user"}
              src={user ? user.picture ?? "" : ""}
              className="m-auto"
            />
            <div className="ml-[10px]">
              <p className="text-left font-Montserrat text-sm font-medium">
                {user ? user.name ?? user.email : "user"}
              </p>
              <p className="text-left font-Montserrat text-sm font-medium text-hyvv-main">
                Pro Member
              </p>
            </div>
            <BsFillCaretDownFill className="mb-auto mt-auto pl-[5px]" />
          </div>
        </MenuButton>
        <MenuList>
          <Link href="/profile" passHref>
            <MenuItem>Profile</MenuItem>
          </Link>
          <Link href="/settings" passHref>
            <MenuItem>Settings</MenuItem>
          </Link>
          <MenuItem>Billing</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => router.push("/api/auth/logout")}>
            Sign out
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default UserCard;
