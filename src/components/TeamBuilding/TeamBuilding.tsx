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

import mountainStream from "../../static/img/mountainStream.jpg";

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

const TeamBuilding = (): React.ReactElement => {
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
							<Avatar aria-label="Workshops" className={classes.avatar}>
								W
							</Avatar>
						}
						title={<h3>Workshops</h3>}
					/>

					<CardContent>
						<Typography
							variant="body2"
							color="textSecondary"
							component="h2"
							style={{ fontSize: "12px" }}
							align="center"
						>
							<i>Suit the action to the word, the word to the action.</i>
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
							- William Shakespeare, Hamlet
						</Typography>
					</CardContent>
				</div>
				<div style={{ flex: 0, justifyContent: "flex-end" }}>
					<CardMedia
						className={classes.media}
						image={mountainStream}
						title="Mountain Stream"
					></CardMedia>
				</div>
			</div>
			<Divider></Divider>
			<CardContent>
				<Typography variant="h6" color="textPrimary" component="h6">
					Workshops for groups to come together through laughter and risk
					taking.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					What's Past is Prologue - William Shakespeare
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					The philosopher Jaques Derrida remarked that "there is no
					out-of-context" <i>(il n'y a pas de hors-texte)</i> or everything in
					context. We are all defined by our histories; they shape who we are,
					how we see the world and how we interact. If we wish to truly
					communicate, we must incorporate those histories into our awareness –
					take stock of our own preconceptions, how they influence us, as well
					as realizing that the histories of others may shape how they receive
					the information we impart.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Success is a journey, not a destination. - Arthur Ashe
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Masterpieces begin as scribbles. Pursuing answers leads to stronger
					results than focusing on the one answer. Distilling down to the
					essence inspires a team whereas dictating the outcome restrains
					creativity. Ownership leads to productivity.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					The human race has one really effective weapon, and that is laughter.
					- Mark Twain
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Lucile Ball and Desi Arnaz were studio heads representing diversity
					and tackling difficult subjects before the word pregnant was allowed
					to be spoken on camera. They broke barriers by making us laugh at
					themselves and in turn ourselves.
				</Typography>
				<br></br>
				<Typography variant="body1" color="textPrimary" component="p">
					Real change, enduring change, happens one step at a time. - Ruth Bader
					Ginsburg
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Break bias with action; although a bias cannot literally be broken, by
					breaking out of comfort zones we can begin to set new patterns and to
					understand the difficulties other may be facing in doing so. Through
					improvisation and physical theater exercises, we will challenge
					ourselves and encourage our team members to be present together in
					this moment, to go a little further than we thought we could.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default TeamBuilding;
