import { setProvider } from "@/actions/provider/action";
<<<<<<< HEAD
import useToastMutation from "@/hooks/useToastMutation";
import { ProviderType } from "@/types/provider/ProviderType";

export const useAddproviderMutation = () => {
	return useToastMutation<ProviderType>(
		"addprovider",
		setProvider,
		"Member creating...",
=======
import { useAppDispatch } from "@/hooks/storehooks";
import useToastMutation from "@/hooks/useToastMutation";
import { ClearUserSlice } from "@/lib/store/redux/userSlice";
import { type ProviderType } from "@/types/provider/ProviderType";

export const useAddproviderMutation = () => {
	const dispatch = useAppDispatch();
	return useToastMutation<ProviderType>(
		"addprovider",
		setProvider,
		"Provider creating...",
>>>>>>> 68501ca (Initial commit)
		{
			onSuccess: (data, variables) => {
				// 'data' contains the response from the server
				// 'variables' contains the broker data you passed in
				console.log("provider created successfully:", data.message);
				console.log("New provider Data:", variables);
<<<<<<< HEAD

=======
				dispatch(ClearUserSlice());
>>>>>>> 68501ca (Initial commit)
				// queryClient.invalidateQueries({ queryKey: ["providers"] });
				// Example: Display a message with the provider name
			},
			onError: (error) => {
				console.error("Error creating provider:", error.response.data);
			},
		}
	);
};
