import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function LabTabs(props) {
  const { value, tabs, tabPanels, onChange } = props;

  return (
    <Box sx={{ width: "100%", typography: "body1", marginTop: "20px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={onChange}>
            {tabs &&
              tabs.map((item) => (
                <Tab label={item.name} value={item.id} key={item.id} />
              ))}
          </TabList>
        </Box>
        {tabPanels &&
          tabPanels.map((item) => (
            <TabPanel value={item.id} key={item.id}>
              {item.name}
            </TabPanel>
          ))}
      </TabContext>
    </Box>
  );
}
