import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Button",
	component: Button,
	parameters: {
		layout: "centered",
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/comG15Lh7NZkdd5KFefheg/Components?type=design&node-id=2%3A8&mode=design&t=h6xECTV5yl7JmILa-1'
		}
	},

	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
	args: {
		variation: 'success',
		size: 'large',
		label: "Button",
	}
};

export const Primary: Story = {
	args: {
		variation: 'primary',
		label: "Button",
	}
};

export const Secondary: Story = {
	args: {
		label: "Button",
		variation: "secondary",
	},
};

export const Large: Story = {
	args: {
		size: "large",
		label: "Button",
		variation: "secondary",
	},
};

export const Small: Story = {
	args: {
		size: "small",
		label: "Button",
		variation: "secondary",
	},
};

export const Danger: Story = {
	args: {
		variation: "danger",
		label: "Button",
	},
};
