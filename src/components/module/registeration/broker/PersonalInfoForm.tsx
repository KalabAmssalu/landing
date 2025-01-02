"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { DateSelector } from "@/components/ui/custom/date-selector";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "@/hooks/storehooks";
import { formatToMMDDYYYY } from "@/lib/utils/dateUtils";
=======
import { ReusableDatePickerField } from "@/components/shared/Form/ReusableDateField";
import ReusableFormField from "@/components/shared/Form/ReusableFormField";
import ReusableSelectField from "@/components/shared/Form/ReusableSelectField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useAppSelector } from "@/hooks/storehooks";
>>>>>>> 68501ca (Initial commit)
import {
	type PersonalInfoFormValues,
	createPersonalInfoSchema,
} from "@/types/broker/BrokerInfoType";

interface PersonalInfoFormProps {
	onFormComplete: (data: PersonalInfoFormValues) => void;
}

export default function PersonalInfoForm({
	onFormComplete,
}: PersonalInfoFormProps) {
	const [visible, setVisible] = useState(true);
	const t = useTranslations("brokerInfoForm");

	// const [date, setDate] = useState<Date>();
	const [date, setDate] = useState<Date | undefined>(undefined);
	const personalInfoSchema = createPersonalInfoSchema(t);
	const DataInfo = useAppSelector((state) => state.broker.brokerSlice);
	const form = useForm<PersonalInfoFormValues>({
		resolver: zodResolver(personalInfoSchema),
		defaultValues: {
			first_name: DataInfo.first_name || "",
			middle_initial: DataInfo.middle_initial || "",
			last_name: DataInfo.last_name || "",
<<<<<<< HEAD
			first_name_amharic: DataInfo.first_name_amharic || "",
			middle_initial_amharic: DataInfo.middle_initial_amharic || "",
			last_name_amharic: DataInfo.last_name_amharic || "",
=======
			// first_name_amharic: DataInfo.first_name_amharic || "",
			// middle_initial_amharic: DataInfo.middle_initial_amharic || "",
			// last_name_amharic: DataInfo.last_name_amharic || "",
>>>>>>> 68501ca (Initial commit)
			gender: "male",
			date_of_birth: DataInfo.date_of_birth || "",
		},
	});
	function onSubmit(data: PersonalInfoFormValues) {
		onFormComplete(data);
		setVisible(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<fieldset className="border p-4 rounded-md">
					<legend className="text-lg font-semibold">
						Personal Information
					</legend>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<<<<<<< HEAD
						<FormField
							control={form.control}
							name="first_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.firstName.label")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("fields.firstName.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.firstName.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="middle_initial"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.middleName.label")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("fields.middleName.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.middleName.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="last_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.lastName.label")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("fields.lastName.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.lastName.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
=======
						<ReusableFormField
							control={form.control}
							name="first_name"
							type="text"
							local="brokerInfoForm"
							labelKey="fields.firstName.label"
							placeholderKey="fields.firstName.placeholder"
							descriptionKey="fields.firstName.description"
							required
							isRequired={true}
						/>
						<ReusableFormField
							control={form.control}
							name="middle_initial"
							type="text"
							local="brokerInfoForm"
							labelKey="fields.middleName.label"
							placeholderKey="fields.middleName.placeholder"
							descriptionKey="fields.middleName.description"
							required
							isRequired={true}
						/>
						<ReusableFormField
							control={form.control}
							name="last_name"
							type="text"
							local="brokerInfoForm"
							labelKey="fields.lastName.label"
							placeholderKey="fields.lastName.placeholder"
							descriptionKey="fields.lastName.description"
							required
							isRequired={true}
						/>

						{/* <FormField
>>>>>>> 68501ca (Initial commit)
							control={form.control}
							name="first_name_amharic"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.firstNameAm.label")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("fields.firstNameAm.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.firstNameAm.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="middle_initial_amharic"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.middleNameAm.label")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("fields.middleNameAm.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.middleNameAm.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="last_name_amharic"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.lastNameAm.label")}</FormLabel>
									<FormControl>
										<Input
											placeholder={t("fields.lastNameAm.placeholder")}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{t("fields.lastNameAm.description")}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
<<<<<<< HEAD
						/>
						<FormField
							control={form.control}
							name="gender"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.gender.label")}</FormLabel>
									<FormControl>
										<Select
											onValueChange={(value) => {
												form.setValue(
													"gender",
													value as "male" | "female" | "not_prefer_to_say"
												);
											}}
										>
											<SelectTrigger className="items-start [&_[data-description]]:hidden">
												<SelectValue
													placeholder={t("fields.gender.placeholder")}
												/>
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="male">
													<div className="flex items-start gap-3 text-muted-foreground">
														<p>{t("fields.gender.options.male")}</p>
													</div>
												</SelectItem>
												<SelectItem value="female">
													<div className="flex items-start gap-3 text-muted-foreground">
														<p>{t("fields.gender.options.female")}</p>
													</div>
												</SelectItem>
												<SelectItem value="not_prefer_to_say">
													<div className="flex items-start gap-3 text-muted-foreground">
														<p>
															{t("fields.gender.options.not_prefer_to_say")}
														</p>
													</div>
												</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
									<FormDescription>
										{t("fields.gender.description")}
									</FormDescription>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="date_of_birth"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("fields.dateOfBirth.label")}</FormLabel>
									<FormControl>
										<DateSelector
											selectedDate={
												field.value ? new Date(field.value) : undefined
											} // Convert string to Date
											onDateChange={(date) => {
												form.setValue(
													"date_of_birth",
													date ? formatToMMDDYYYY(date) : "" // Format Date to MM, DD, YYYY
												);
											}}
											placeholder={t("fields.dateOfBirth.placeholder")}
											buttonClassName="custom-button-class"
										/>
									</FormControl>
									<FormMessage />
									<FormDescription>
										{t("fields.dateOfBirth.description")}
									</FormDescription>
								</FormItem>
							)}
=======
						/> */}
						<ReusableSelectField
							control={form.control}
							name="gender"
							labelKey="fields.gender.label"
							local="brokerInfoForm"
							placeholderKey="fields.gender.placeholder"
							descriptionKey="fields.gender.description"
							options={[
								{ label: t("fields.gender.options.male"), value: "male" },
								{ label: t("fields.gender.options.female"), value: "female" },
								{
									label: t("fields.gender.options.not_prefer_to_say"),
									value: "not_prefer_to_say",
								},
							]}
							onValueChange={(value) => {
								form.setValue(
									"gender",
									value as "male" | "female" | "not_prefer_to_say"
								);
							}}
							required
						/>

						<ReusableDatePickerField
							control={form.control}
							name="date_of_birth"
							labelKey="fields.dateOfBirth.label"
							placeholderKey="fields.dateOfBirth.placeholder"
							descriptionKey="fields.dateOfBirth.description"
							required
							buttonClassName="custom-button-class"
							local="brokerInfoForm"
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
