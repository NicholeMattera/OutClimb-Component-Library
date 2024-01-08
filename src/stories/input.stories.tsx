import type { Meta, StoryObj } from '@storybook/react'

import { Input } from "@/components/ui/input"

import '@/index.css'

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the form control is disabled',
    },
    max: {
      control: {
        type: 'number',
      },
      description: 'Maximum value',
    },
    min: {
      control: {
        type: 'number',
      },
      description: 'Minimum value',
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
