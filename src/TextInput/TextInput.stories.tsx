import {
  TextInput,
  TextInputProps,
  TextInputIconProps,
  TextInputRootProps,
} from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.TextInputRoot,
  args: {
    children: [
      <TextInput.TextInputIcon>
        <Envelope />
      </TextInput.TextInputIcon>,
      <TextInput.TextInputInput placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.TextInputInput placeholder="Type your e-mail address" />
    ),
  },
};
