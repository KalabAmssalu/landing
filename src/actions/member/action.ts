"use server";

<<<<<<< HEAD
import { type memeberType } from "@/types/memeber/memeber";
=======
import { type familyType, type memeberType } from "@/types/memeber/memeber";
>>>>>>> 68501ca (Initial commit)

import axiosInstance from "../axiosInstance";
import getErrorMessage from "../getErrorMessage";

<<<<<<< HEAD
const API_POST = `${process.env.REACT_APP_BASE_URL}/members/individual`;

export async function setMemeberIndividual(data: memeberType) {
=======
export async function setMemeberIndividual(data: Partial<memeberType>) {
>>>>>>> 68501ca (Initial commit)
	try {
		const response = await axiosInstance.post("members/individual", data);
		console.log("response", response.data);
		return {
			ok: true,
<<<<<<< HEAD
			message: "አዲስ ተጠቃሚ በተሳካ ሁኔታ ፈጥረዋል!",
=======
			message: "New Member is Added",
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}
export async function setFamilyMember(data: Partial<familyType[]>) {
	console.log("family data", data);
	try {
		const response = await axiosInstance.post(
			"members/family-registration/",
			data
		);
		console.log("response", response.data);
		return {
			ok: true,
			message: "New Family Record is Added!",
>>>>>>> 68501ca (Initial commit)
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}
