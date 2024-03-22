import { Stack, TextField } from '@mui/material'
import React from 'react'
import TypographyText from '../TypographyText'
interface InputProps {
    header: string,
    fontsize: string,
    fontweight: string,
    placeholder: string,
}
function InputField(props: InputProps) {
    return (
        <Stack gap={1} py={2}>
            <TypographyText text={props.header} fontSize={props.fontsize} fontWeight={props.fontweight} />
            <TextField placeholder={props.placeholder} fullWidth />
        </Stack>
    )
}

export default InputField