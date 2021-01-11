import React, { useState } from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import TitleBar from "./components/TitleBar";
import Philosophy from "./components/Philosophy";
import TeamBuilding from "./components/TeamBuilding";
import About from "./components/About";
import Events from "./components/Events";
import Coaching from "./components/Coaching";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Contact from "./components/Contact";
const Title = "Tina Polzin";
const SubTitle = "Creating Conversation";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#757ce8",
			main: "#3f50b5",
			dark: "#002884",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff7961",
			main: "#f44336",
			dark: "#ba000d",
			contrastText: "#000",
		},
	},
});

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
const windowWidth = window.innerWidth;

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
					(windowWidth as number) > 875 ? (
						<div style={{ flex: 2, paddingTop: "50px" }}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="simple tabs example"
								style={{ minWidth: "100px" }}
							>
								<Tab style={{ minWidth: "100px" }} label="Philosophy" />
								<Tab style={{ minWidth: "100px" }} label="Workshops" />
								<Tab style={{ minWidth: "100px" }} label="Directing" />
								<Tab style={{ minWidth: "100px" }} label="Coaching" />
								<Tab style={{ minWidth: "100px" }} label="About" />
								<Tab style={{ minWidth: "100px" }} label="Contact" />
							</Tabs>
						</div>
					) : (
						<> </>
					)
				}
			/>
			{(windowWidth as number) > 875 ? (
				<>
					<TabPanel value={value} index={0}>
						<Philosophy />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<TeamBuilding />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Events />
					</TabPanel>
					<TabPanel value={value} index={3}>
						<Coaching />
					</TabPanel>
					<TabPanel value={value} index={4}>
						<About />
					</TabPanel>
					<TabPanel value={value} index={5}>
						<Contact />
					</TabPanel>
				</>
			) : (
				<div style={{ margin: "0 12px" }}>
					<Philosophy />

					<TeamBuilding />

					<Events />

					<Coaching />

					<About />

					<Contact />
				</div>
			)}
		</div>
	);
}

export default App;
