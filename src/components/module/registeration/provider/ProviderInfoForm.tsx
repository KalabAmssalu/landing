"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { PersonStanding } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

<<<<<<< HEAD
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { DateSelector } from "@/components/ui/custom/date-selector";
=======
import { ReusableDatePickerField } from "@/components/shared/Form/ReusableDateField";
import ReusableFormField from "@/components/shared/Form/ReusableFormField";
import ReusablePhoneInputField from "@/components/shared/Form/ReusablePhoneInput";
import ReusableSelectField from "@/components/shared/Form/ReusableSelectField";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
>>>>>>> 68501ca (Initial commit)
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
=======
>>>>>>> 68501ca (Initial commit)
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
<<<<<<< HEAD
import { useAppSelector } from "@/hooks/storehooks";
import { formatToMMDDYYYY } from "@/lib/utils/dateUtils";
=======
import { useAppDispatch, useAppSelector } from "@/hooks/storehooks";
>>>>>>> 68501ca (Initial commit)
import {
	type ProviderInfoFormValues,
	createProviderInfoSchema,
	createProviderTitleOptions,
	getAllTiers,
	getSubTiersForTier,
} from "@/types/provider/ProviderInfoType";
import { type ProviderTitle } from "@/types/provider/ProviderType";

interface ProviderInfoFormProps {
	onFormComplete: (data: ProviderInfoFormValues) => void;
}

