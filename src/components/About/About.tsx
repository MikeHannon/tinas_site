import React, { useState } from "react";
import headshot from "../../static/img/headShot.jpg";
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
							<Avatar aria-label="about" className={classes.avatar}>
								A
							</Avatar>
						}
						title={<h3>About</h3>}
					/>

					<CardContent>
						<Typography
							variant="body2"
							color="textSecondary"
							component="h2"
							style={{ fontSize: "12px" }}
							align="center"
						>
							<i>
								We all should know that diversity makes for a rich tapestry,
								<br></br> and we must understand that all the threads of the
								tapestry are equal in value.
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
							- Maya Angelou
						</Typography>
					</CardContent>
				</div>
				<div style={{ flex: 0, justifyContent: "flex-end" }}>
					<CardMedia
						className={classes.media}
						image={headshot}
						title="Tina Polzin"
					></CardMedia>
				</div>
			</div>
			<Divider></Divider>
			<CardContent>
				<br></br>
				<Typography variant="h6" color="textPrimary" component="h6">
					Tina Polzin
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Biography
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Tina Polzin creates multi-disciplinary multi-lingual works of theater
					that spark conversation. A world traveler who has lived on both
					coasts, Europe and Israel, she speaks English well usually, French
					fairly well, Spanish not so well and can find a pint and a restroom in
					several other languages. She has used theater to facilitate conflict
					resolution, team building, language acquisition, self-expression and
					risk taking with school districts, start-ups, corporations, boards and
					foster youth. She coaches individuals looking to strengthen their
					presentation performance. The youngest of six, she is the first in her
					family to complete a higher degree. BA English, Comparative
					Literature: University of California at Irvine. MFA Directing:
					University of Washington School of Drama.
				</Typography>

				<br></br>

				<Typography variant="body1" color="textPrimary" component="p">
					Inspirations
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Jacques Derrida’s philosophy <br></br>
					Upright Citizen’s Brigade’s training
					<br></br>
					Augusto Boal’s Theatre of the Oppressed
					<br></br>Cathy Madden’s coaching in Alexander Technique
					<br></br>
					Brene Breen’s Daring Greatly
					<br></br> Austin Kleon’s Steal Like An Artist
					<br></br>
					Lucille Ball, especially{" "}
					<a href="https://www.youtube.com/watch?v=NkQ58I53mjk">
						Lucy and the Chocolate Factory
					</a>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default About;
