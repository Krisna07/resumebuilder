import React from "react";
import { FaPaintBrush } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const Header = () => {
  return (
    <div className=" flex items-center ">
      <div className="flex items-center font-[600] gap-4">
        Resume Builder <FaPaintBrush />
      </div>
      <Tabs className="">
        <TabList className="flex gap-8">
          <Tab>Profile</Tab>
          <Tab>Address</Tab>
          <Tab>History</Tab>
          <Tab>Education</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default Header;