export default function ProviderInfoForm({
	onFormComplete,
}: ProviderInfoFormProps) {
	const [visible, setVisible] = useState(true);
<<<<<<< HEAD
	const t = useTranslations("providerInfoForm");
=======
	const [selectedServiceType, setSelectedServiceType] = useState("");
	const [isGroup, setIsGroup] = useState(false);
	const [isInstitute, setIsInstitute] = useState(false);
	const [isProfessional, setIsProfessional] = useState(false);
	const repLocal = isGroup ? "groupInfoForm" : "providerInfoForm";
	const t = useTranslations(repLocal);
>>>>>>> 68501ca (Initial commit)
	const providerTitleOptions = createProviderTitleOptions(t);
	const providerInfoSchema = createProviderInfoSchema(t);
	const DataInfo = useAppSelector((state) => state.provider.providerSlice);

	const form = useForm<ProviderInfoFormValues>({
		resolver: zodResolver(providerInfoSchema),
		defaultValues: {
			tin_number: DataInfo.tin_number || "",
			institute_name: DataInfo.institute_name || "",
<<<<<<< HEAD
			provider_id: DataInfo.provider_id || "",
			provider_first_name: DataInfo.provider_first_name || "",
			provider_middle_initial: DataInfo.provider_middle_initial || "",
			provider_last_name: DataInfo.provider_last_name || "",
			provider_first_name_amharic: DataInfo.provider_first_name_amharic || "",
			provider_middle_initial_amharic:
				DataInfo.provider_middle_initial_amharic || "",
			provider_last_name_amharic: DataInfo.provider_last_name_amharic || "",
=======
			provider_npi_id: DataInfo.provider_npi_id || "",
			provider_first_name: DataInfo.provider_first_name || "",
			provider_middle_initial: DataInfo.provider_middle_initial || "",
			provider_last_name: DataInfo.provider_last_name || "",
>>>>>>> 68501ca (Initial commit)
			provider_title: DataInfo.provider_title || "",
			provider_gender: "male",
			provider_date_of_birth: DataInfo.provider_date_of_birth || "",
			provider_contact_person: DataInfo.provider_contact_person || "",
			provider_contact_email: DataInfo.provider_contact_email || "",
			provider_contact_phone_number:
				DataInfo.provider_contact_phone_number || "",
<<<<<<< HEAD
=======
			provider_phone_number: DataInfo.provider_phone_number || "",
			provider_email: DataInfo.provider_email || "",
			provider_health_sub_tier: DataInfo.provider_health_sub_tier || "",
			provider_health_tier: DataInfo.provider_health_tier || "",
			provider_service_type: "institute",
>>>>>>> 68501ca (Initial commit)
		},
	});

	const [subTiers, setSubTiers] = useState<string[]>([]);
	const [selectedMainTier, setSelectedMainTier] = useState("");
<<<<<<< HEAD
	const [isProfessional, setIsProfessional] = useState(false);
	const [selectedServiceType, setSelectedServiceType] = useState("");
	const [isRequired, setIsRequired] = useState(false);

	useEffect(() => {
		if (selectedServiceType === "professional") {
			setIsProfessional(true);
			form.setValue("institute_name", "");
			setIsRequired(true);
		} else {
			setIsProfessional(false);
			form.setValue("provider_first_name", "");
			form.setValue("provider_middle_initial", "");
			form.setValue("provider_last_name", "");
			form.setValue("provider_first_name_amharic", "");
			form.setValue("provider_middle_initial_amharic", "");
			form.setValue("provider_last_name_amharic", "");
=======
	const [professional, setProfessional] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	useEffect(() => {
		console.log("selected service type", selectedServiceType);

		if (selectedServiceType === "professional") {
			setIsProfessional(true);
			setIsGroup(false);
			setIsInstitute(false);
			form.setValue("institute_name", "");
		} else if (selectedServiceType === "group") {
			setIsGroup(true);
			setIsInstitute(false);
			setIsProfessional(false);
		} else {
			setIsInstitute(true);
			setIsProfessional(false);
			setIsGroup(false);
			form.setValue("provider_first_name", "");
			form.setValue("provider_middle_initial", "");
			form.setValue("provider_last_name", "");
>>>>>>> 68501ca (Initial commit)
			form.setValue("provider_title", "");
			form.setValue("provider_gender", "");
		}
	}, [selectedServiceType, form]);

<<<<<<< HEAD
=======
	// Optional: Log updated state values
	useEffect(() => {
		console.log("is professional", isProfessional);
		console.log("is group", isGroup);
		console.log("is institute", isInstitute);
	}, [isProfessional, isGroup, isInstitute]);

>>>>>>> 68501ca (Initial commit)
	useEffect(() => {
		const selectedTier = form.getValues("provider_health_tier");
		if (selectedTier) {
			setSubTiers(getSubTiersForTier(selectedTier) || []);
<<<<<<< HEAD

			form.setValue("provider_health_sub_tier", "");
=======
>>>>>>> 68501ca (Initial commit)
		}
	}, [selectedMainTier, form]);

	// Get all main tiers for the provider_health_tier dropdown
	const mainTiers = getAllTiers();

	function onSubmit(data: ProviderInfoFormValues) {
		onFormComplete(data);
		console.log("submitted data 1", data);
		setVisible(false);
	}

<<<<<<< HEAD
=======
	const handleTitleValueChange = (value: string) => {
		form.setValue("provider_title", value);
	};

>>>>>>> 68501ca (Initial commit)
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<fieldset className="border p-4 rounded-md bg-background ">
					<legend className="text-lg font-semibold">
						{t("identifiation")}
					</legend>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<<<<<<< HEAD
						<FormField
							control={form.control}
							name="provider_id"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex gap-1">
										{t("fields.provider_id.label")}
										<p className="text-red-500">*</p>
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t("fields.provider_id.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.provider_id.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="tin_number"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex gap-1">
										{t("fields.tin_number.label")}
										<p className="text-red-500">*</p>
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t("fields.tin_number.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.tin_number.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
=======
						<ReusableFormField
							control={form.control}
							name="provider_npi_id"
							type="text"
							local={repLocal}
							labelKey="fields.provider_npi_id.label"
							placeholderKey="fields.provider_npi_id.placeholder"
							descriptionKey="fields.provider_npi_id.description"
							required
							isRequired={true}
						/>
						<ReusableFormField
							control={form.control}
							name="tin_number"
							type="text"
							local={repLocal}
							labelKey="fields.tin_number.label"
							placeholderKey="fields.tin_number.placeholder"
							descriptionKey="fields.tin_number.description"
							required
							isRequired={true}
>>>>>>> 68501ca (Initial commit)
						/>
						<FormField
							control={form.control}
							name="provider_service_type"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex gap-1">
										{t("fields.provider_service_type.label")}
										<p className="text-red-500">*</p>
									</FormLabel>
									<FormControl>
										<Select
											onValueChange={(value) => {
												setSelectedServiceType(value);
												form.setValue(
													"provider_service_type",
													value as "group" | "institute" | "professional"
												);
											}}
										>
											<SelectTrigger className="items-start [&_[data-description]]:hidden">
												<SelectValue
													placeholder={t(
														"fields.provider_service_type.placeholder"
													)}
												/>
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="group">
													<div className="flex items-start gap-3 text-muted-foreground">
														<p>
															{t("fields.provider_service_type.options.group")}
														</p>
													</div>
												</SelectItem>
												<SelectItem value="institute">
													<div className="flex items-start gap-3 text-muted-foreground">
														<p>
															{t(
																"fields.provider_service_type.options.institute"
															)}
														</p>
													</div>
												</SelectItem>
												<SelectItem value="professional">
													<div className="flex items-start gap-3 text-muted-foreground">
														<p>
															{t(
																"fields.provider_service_type.options.professional"
															)}
														</p>
													</div>
												</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
									<FormDescription>
										{t("fields.provider_service_type.description")}
									</FormDescription>
								</FormItem>
							)}
						/>
<<<<<<< HEAD
					</div>
				</fieldset>
				{isProfessional && (
=======

						<ReusableFormField
							control={form.control}
							name="provider_email"
							type="email"
							local={repLocal}
							labelKey="fields.provider_email.label"
							placeholderKey="fields.provider_email.placeholder"
							descriptionKey="fields.provider_email.description"
							required
							isRequired={true}
						/>

						<ReusablePhoneInputField
							control={form.control}
							name="provider_phone_number"
							labelKey="fields.provider_phone_number.label"
							placeholderKey="fields.provider_phone_number.placeholder"
							descriptionKey="fields.provider_phone_number.description"
							local={repLocal}
							required
							isRequired={true}
						/>
					</div>
				</fieldset>
				{isProfessional ? (
>>>>>>> 68501ca (Initial commit)
					<>
						<Alert className="border-primary border-[1.5px]">
							<PersonStanding className="h-4 w-4" />
							<AlertTitle>{t("alert.title")}</AlertTitle>
							<AlertDescription>{t("alert.description")}</AlertDescription>
						</Alert>
						<fieldset className="border p-4 rounded-md bg-background ">
							<legend className="text-lg font-semibold ">
								{t("personal")}
							</legend>
<<<<<<< HEAD
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3 my-4">
=======
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6 ">
								<ReusableFormField
									control={form.control}
									name="provider_first_name"
									type="text"
									local={repLocal}
									labelKey="fields.provider_first_name.label"
									placeholderKey="fields.provider_first_name.placeholder"
									descriptionKey="fields.provider_first_name.description"
									required
									isRequired={true}
								/>
								<ReusableFormField
									control={form.control}
									name="provider_middle_initial"
									type="text"
									local={repLocal}
									labelKey="fields.provider_middle_initial.label"
									placeholderKey="fields.provider_middle_initial.placeholder"
									descriptionKey="fields.provider_middle_initial.description"
								/>
								<ReusableFormField
									control={form.control}
									name="provider_last_name"
									type="text"
									local={repLocal}
									labelKey="fields.provider_last_name.label"
									placeholderKey="fields.provider_last_name.placeholder"
									descriptionKey="fields.provider_last_name.description"
									required
									isRequired={true}
								/>
							</div>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-4">
>>>>>>> 68501ca (Initial commit)
								<FormField
									control={form.control}
									name="provider_title"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex gap-1">
												{t("fields.provider_title.label")}
												<p className="text-red-500">*</p>
											</FormLabel>
											<FormControl>
												<Select
													onValueChange={(value) => {
														form.setValue(
															"provider_title",
															value as ProviderTitle
														); // Ensure type matches your ProviderTitle type
													}}
<<<<<<< HEAD
													required={isRequired}
=======
													required={isProfessional}
>>>>>>> 68501ca (Initial commit)
												>
													<SelectTrigger className="items-start [&_[data-description]]:hidden">
														<SelectValue
															placeholder={t(
																"fields.provider_title.placeholder"
															)}
														/>
													</SelectTrigger>
													<SelectContent>
														{providerTitleOptions.map((option) => (
															<SelectItem
																key={option.value}
																value={option.value}
															>
																<div className="flex items-start gap-3 text-muted-foreground">
																	<p>{option.label}</p>
																</div>
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
											<FormDescription>
												{t("fields.provider_title.description")}
											</FormDescription>
										</FormItem>
									)}
								/>
<<<<<<< HEAD
								<FormField
									control={form.control}
									name="provider_gender"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("fields.provider_gender.label")}</FormLabel>
											<FormControl>
												<Select
													onValueChange={(value) => {
														form.setValue(
															"provider_gender",
															value as "male" | "female" | "not_prefer_to_say"
														);
													}}
												>
													<SelectTrigger className="items-start [&_[data-description]]:hidden">
														<SelectValue
															placeholder={t(
																"fields.provider_gender.placeholder"
															)}
														/>
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="male">
															<div className="flex items-start gap-3 text-muted-foreground">
																<p>
																	{t("fields.provider_gender.options.male")}
																</p>
															</div>
														</SelectItem>
														<SelectItem value="female">
															<div className="flex items-start gap-3 text-muted-foreground">
																<p>
																	{t("fields.provider_gender.options.female")}
																</p>
															</div>
														</SelectItem>
														<SelectItem value="not_prefer_to_say">
															<div className="flex items-start gap-3 text-muted-foreground">
																<p>
																	{t(
																		"fields.provider_gender.options.not_prefer_to_say"
																	)}
																</p>
															</div>
														</SelectItem>
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
											<FormDescription>
												{t("fields.provider_gender.description")}
											</FormDescription>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="provider_date_of_birth"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												{t("fields.provider_date_of_birth.label")}
											</FormLabel>
											<FormControl>
												<DateSelector
													selectedDate={
														field.value ? new Date(field.value) : undefined
													} // Convert string to Date
													onDateChange={(date) => {
														form.setValue(
															"provider_date_of_birth",
															date ? formatToMMDDYYYY(date) : "" // Format Date to MM, DD, YYYY
														);
													}}
													placeholder={t(
														"fields.provider_date_of_birth.placeholder"
													)}
													buttonClassName="custom-button-class"
												/>
											</FormControl>
											<FormMessage />
											<FormDescription>
												{t("fields.provider_date_of_birth.description")}
											</FormDescription>
										</FormItem>
									)}
								/>
							</div>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-6 ">
								<FormField
									control={form.control}
									name="provider_first_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex gap-1">
												{t("fields.provider_first_name.label")}
												<p className="text-red-500">*</p>
											</FormLabel>
											<FormControl>
												<Input
													placeholder={t(
														"fields.provider_first_name.placeholder"
													)}
													{...field}
													required={isRequired}
												/>
											</FormControl>
											<FormDescription>
												{t("fields.provider_first_name.description")}
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="provider_middle_initial"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												{t("fields.provider_middle_initial.label")}
											</FormLabel>
											<FormControl>
												<Input
													placeholder={t(
														"fields.provider_middle_initial.placeholder"
													)}
													{...field}
												/>
											</FormControl>
											<FormDescription>
												{t("fields.provider_middle_initial.description")}
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="provider_last_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex gap-1">
												{t("fields.provider_last_name.label")}
												<p className="text-red-500">*</p>
											</FormLabel>
											<FormControl>
												<Input
													placeholder={t(
														"fields.provider_last_name.placeholder"
													)}
													{...field}
													required={isRequired}
												/>
											</FormControl>
											<FormDescription>
												{t("fields.provider_last_name.description")}
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="provider_first_name_amharic"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												{t("fields.provider_first_name_amharic.label")}
											</FormLabel>
											<FormControl>
												<Input
													placeholder={t(
														"fields.provider_first_name_amharic.placeholder"
													)}
													{...field}
												/>
											</FormControl>
											<FormDescription>
												{t("fields.provider_first_name_amharic.description")}
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="provider_middle_initial_amharic"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												{t("fields.provider_middle_initial_amharic.label")}
											</FormLabel>
											<FormControl>
												<Input
													placeholder={t(
														"fields.provider_middle_initial_amharic.placeholder"
													)}
													{...field}
												/>
											</FormControl>
											<FormDescription>
												{t(
													"fields.provider_middle_initial_amharic.description"
												)}
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="provider_last_name_amharic"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												{t("fields.provider_last_name_amharic.label")}
											</FormLabel>
											<FormControl>
												<Input
													placeholder={t(
														"fields.provider_last_name_amharic.placeholder"
													)}
													{...field}
												/>
											</FormControl>
											<FormDescription>
												{t("fields.provider_last_name_amharic.description")}
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
=======
								<ReusableSelectField
									control={form.control}
									name="provider_gender"
									labelKey="fields.provider_gender.label"
									local={repLocal}
									placeholderKey="fields.provider_gender.placeholder"
									descriptionKey="fields.provider_gender.description"
									options={[
										{
											label: t("fields.provider_gender.options.male"),
											value: "male",
										},
										{
											label: t("fields.provider_gender.options.female"),
											value: "female",
										},
										{
											label: t(
												"fields.provider_gender.options.not_prefer_to_say"
											),
											value: "not_prefer_to_say",
										},
									]}
									onValueChange={(value) => {
										form.setValue(
											"provider_gender",
											value as "male" | "female" | "not_prefer_to_say"
										);
									}}
									required
								/>
								<ReusableDatePickerField
									control={form.control}
									name="provider_date_of_birth"
									labelKey="fields.provider_date_of_birth.label"
									placeholderKey="fields.provider_date_of_birth.placeholder"
									descriptionKey="fields.provider_date_of_birth.description"
									required
									buttonClassName="custom-button-class"
									local={repLocal}
>>>>>>> 68501ca (Initial commit)
								/>
							</div>
						</fieldset>
					</>
<<<<<<< HEAD
				)}
=======
				) : (
					<></>
				)}

>>>>>>> 68501ca (Initial commit)
				<fieldset className="border p-4 rounded-md bg-background mt-6 ">
					<legend className="text-lg font-semibold">{t("information")}</legend>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
						{!isProfessional && (
<<<<<<< HEAD
							<FormField
								control={form.control}
								name="institute_name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="flex gap-1">
											{t("fields.institute_name.label")}
											<p className="text-red-500">*</p>
										</FormLabel>
										<FormControl>
											<Input
												placeholder={t("fields.institute_name.placeholder")}
												{...field}
												required={isRequired}
											/>
										</FormControl>
										<FormDescription>
											{t("fields.institute_name.description")}
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
=======
							<ReusableFormField
								control={form.control}
								name="institute_name"
								type="text"
								local={repLocal}
								labelKey="fields.institute_name.label"
								placeholderKey="fields.institute_name.placeholder"
								descriptionKey="fields.institute_name.description"
								required
								isRequired={true}
>>>>>>> 68501ca (Initial commit)
							/>
						)}

						<FormField
							control={form.control}
							name="provider_health_tier"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.provider_health_tier.label")}
									</FormLabel>
									<FormControl>
										<Select
											value={field.value}
											onValueChange={(value) => {
												setSelectedMainTier(value);

												form.setValue("provider_health_tier", value);
												form.setValue("provider_health_sub_tier", "");
											}}
										>
											<SelectTrigger className="items-start [&_[data-description]]:hidden">
												<SelectValue
													placeholder={t(
														"fields.provider_health_tier.placeholder"
													)}
												/>
											</SelectTrigger>
											<SelectContent>
												{mainTiers.map((tier) => (
													<SelectItem key={tier} value={tier}>
														<div className="flex items-start gap-3 text-muted-foreground">
															<p>
																{t(
																	`fields.provider_health_tier.options.${tier}`
																)}
															</p>
														</div>
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
									<FormDescription>
										{t("fields.provider_health_tier.description")}
									</FormDescription>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="provider_health_sub_tier"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.provider_health_sub_tier.label")}
									</FormLabel>
									<FormControl>
										<Select
											value={field.value}
											onValueChange={(value) =>
												form.setValue("provider_health_sub_tier", value)
											}
										>
											<SelectTrigger className="items-start [&_[data-description]]:hidden">
												<SelectValue
													placeholder={t(
														"fields.provider_health_sub_tier.placeholder"
													)}
												/>
											</SelectTrigger>
											<SelectContent>
												{subTiers.map((subTier, index) => (
													<SelectItem key={index} value={subTier}>
														<div className="flex items-start gap-3 text-muted-foreground">
															<p>{subTier}</p>
														</div>
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
									<FormDescription>
										{t("fields.provider_health_sub_tier.description")}
									</FormDescription>
								</FormItem>
							)}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
<<<<<<< HEAD
						<FormField
							control={form.control}
							name="provider_contact_person"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.provider_contact_person.label")}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t(
												"fields.provider_contact_person.placeholder"
											)}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.provider_contact_person.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="provider_contact_email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.provider_contact_email.label")}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t(
												"fields.provider_contact_email.placeholder"
											)}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.provider_contact_email.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="provider_contact_phone_number"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.provider_contact_phone_number.label")}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t(
												"fields.provider_contact_phone_number.placeholder"
											)}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.provider_contact_phone_number.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
