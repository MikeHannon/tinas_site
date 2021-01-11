import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import "../App.css";
init("user_ONO9V2RdPCRwcuPJx1Djn");

const Contact = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const [successMessage, setSuccessMessage] = useState<string | undefined>();
	const onSubmit = async (data: any) => {
		console.log(errors);
		await sendForm("default_service", "template_l6oww2c", "#contact-form");
		// ).catch(() => {
		// 	setSuccessMessage(
		// 		"Sorry, something went wrong: please reload the form and try again."
		// 	);
		// });
		setSuccessMessage(
			"Successfully Sent.  Thank you!  I will contact you soon."
		);
	};
	const message = watch("message") || "";
	const messageCharsLeft = 1500 - message.length;
	return (
		<>
			{successMessage && <p>{successMessage}</p>}
			{!successMessage && (
				<div className="contact">
					<h1>Contact Me</h1>
					<form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
						{errors.user_name && errors.user_name.type === "required" && (
							<div role="alert">
								Name is required
								<br />
							</div>
						)}
						{errors.user_name && errors.user_name.max_length === "required" && (
							<div role="alert">
								Name is required
								<br />
							</div>
						)}
						<input
							type="text"
							name="user_name"
							placeholder="Name"
							aria-invalid={errors.user_name ? "true" : "false"}
							ref={register({
								required: true,
								maxLength: {
									value: 50,
									message: "Please use a name shorter than 50 characters.",
								},
							})}
						/>
						<br />
						{errors.user_email && errors.user_email.type === "required" && (
							<div role="alert">
								Email is required
								<br />
							</div>
						)}
						<input
							type="email"
							name="user_email"
							aria-invalid={errors.user_email ? "true" : "false"}
							ref={register({
								required: true,
								maxLength: {
									value: 60,
									message: "Please use an email shorter than 60 characters.",
								},
							})}
							placeholder="Email"
						/>
						<br />
						<input
							type="text"
							name="contact_number"
							ref={register({ maxLength: 18 })}
							placeholder="Contact Number"
						/>
						<br />
						<br />
						<textarea
							name="message"
							ref={register}
							placeholder="Message"
							maxLength={1500}
						/>
						<p className="message-chars-left">
							Characters Remaining: {messageCharsLeft}
						</p>
						<br />
						<input type="submit" value="Send" />
					</form>
				</div>
			)}
		</>
	);
};
export default Contact;
