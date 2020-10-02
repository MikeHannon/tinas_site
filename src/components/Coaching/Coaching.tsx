import React from "react";

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

import { red } from "@material-ui/core/colors";
import snowyLake from "../../static/img/snowyLake.jpg";

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

	return (
		<Card style={{ marginTop: "100px" }}>
			<div style={{ display: "flex" }}>
				<div style={{ flex: 1 }}>
					<CardHeader
						avatar={
							<Avatar aria-label="coaching" className={classes.avatar}>
								D
							</Avatar>
						}
						title={<h3>Coaching</h3>}
					/>

					<CardContent style={{ padding: "0 16px 16px" }}>
						<Typography
							variant="body2"
							color="textSecondary"
							component="h2"
							style={{ fontSize: "12px" }}
							align="center"
						>
							<i>
								Our responsibility is to captivate you for however long we've
								asked for your attention.
							</i>
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="h2"
							style={{
								fontSize: "10px",

								marginTop: "10px",
								marginBottom: "10px",
							}}
							align="center"
						>
							- Aaron Sorkin
						</Typography>
					</CardContent>
				</div>
				<div style={{ flex: 0, justifyContent: "flex-end" }}>
					<CardMedia
						className={classes.media}
						image={snowyLake}
						title="Snow Lake, Canada"
					></CardMedia>
				</div>
			</div>
			<Divider></Divider>
			<CardContent>
				<br></br>
				<Typography variant="h6" color="textPrimary" component="h6">
					Define your style. Captivate your audience.
				</Typography>
				<br></br>

				<Typography variant="body2" color="textSecondary" component="p">
					Individual, personal direction focused on attaining and retaining your
					audience. How to ground yourself, invite your audience in, and use
					architecture and objects to your advantage. Highly influenced by
					Alexander technique and Shakespeare’s use of breath for emphasis,
					these sessions will help you define your style and create a tool kit
					for relaxed engaging in person and virtual presentations.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default About;