=======
						<ReusableFormField
							control={form.control}
							name="provider_contact_person"
							type="text"
							local={repLocal}
							labelKey="fields.provider_contact_person.label"
							placeholderKey="fields.provider_contact_person.placeholder"
							descriptionKey="fields.provider_contact_person.description"
							isRequired={isGroup || isInstitute ? true : false}
							required={isGroup || isInstitute ? true : false}
						/>
						<ReusableFormField
							control={form.control}
							name="provider_contact_email"
							type="email"
							local={repLocal}
							labelKey="fields.provider_contact_email.label"
							placeholderKey="fields.provider_contact_email.placeholder"
							descriptionKey="fields.provider_contact_email.description"
							isRequired={isGroup || isInstitute ? true : false}
							required={isGroup || isInstitute ? true : false}
						/>

						<ReusablePhoneInputField
							control={form.control}
							name="provider_contact_phone_number"
							labelKey="fields.provider_contact_phone_number.label"
							placeholderKey="fields.provider_contact_phone_number.placeholder"
							descriptionKey="fields.provider_contact_phone_number.description"
							local={repLocal}
							isRequired={isGroup || isInstitute ? true : false}
							required={isGroup || isInstitute ? true : false}
>>>>>>> 68501ca (Initial commit)
						/>
					</div>
				</fieldset>
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
