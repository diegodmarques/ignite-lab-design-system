import {Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children:'Create Account',
        gotico: false,
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {

    argTypes: {
        // children: {
        //     table: {
        //         disable: true,
        //     }
        // },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}

