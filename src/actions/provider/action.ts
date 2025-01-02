"use server";

<<<<<<< HEAD
import { ProviderType } from "@/types/provider/ProviderType";
=======
import { type ProviderType } from "@/types/provider/ProviderType";
>>>>>>> 68501ca (Initial commit)

import axiosInstance from "../axiosInstance";
import getErrorMessage from "../getErrorMessage";

export async function setProvider(data: ProviderType) {
	try {
		console.log("data", data);
<<<<<<< HEAD
		const response = await axiosInstance.post("providers/", data);
		console.log("response", response.data);
		return {
			ok: true,
			message: "አዲስ የጤና አቅራቢ ተጠቃሚ በተሳካ ሁኔታ ፈጥረዋል!",
=======
		const response = await axiosInstance.post("providers", data);
		console.log("response", response.data);
		return {
			ok: true,
			message: "New Provider is created!",
>>>>>>> 68501ca (Initial commit)
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}
