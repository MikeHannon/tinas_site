import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';
import TitleBar from './components/TitleBar';
import About from './components/About';
import TeamBuilding from './components/TeamBuilding';
const Title = 'Tina Polzin';
const SubTitle = 'Creating Conversation';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function App() {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.ChangeEvent<{}>, v: any) => {
    setValue(v as number);
  };
  return (
    <div className="App">
      <TitleBar
        title={Title}
        subtitle={SubTitle}
        renderProps={
          <div style={{ flex: 1, paddingTop: '50px' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Philosophy" />
              <Tab label="Team Building" />
              <Tab label="About" />
            </Tabs>
          </div>
        }
      />
      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TeamBuilding />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default App;
