<<<<<<< HEAD
import React from "react";

import ContactScreen from "@/components/screen/contactScreen/ContactScreen";
=======
import ContactScreen from "@/components/screen/contactScreen/ContactScreen";
import BreadcrumbNav from "@/components/shared/Navigations/breadcrambNav";
>>>>>>> 68501ca (Initial commit)

type Props = {};

const page = (props: Props) => {
	return (
<<<<<<< HEAD
		<div>
			<ContactScreen />
=======
		<div className="p-4">
			<BreadcrumbNav items={[{ label: "Contact Us" }]} />
			<div className="container mx-auto py-10">
				<ContactScreen />
			</div>
>>>>>>> 68501ca (Initial commit)
		</div>
	);
};

export default page;
