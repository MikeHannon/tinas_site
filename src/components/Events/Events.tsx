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
import OneOffProduction from "../../static/img/redback.png";

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
							<Avatar aria-label="directing" className={classes.avatar}>
								D
							</Avatar>
						}
						title={<h3>Directing</h3>}
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
								The Japanese director Tadashi Suzuki once stated, ‘International
								cultural exchange is impossible – therefore we must try.’ I
								agree with all my heart. The impossibility of seeing beyond
								one’s own cultural context is a political act in the world and
								has the potential to break down the rigid assumptions
								surrounding us.
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
							- Anne Bogart
						</Typography>
					</CardContent>
				</div>
				<div style={{ flex: 0, justifyContent: "flex-end" }}>
					<CardMedia
						className={classes.media}
						image={OneOffProduction}
						title="The Atlantic Ocean Shore, Iceland"
					></CardMedia>
				</div>
			</div>
			<Divider></Divider>
			<CardContent>
				<br></br>
				<Typography variant="h6" color="textPrimary" component="h6">
					Using performance art to facillitate conversation.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Blood Wedding by Federico Garcia Lorca
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					With grants from 4Culture and Seattle City I brought a bilingual,
					multi-disciplined adaptation of Blood Wedding to underserved Seattle
					parks: bringing theatre free of charge to neighborhoods that don't
					have easy access to it and creating bilingual performing opportunities
					for Latinx artists. I partnered with El Centro de la Raza, Sea Mar and
					Casa Latina; each had a representative at performances to spread word
					of the services they provide. To learn more, here is a more in depth{" "}
					<a href="http://www.seattleweekly.com/arts/a-new-production-company-tells-a-tragic-tale-in-two-tongues/">
						review
					</a>
					.
				</Typography>

				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					The Study (or Reading to Vegetables) by E. M. Lewis
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					While pursuing my MFA at UW, I facilitated a discussion on ethics and
					best practices for the neurology department at Seattle Children’s
					hospital using The Study (or Reading to Vegetables) by E. M. Lewis,
					which was inspired by Stanley Milgram’s "obedience" experiments in the
					1960’s. One of the many themes we explored was when should our morals
					override authority, how mutable or immutable is that line, what is the
					greater good? A short trailer can be found{" "}
					<a href="https://www.youtube.com/watch?v=qi9ZB4uQSjU">here</a>.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Lady from the Sea by Henrik Ibsen
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Seattle Pacific University’s Innovation Grant allowed me to further
					explore how multi-lingual, multi-discipline theatre influences
					conversation. The discussion that followed the performance covered
					ways to navigate mental illness, how to cope with loss, race and
					representation in casting, the effects of hearing one’s language
					onstage, dramaturgical approach to “updating” this play and music’s
					role in creating empathy. We openly involved our whole team with the
					audience. Feel free to view the{" "}
					<a href="https://youtu.be/Ld4l4TpJ5Is"> reading </a> or the{" "}
					<a href="https://youtu.be/f9yZy0oa0D0">talk back</a>.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Run for Your Wife by Ray Cooney
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Not every conversation starter has to be a heady dive into morality.
					Often a good laugh is just as effective. Physical comedy, often based
					around the best of intentions gone awry, has always had a draw for me.
					Our production was inspired by the physical theater in I love Lucy -
					comedy from the head and the heart. (And sometimes laughter is
					profitable). Our rendition of Run for Your Wife was Los Angeles's
					Morgan Wixson Theater’s highest grossing production. A short teaser
					can be seen{" "}
					<a href="https://www.youtube.com/watch?v=qi9ZB4uQSjU">here</a>.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default About;
