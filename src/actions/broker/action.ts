"use server";

import { type BrokerType } from "@/types/broker/BrokerType";

import axiosInstance from "../axiosInstance";
import getErrorMessage from "../getErrorMessage";

// const API_POST = `${process.env.REACT_APP_BASE_URL}/members/individual`;

export async function setBroker(data: BrokerType) {
	try {
		const response = await axiosInstance.post("brokers/", data);
		console.log("response", response.data);
		return {
			ok: true,
<<<<<<< HEAD
			message: "አዲስ ተጠቃሚ በተሳካ ሁኔታ ፈጥረዋል!",
=======
			message: "New Broker is Added",
>>>>>>> 68501ca (Initial commit)
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}
