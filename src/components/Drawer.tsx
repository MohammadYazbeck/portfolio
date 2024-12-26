import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const DrawerList = (
    <Box
      sx={{ width: 220, borderLeft: 1 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List className="h-screen dark:bg-black">
        <ListItem disablePadding>
          <div
            className="mx-auto mt-5 w-[75%] p-3 text-xl shadow-gray-400 text-shadow dark:text-white"
            onClick={() => scrollTo("about-me")}
          >
            About me
          </div>
        </ListItem>
        <ListItem disablePadding>
          <div
            className="mx-auto mt-2 w-[75%] p-3 text-xl shadow-gray-400 text-shadow dark:text-white"
            onClick={() => scrollTo("projects")}
          >
            Projects
          </div>
        </ListItem>
        <ListItem disablePadding>
          <div className="mx-auto mt-2 w-[75%] p-3 text-xl shadow-gray-400 text-shadow dark:text-white">
            More
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full text-black sm:hidden dark:text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
        onClick={toggleDrawer(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
