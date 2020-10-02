import React, { useState } from "react";

import {
	Card,
	CardHeader,
	CardContent,
	Typography,
	makeStyles,
	Theme,
	createStyles,
	Avatar,
	Divider,
	CardMedia,
} from "@material-ui/core";

import tidePool from "../../static/img/tidePool.jpg";

import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
		},
		media: {
			height: "100%",
			width: "120px",
			// paddingTop: "56.25%", // 16:9
		},
		expand: {
			transform: "rotate(0deg)",
			marginLeft: "auto",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: "rotate(180deg)",
		},
		avatar: {
			backgroundColor: "rgba(201, 0, 35, 0.7)",
		},
	})
);

const About = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<Card style={{ marginTop: "100px" }}>
			<div style={{ display: "flex" }}>
				<div style={{ flex: 1 }}>
					<CardHeader
						avatar={
							<Avatar aria-label="philosophy" className={classes.avatar}>
								P
							</Avatar>
						}
						title={<h3>My Philosophy</h3>}
					/>

					<CardContent style={{ padding: "0px 16px 16px" }}>
						<Typography
							variant="body2"
							color="textSecondary"
							component="h2"
							style={{ fontSize: "12px", marginTop: "0px" }}
							align="center"
						>
							<i>
								All the world’s a stage,
								<br></br> And all the men and women merely players;
								<br></br>
								They have their exits and their entrances;
								<br></br>
								And one man in his time plays many parts.
							</i>
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="h2"
							style={{
								fontSize: "10px",

								marginTop: "10px",
								marginBottom: "0px",
							}}
							align="center"
						>
							- William Shakespeare, As You Like It
						</Typography>
					</CardContent>
				</div>
				<div style={{ flex: 0, justifyContent: "flex-end" }}>
					<CardMedia
						className={classes.media}
						image={tidePool}
						title="Mountain Stream"
					></CardMedia>
				</div>
			</div>

			<Divider></Divider>
			<CardContent>
				<Typography variant="h6" color="textPrimary" component="h6">
					Art is a fundamental tool to facilitate communication.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Faith in our partners allows us to reach otherwise unattainable
					heights.
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Theater is uniquely positioned to promote learning; actively and by
					observation, supporting risk taking in a safe environment. It can
					model the world as we would like it to be and point out flaws in a way
					that encourages us to see them. It’s a tool for self-expression and a
					voice for those otherwise unheard. It can make us laugh, cry, rage
					against, but most importantly bring us together to share a moment in
					time that is forever ours intertwined.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default About;
