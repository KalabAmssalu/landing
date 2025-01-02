import { IMAGES } from "@/constants/files";

import { HeroInfo } from "../HeroInfo";

const BrokerPortals = [
	{
		title: "Make Broker changes",
<<<<<<< HEAD
		description: "Learn how to submit changes via Tilla BROKER WEB PORTAL...",
=======
		description:
			"Learn how to easily submit updates and modifications through the Tilla Broker Web Portal. Whether you're changing provider information, updating contact details, or managing client accounts,",
>>>>>>> 68501ca (Initial commit)
		image: "broker1" as keyof typeof IMAGES,
		href: "/broker/become_a_broker",
		slug: "become-a-broker",
		linkText: "Make Changes to Providers Information →",
	},
	{
		title: "Features of the Broker Portal",
<<<<<<< HEAD
		description: "",
		image: "broker2" as keyof typeof IMAGES,
=======
		description:
			"The Broker Portal is designed to empower health insurance brokers with the tools and resources they need to succeed. From comprehensive training materials to innovative technology solutions,...",
		image: "broker4" as keyof typeof IMAGES,
>>>>>>> 68501ca (Initial commit)
		href: "/broker/features",
		slug: "broker-portal",
		linkText: "View The tools and platform provided →",
	},
	{
		title: "Why Partner with Tilla Health?",
		description:
<<<<<<< HEAD
			"Tilla Health has a variety of forms and information related to the claims, appeals and grievances process",
=======
			"Partnering with Tilla Health offers brokers access to a comprehensive range of resources, including detailed...",
>>>>>>> 68501ca (Initial commit)
		image: "broker3" as keyof typeof IMAGES,
		href: "/broker/why_tilla",
		slug: "why-partner-with-tilla",
		linkText: "Learn More and Grow your business with Tilla Health →",
	},
];

export default function BrokerHero() {
	return <HeroInfo title="Broker Information" portals={BrokerPortals} />;
}
