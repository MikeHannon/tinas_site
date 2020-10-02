import React from "react";
import { Typography, AppBar } from "@material-ui/core";

interface TitleBarProps {
	title: string;
	subtitle: string;
	renderProps: React.ReactElement;
}
const TitleBar = ({ title, subtitle, renderProps }: TitleBarProps) => {
	return (
		<AppBar style={{ backgroundColor: "#970023" }}>
			<div style={{ display: "flex" }}>
				<div style={{ flex: 1 }}>
					<Typography
						style={{
							paddingTop: "10px",
							marginLeft: "2rem",
							fontSize: "36px",
							fontWeight: "bold",
							fontFamily: "Georgia, serif",
							color: "#809090",
						}}
					>
						{title}
					</Typography>

					<Typography
						style={{
							paddingBottom: "10px",
							marginLeft: "2rem",

							fontFamily: "Georgia, serif",
							color: "#908090",
						}}
					>
						{subtitle}
					</Typography>
				</div>
				{renderProps}
			</div>
		</AppBar>
	);
};

export default TitleBar;
