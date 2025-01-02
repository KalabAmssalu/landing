export type memeberType = {
<<<<<<< HEAD
	first_name: string;
	middle_name: string;
	last_name: string;
	phone_number: string;
	email_address: string;
	gender?: string | undefined;
	date_of_birth?: string;
	marital_status?: string | undefined;
	mailing_address_line1?: string;
	kifle_ketema?: string;
	country?: string;
	region?: string;
	city?: string;
=======
	id?: number;
	member_id?: string;
	family_id?: string;
	date_of_birth: string;
	first_name: string;
	last_name: string;
	middle_name: string;
	gender: string;
	insurance_type: string;
	has_transport_subscription: boolean;
	marital_status: string;
	member_organization_type: string;
	benefit_plan: string;
	member_payment_duty: number;
	member_type: string;
	member_status: string;
	phone_number: string;
	email_address: string;
	mailing_address_line1: string;
	country: string;
	street_address: string;
	city: string;
	region: string;
	kifle_ketema: string;
	representative_first_name: string;
	representative_last_name: string;
	representative_middle_name: string;
	representative_gender: string;
	representative_date_of_birth: string | null;
	representative_marital_status: string;
	representative_mailing_address_line1: string;
	representative_country: string;
	representative_street_address: string;
	representative_city: string;
	representative_region: string;
	representative_kifle_ketema: string;
	representative_zip_code: string;
	representative_phone_number: string;
	representative_email_address: string;
	relationship_to_member: string;
	is_representative: boolean;
	height: number;
	weight: number;
	tin_number: string;
	max_out_of_pocket: number;
	max_out_of_pocket_etb: number;
	total_medical_expense: number;
	deductible_type: string;
	deductible: number;
	payment_date: string;
	benefit_begin_date: string;
	dependent_of: number | null;
};

export type familyType = {
	id?: string;
	date_of_birth: string;
	first_name: string;
	last_name: string;
	middle_name: string;
	gender: string;
	phone_number?: string;
	email_address?: string;
	marital_status: string;
	height?: number;
	weight?: number;

	tin_number?: string;
	street_address?: string;
	mailing_address_line1?: string;
	country?: string;
	city?: string;
	region?: string;
	kifle_ketema?: string;
	zip_code?: string;

	insurance_type: string;
	member_organization_type: string;
	benefit_plan: string;
	member_type: string;
	marital_status: string;
	member_status: string;
	is_representative: boolean;

	relationship_to_member?: string;
	representative_first_name: string;
	representative_last_name: string;
	representative_middle_name: string;
	representative_gender: string;
	representative_date_of_birth: string;
	representative_marital_status: string;
	representative_mailing_address_line1: string;
	representative_country: string;
	representative_street_address: string;
	representative_city: string;
	representative_region: string;
	representative_kifle_ketema: string;
	representative_zip_code: string;
	representative_phone_number: string;
	representative_email_address: string;
};

export type FamilyInfoType = {
	id?: string;
	first_name: string;
	middle_name: string;
	last_name: string;
	gender: "" | "male" | "female" | "not_prefer_to_say";
	marital_status: "" | "divorced" | "single" | "married";
	height?: number;
	weight?: number;
	date_of_birth: string;
	phone_number?: string;
	email_address?: string;
	relationship_to_member?: string;
	tin_number?: string;
	street_address?: string;
	mailing_address_line1?: string;
	country?: string;
	city?: string;
	region?: string;
	kifle_ketema?: string;
	zip_code?: string;
>>>>>>> 68501ca (Initial commit)
};