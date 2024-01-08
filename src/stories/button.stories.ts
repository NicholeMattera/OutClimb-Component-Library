import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'

import '@/index.css'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Prevents the user from interacting with the button: it cannot be pressed or focused.',
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      mapping: {
        Primary: 'primary',
        Secondary: 'secondary',
      },
      options: ['Primary', 'Secondary'],
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      mapping: {
        Default: 'default',
        Small: 'sm',
        Large: 'lg',
      },
      options: ['Default','Small','Large'],
   },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
}
