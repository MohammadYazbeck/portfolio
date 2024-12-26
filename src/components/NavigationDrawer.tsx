// @ts-nocheck
import React from "react";
import { Drawer, List, ListItem } from "@material-tailwind/react";

export function DrawerWithNavigation() {
  const [open, setOpen] = React.useState(false);
  const closeDrawer = () => setOpen(false);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <React.Fragment>
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
      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="right"
        className="w-[60%]"
      >
        <List className="h-screen dark:bg-black">
          <ListItem>
            <div
              className="mx-auto mt-5 w-[75%] p-3 text-xl shadow-gray-400 text-shadow dark:text-white"
              onClick={() => {
                scrollTo("about-me");
                closeDrawer();
              }}
            >
              About me
            </div>
          </ListItem>
          <ListItem>
            <div
              className="mx-auto mt-2 w-[75%] p-3 text-xl shadow-gray-400 text-shadow dark:text-white"
              onClick={() => {
                scrollTo("projects");
                closeDrawer();
              }}
            >
              Projects
            </div>
          </ListItem>
          <ListItem>
            <div className="mx-auto mt-2 w-[75%] p-3 text-xl shadow-gray-400 text-shadow dark:text-white">
              More
            </div>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
