"use client";

<<<<<<< HEAD
import { useState } from "react";

import { Loader2 } from "lucide-react";

import { useAddbroker } from "@/actions/Query/broker_Query/broker_Query";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/hooks/storehooks";

interface PersonalInfoProps {
	onFormComplete: () => void;
	active: boolean; // Define the active prop
}
const Preview = ({ onFormComplete, active }: PersonalInfoProps) => {
	const { mutate: BrokerMutation } = useAddbroker();
	const data = useAppSelector((state) => state.broker.brokerSlice);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async () => {
		setIsSubmitting(true);
		try {
			console.log(data);
			const dataSend = {
				...data,
				monthly_premium: 0,
				yearly_premium: 0,
				in_network: true,
			};
			await BrokerMutation(dataSend);
			toast({
				title: "Success",
				description: "Member data submitted successfully!",
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to submit member data. Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
			onFormComplete();
		}
	};

	return (
		<div className="container mx-auto p-4">
			<Card className="w-full max-w-2xl mx-auto">
				<CardHeader>
					<CardTitle>Broker Form Preview</CardTitle>
					<CardDescription>
						Review your information before submitting
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					{Object.entries(data).map(([key, value]) => (
						<div
							key={key}
							className="flex justify-between items-center border-b pb-2"
						>
							<span className="font-medium capitalize">
								{key.replace(/([A-Z])/g, " $1").trim()}:
							</span>
							<span>{value as string}</span>
						</div>
					))}
				</CardContent>
				<CardFooter className="flex justify-end">
					<Button
						onClick={handleSubmit}
						disabled={isSubmitting}
						className="bg-green-500"
					>
						{isSubmitting ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Submit this form
							</>
						) : (
							"Submit the form"
						)}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};
=======
import Image from "next/image";
import { forwardRef, useMemo, useState } from "react";

import Field from "@/components/shared/field/Field";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/files";
import { useAppSelector } from "@/hooks/storehooks";

interface PersonalInfoProps {
	onConfirm: () => void;
	isBroker: boolean;
	ref: React.RefObject<HTMLDivElement>;
}

// eslint-disable-next-line react/display-name
const Preview = forwardRef<HTMLDivElement, PersonalInfoProps>(
	({ onConfirm, isBroker }, ref) => {
		const data = useAppSelector((state) => state.broker.brokerSlice);

		const repLocal = isBroker
			? "brokerInfoForm.fields"
			: "personalInfoForm.fields";

		const handlemodal = () => {
			onConfirm();
		};

		return (
			<div className="min-h-screen bg-gray-100 p-8 flex justify-center">
				{/* A4 size container */}
				<div
					className="bg-white w-[210mm] h-[297mm] shadow-lg p-12 relative overflow-hidden"
					ref={ref}
				>
					<div className="border-b pb-6 mb-6">
						<h1 className="text-3xl font-bold text-gray-900">
							{isBroker
								? "Broker Information Preview"
								: "Agent Information Preview"}
						</h1>
						<h2 className="text-md font-semibold text-gray-700 mt-2">
							{`${data.first_name || ""} ${data.middle_initial || ""} ${data.last_name || ""}`}
						</h2>

						<div className="text-sm text-gray-500 mt-2">
							Document generated on {new Date().toLocaleDateString()}
						</div>
					</div>

					<Image
						src={IMAGES.blueLogo}
						width={60}
						alt={"logo"}
						className="absolute top-12 right-12"
					/>

					{/* Content Grid */}
					{data ? (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 text-sm mt-6">
							{/* Basic Information */}
							{!isBroker && (
								<>
									<div>
										<h2 className="text-lg font-semibold text-gray-900 mb-4">
											Basic Information
										</h2>
										<div className="space-y-3">
											{[
												"date_of_birth",
												"gender",
												"company_name",
												"business_type",
												"business_license_number",
												"tax_identification_number",
												"license_state",
												"license_issued_date",
												"license_expired_date",
											].map((key) => (
												<Field
													key={key}
													label={key}
													value={String(data[key as keyof typeof data] || "")}
													local="brokerInfoForm.fields"
												/>
											))}
										</div>
									</div>

									{/* Contact Information */}
									<div>
										<h2 className="text-lg font-semibold text-gray-900 mb-4">
											Contact Information
										</h2>
										<div className="space-y-3">
											{[
												"phone_number",
												"email_address",
												"business_address_line_1",
												"business_address_line_2",
												"business_city",
												"business_state",
												"business_kifle_ketema",
												"business_zip_code",
												"business_country",
											].map((key) => (
												<Field
													key={key}
													label={key}
													value={String(data[key as keyof typeof data] || "")}
													local="brokerInfoForm.fields"
												/>
											))}
										</div>
									</div>
								</>
							)}
						</div>
					) : (
						<p>No data available to preview.</p>
					)}

					{/* Footer */}
					<div className="absolute bottom-8 left-8 right-8 text-xs text-gray-400 border-t pt-4">
						<div className="flex justify-between">
							<span>Generated by Tilla Health Insurance Provider System</span>
							<span>Page 1 of 1</span>
						</div>
					</div>
				</div>

				{/* Submit Button */}
				<div className="absolute bottom-20 right-12 ">
					<Button
						onClick={handlemodal}
						className="bg-green-500 hover:bg-green-600 text-white"
					>
						Confirm
					</Button>
				</div>
			</div>
		);
	}
);
>>>>>>> 68501ca (Initial commit)

export default Preview;
