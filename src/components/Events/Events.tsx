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
							style={{
								fontSize: "12px",
								maxWidth: "600px",
								marginLeft: "auto",
								marginRight: "auto",
							}}
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
					Using theatre to facillitate conversations.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Blood Wedding by Federico Garcia Lorca
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					With grants from 4Culture and Seattle City I brought a bilingual,
					multi-disciplinary adaptation of Blood Wedding to underserved Seattle
					parks: bringing theatre free of charge to neighborhoods that don't
					have easy access to it and creating bilingual performing opportunities
					for Latinx artists. I partnered with El Centro de la Raza, Sea Mar and
					Casa Latina; each had a representative at performances to spread word
					of the services they provide. To learn more, here is Seattle Weekly's{" "}
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
					hospital using The Study, which was inspired by Stanley Milgram’s
					"obedience" experiments in the 1960’s, exploring the mutable or
					immutable line between ethics and authority as well as the definition
					of the greater good. A short trailer can be found{" "}
					<a href="https://www.youtube.com/watch?v=qi9ZB4uQSjU">here</a>.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Lady from the Sea by Henrik Ibsen
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Seattle Pacific University awarded myself and SPU instructor Candace
					Vance their Innovation Grant to explore how multi-lingual and diverse
					representation onstage influences conversation. The discussion that
					followed the performance covered ways to navigate mental illness, how
					to cope with loss, race and representation in casting, the effects of
					hearing one’s language onstage, the dramaturgical approach to
					“updating” this play and music’s role in creating empathy. We openly
					involved our whole team with the audience. Feel free to view the{" "}
					<a href="https://youtu.be/Ld4l4TpJ5Is"> reading </a> or the{" "}
					<a href="https://youtu.be/f9yZy0oa0D0">talk back</a>.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Run for Your Wife by Ray Cooney
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					A good laugh is often the most effective conversation starter to dive
					into heady morality. Physical comedy, based around the best of
					intentions gone awry, has always had a draw for me. Our production was
					inspired by I Love Lucy - comedy from the head and the heart.
					(Laughter is also profitable - our rendition is LA's Morgan Wixson
					Theater’s highest grossing production to date.) A short teaser can be
					seen <a href="https://www.youtube.com/watch?v=qi9ZB4uQSjU">here</a>.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default About;
