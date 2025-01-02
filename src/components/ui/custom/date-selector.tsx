"use client";

import * as React from "react";

import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { formatToMMDDYYYY } from "@/lib/utils/dateUtils";

import { Calendar } from "./calender";

type DateSelectorProps = {
	selectedDate?: Date;
	onDateChange: (date: Date | undefined) => void;
	placeholder?: string;
	buttonClassName?: string;
<<<<<<< HEAD
=======
	yearValidation?: { min: number; max: number };
>>>>>>> 68501ca (Initial commit)
};

export const DateSelector: React.FC<DateSelectorProps> = ({
	selectedDate,
	onDateChange,
<<<<<<< HEAD
=======
	yearValidation = { min: 1699, max: 2030 },
>>>>>>> 68501ca (Initial commit)
	placeholder = "Pick a date",
	buttonClassName,
}) => {
	const [year, setYear] = React.useState<number | undefined>(
		selectedDate?.getFullYear()
	);

<<<<<<< HEAD
	// Update year state when selectedDate changes
=======
>>>>>>> 68501ca (Initial commit)
	React.useEffect(() => {
		setYear(selectedDate?.getFullYear());
	}, [selectedDate]);

<<<<<<< HEAD
	const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newYear = Number(event.target.value);
		setYear(newYear);

		if (selectedDate) {
			const updatedDate = new Date(selectedDate);
			updatedDate.setFullYear(newYear);
			onDateChange(updatedDate);
		} else {
			// Create a new date if no date is selected
			const newDate = new Date();
			newDate.setFullYear(newYear);
			onDateChange(newDate);
		}
	};

=======
>>>>>>> 68501ca (Initial commit)
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
<<<<<<< HEAD
						"w-full justify-start text-left font-normal",
=======
						"w-full justify-start text-left bg-background font-normal",
>>>>>>> 68501ca (Initial commit)
						!selectedDate && "text-muted-foreground",
						buttonClassName
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{selectedDate ? (
						formatToMMDDYYYY(selectedDate)
					) : (
						<span>{placeholder}</span>
					)}
				</Button>
			</PopoverTrigger>
<<<<<<< HEAD
			<PopoverContent className="w-auto p-0" align="start">
				<div className="p-2">
					<select
						className="mb-2 w-full border border-gray-300 rounded-md p-1"
						value={year || ""}
						onChange={handleYearChange}
					>
						{Array.from({ length: 50 }, (_, i) => {
							const yearOption = new Date().getFullYear() - 25 + i;
							return (
								<option key={yearOption} value={yearOption}>
									{yearOption}
								</option>
							);
						})}
					</select>
=======
			<PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
				<div className="p-2">
>>>>>>> 68501ca (Initial commit)
					<Calendar
						mode="single"
						selected={selectedDate}
						onSelect={onDateChange}
						initialFocus
						captionLayout="dropdown-buttons"
<<<<<<< HEAD
						fromYear={1899}
						toYear={2030}
=======
						fromYear={yearValidation.min}
						toYear={yearValidation.max}
>>>>>>> 68501ca (Initial commit)
					/>
				</div>
			</PopoverContent>
		</Popover>
	);
};
