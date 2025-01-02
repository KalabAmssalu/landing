"use client";

<<<<<<< HEAD
import { useState } from "react";
=======
import { useEffect, useMemo, useState } from "react";
>>>>>>> 68501ca (Initial commit)

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
=======
import ReusableFormField from "@/components/shared/Form/ReusableFormField";
import ReusablePhoneInputField from "@/components/shared/Form/ReusablePhoneInput";
import ReusableSelectField from "@/components/shared/Form/ReusableSelectField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
>>>>>>> 68501ca (Initial commit)
import { useAppSelector } from "@/hooks/storehooks";
import {
	type AddressInfoFormValues,
	createaddressInfoSchema,
} from "@/types/broker/BrokerInfoType";
<<<<<<< HEAD
=======
import {
	getAllCountries,
	getStatesForCountry,
} from "@/types/provider/ProviderInfoType";
>>>>>>> 68501ca (Initial commit)

interface AddressInfoFormProps {
	onFormComplete: (data: AddressInfoFormValues) => void;
}

export default function AddressInfoForm({
	onFormComplete,
}: AddressInfoFormProps) {
	const [visible, setVisible] = useState(true);
	const t = useTranslations("brokerInfoForm");
	const DataInfo = useAppSelector((state) => state.broker.brokerSlice);
	const addressInfoSchema = createaddressInfoSchema(t);
	const form = useForm<AddressInfoFormValues>({
		resolver: zodResolver(addressInfoSchema),
		defaultValues: {
			email_address: DataInfo.email_address || "",
			phone_number: DataInfo.phone_number || "",
			business_address_line_1: DataInfo.business_address_line_1 || "",
			business_address_line_2: DataInfo.business_address_line_2 || "",
			business_kifle_ketema: DataInfo.business_kifle_ketema || "",
<<<<<<< HEAD
=======
			business_country: DataInfo.business_country || "",
>>>>>>> 68501ca (Initial commit)
			business_city: DataInfo.business_city || "",
			business_state: DataInfo.business_state || "",
			business_zip_code: DataInfo.business_zip_code || "",
		},
	});
<<<<<<< HEAD
=======
	const [subStates, setSubStates] = useState<string[]>([]);
	const [selectedCountry, setSelectedCountry] = useState<string>("");
	useEffect(() => {
		const selectedCountry = form.getValues("business_country");
		if (selectedCountry) {
			setSubStates(getStatesForCountry(selectedCountry) || []);
		}
	}, [selectedCountry, form]);

	const countryOptions = useMemo(() => {
		return getAllCountries();
	}, []);

	const handleCountryValueChange = (value: string) => {
		setSelectedCountry(value);

		form.setValue("business_country", value);
		form.setValue("business_state", "");
	};
>>>>>>> 68501ca (Initial commit)

	function onSubmit(data: AddressInfoFormValues) {
		onFormComplete(data);
		setVisible(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<fieldset className="border p-4 rounded-md">
<<<<<<< HEAD
					<legend className="text-lg font-semibold">Address Information</legend>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="email_address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.contactEmail.label")}</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder={t("fields.contactEmail.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.contactEmail.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone_number"
							render={({ field }) => (
								<FormItem className="flex flex-col items-start">
									<FormLabel className="text-left">
										{t("fields.contactPhone.label")}
									</FormLabel>
									<FormControl className="w-full">
										<Input
											placeholder={t("fields.contactPhone.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription className="text-left">
										{t("fields.contactPhone.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="business_address_line_1"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.business_address_line_1.label")}
									</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder={t(
												"fields.business_address_line_1.placeholder"
											)}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.business_address_line_1.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="business_address_line_2"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.business_address_line_2.label")}
									</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder={t(
												"fields.business_address_line_2.placeholder"
											)}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.business_address_line_2.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="business_city"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.business_city.label")}</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder={t("fields.business_city.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.business_city.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="business_state"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.business_state.label")}</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder={t("fields.business_state.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.business_state.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="business_kifle_ketema"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.business_kifle_ketema.label")}
									</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder={t(
												"fields.business_kifle_ketema.placeholder"
											)}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.business_kifle_ketema.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="business_zip_code"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.business_zip_code.label")}</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder={t("fields.business_zip_code.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.business_zip_code.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</fieldset>
=======
					<legend className="text-lg font-semibold">Contact Information</legend>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<ReusableFormField
							control={form.control}
							name="email_address"
							type="email"
							local="brokerInfoForm"
							labelKey="fields.contactEmail.label"
							placeholderKey="fields.contactEmail.placeholder"
							descriptionKey="fields.contactEmail.description"
						/>
						<ReusablePhoneInputField
							control={form.control}
							name="phone_number"
							labelKey="fields.contactPhone.label"
							placeholderKey="fields.contactPhone.placeholder"
							descriptionKey="fields.contactPhone.description"
							local="brokerInfoForm"
						/>
					</div>
				</fieldset>
				<fieldset className="border p-4 rounded-md">
					<legend className="text-lg font-semibold">Address Information</legend>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<ReusableSelectField
							control={form.control}
							name="country"
							labelKey="fields.country.label"
							local="personalInfoForm"
							placeholderKey="fields.country.placeholder"
							descriptionKey="fields.country.description"
							options={countryOptions}
							onValueChange={handleCountryValueChange}
							required
						/>
						<ReusableFormField
							control={form.control}
							name="business_address_line_1"
							type="text"
							local="brokerInfoForm"
							labelKey="fields.business_address_line_1.label"
							placeholderKey="fields.business_address_line_1.placeholder"
							descriptionKey="fields.business_address_line_1.description"
							required
						/>
						<ReusableFormField
							control={form.control}
							name="business_address_line_2"
							type="text"
							local="brokerInfoForm"
							labelKey="fields.business_address_line_2.label"
							placeholderKey="fields.business_address_line_2.placeholder"
							descriptionKey="fields.business_address_line_2.description"
						/>
						<ReusableFormField
							control={form.control}
							name="business_city"
							type="text"
							local="brokerInfoForm"
							labelKey="fields.business_city.label"
							placeholderKey="fields.business_city.placeholder"
							descriptionKey="fields.business_city.description"
							required
							isRequired={true}
						/>
						<ReusableSelectField
							control={form.control}
							name="business_state"
							labelKey="fields.business_state.label"
							local="personalInfoForm"
							placeholderKey="fields.business_state.placeholder"
							descriptionKey="fields.business_state.description"
							options={subStates}
							onValueChange={(value) => form.setValue("business_state", value)}
							required
						/>

						<ReusableFormField
							control={form.control}
							name="business_zip_code"
							type="text"
							local="brokerInfoForm"
							labelKey="fields.business_zip_code.label"
							placeholderKey="fields.business_zip_code.placeholder"
							descriptionKey="fields.business_zip_code.description"
						/>
						<ReusableFormField
							control={form.control}
							name="business_kifle_ketema"
							type="text"
							local="brokerInfoForm"
							labelKey="fields.business_kifle_ketema.label"
							placeholderKey="fields.business_kifle_ketema.placeholder"
							descriptionKey="fields.business_kifle_ketema.description"
						/>
					</div>
				</fieldset>

>>>>>>> 68501ca (Initial commit)
				{visible && (
					<div className="flex w-full justify-end items-end">
						<Button type="submit" className="bg-green-500 flex items">
							Save and Continue
						</Button>
					</div>
				)}
			</form>
		</Form>
	);
}
