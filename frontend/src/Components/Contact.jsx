import React from "react";
import "./Contact.css";

export default function Contact() {
	return (
		<div>
			<iframe className="map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7513793097387!2d75.0113224740328!3d33.921797824609804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e21f4d5df8a69d%3A0x3086c88943a2ac51!2sIUST%20awantipora!5e0!3m2!1sen!2sin!4v1707371005456!5m2!1sen!2sin"
				title="location"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}
