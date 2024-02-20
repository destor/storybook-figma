import React from "react";

interface ButtonProps {
	variation?: ('danger' | 'success' | 'info' | 'secondary' | 'primary') 
	size?: "small" | "medium" | "large";
	label: string;
	className?: string;
	onClick?: () => void;
}

interface BaseButtonProps extends React.PropsWithChildren {
	className?: string;
	onClick?: () => void;
}
const BaseButton = ({
	children, onClick, className, ...props
}: BaseButtonProps ) => {
	return (
		<button
			type="button"
			className={`btn-base ${className ?? ''}`}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export const Button = ({
	size = "medium",
	variation = "secondary",
	className,
	label,
	...props
}: ButtonProps) => {
	const sizeClass = () => {
		switch (size) {
			case "small":
				return "h-8 px-4 m-2 text-sm";
			case "large":
				return "h-12 px-6 m-2 text-lg";
			default:
				return "h-10 px-5 m-2";
		}
	}

	const variationClass = () => {
		switch (variation) {
			case "danger":
				return "text-red-100 bg-red-700 hover:bg-red-800";
			case "success":
				return "text-green-100 bg-green-700 hover:bg-green-800";
			case "info":
				return "text-blue-100 bg-blue-700 hover:bg-blue-800";
			case "primary":	
				return " bg-blue-500 hover:bg-blue-70 text-white";
			default: // & secondary
				return "bg-gray-500 hover:bg-gray-700 text-white";
		}
	}

	return (
		<BaseButton
			className={`${sizeClass()} ${variationClass()} ${className}`}
			{...props}
		>
			{label}
		</BaseButton>
	);
};

