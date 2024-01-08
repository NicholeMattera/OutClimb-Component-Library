import '@/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from "@/components/ui/input"

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    accept: {
      control: {
        type: 'text',
      },
      description: 'Hint for expected file type in file upload controls',
      if: {
        arg: 'type',
        eq: 'file',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
      description: 'alt attribute for the image type',
      if: {
        arg: 'type',
        eq: 'image',
      },
    },
    autoCapitalize: {
      control: {
        type: 'text',
      },
      description: 'Controls automatic capitalization in inputted text',
    },
    autoComplete: {
      control: {
        type: 'text',
      },
      description: 'Hint for form autofill feature',
    },
    capture: {
      control: {
        type: 'text',
      },
      description: 'Media capture input method in file upload controls',
      if: {
        arg: 'type',
        eq: 'file',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the command or control is checked',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the form control is disabled',
    },
    height: {
      control: {
        type: 'text',
      },
      description: 'Same as height attribute for <img>; vertical dimension',
      if: {
        arg: 'type',
        eq: 'image',
      },
    },
    max: {
      control: {
        type: 'number',
      },
      description: 'Maximum value',
    },
    maxLength: {
      control: {
        type: 'number',
      },
      description: 'Maximum length of value',
    },
    min: {
      control: {
        type: 'number',
      },
      description: 'Minimum value',
    },
    minLength: {
      control: {
        type: 'number',
      },
      description: 'Minimum length of value',
    },
    multiple: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to allow multiple values',
    },
    name: {
      control: {
        type: 'text',
      },
      description: 'Name of the form control',
    },
    pattern: {
      control: {
        type: 'text',
      },
      description: 'Pattern the value must match to be valid',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'Text that appears in the form control when it has no value set',
    },
    readOnly: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the value is editable',
    },
    required: {
      control: {
        type: 'boolean',
      },
      description: 'Whether a value is required or must be checked for the form to be submittable',
    },
    size: {
      control: {
        type: 'number',
      },
      description: 'Size of the control',
    },
    src: {
      control: {
        type: 'text',
      },
      description: 'Same as src attribute for <img>; image URL',
      if: {
        arg: 'type',
        eq: 'image',
      },
    },
    step: {
      control: {
        type: 'number',
      },
      description: 'Incremental values that are valid',
    },
    type: {
      control: {
        type: 'select',
      },
      description: 'Type of form control',
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
    },
    value: {
      control: {
        type: 'text',
      },
      description: 'The initial value of the control',
      if: {
        arg: 'type',
        neq: 'image',
      },
    },
    width: {
      control: {
        type: 'text',
      },
      description: 'Same as width attribute for <img>; horizontal dimension',
      if: {
        arg: 'type',
        eq: 'image',
      },
    },
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    disabled: false,
    type: 'text',
  },
}
