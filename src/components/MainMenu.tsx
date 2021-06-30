import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

const menuItems = [
  { label: "Leaderboard", url: "/leaderboard" },
  { label: "Match History", url: "/match-history" },
  { label: "Server Status", url: "/server-status" },
];

function MenuItems({
  setOpenMenu,
}: {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { pathname } = useLocation();

  return (
    <List>
      {menuItems.map(({ label, url }) => (
        <ListItem
          button
          component={Link}
          key={label}
          onClick={() => setOpenMenu(false)}
          style={pathname === url ? { backgroundColor: "#40bfb4" } : undefined}
          to={url}
        >
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
}

type Props = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MainMenu({ openMenu, setOpenMenu }: Props) {
  return (
    <nav aria-label="main menu navigation">
      <Drawer
        anchor="left"
        disablePortal
        onClose={() => setOpenMenu(false)}
        open={openMenu}
        variant="temporary"
      >
        <MenuItems setOpenMenu={setOpenMenu} />
      </Drawer>
    </nav>
  );
}
