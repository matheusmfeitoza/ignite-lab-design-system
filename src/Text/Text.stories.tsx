import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Loren ipsum",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const Paragraph: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>This is a paragraph</p>,
  },
};

export const Title: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <h1>This is a title</h1>,
    size: "lg",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};
