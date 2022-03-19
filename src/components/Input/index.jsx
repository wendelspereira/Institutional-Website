import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useField } from '@unform/core'

export default function BasicTextFields({ name, label, multiline = false }) {
    const inputRef = React.useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(name)

    React.useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])

    return (
        <Box
            sx={{
                '& > :not(style)': { width: '100%' },
            }}
            // noValidate
            autoComplete="off"
        >
            <TextField
                inputRef={inputRef}
                error={Boolean(error)}
                helperText={error}
                id="outlined-basic"
                name={name}
                label={label}
                variant="outlined"
                multiline={multiline}
                sx={{
                    backgroundColor: "#f9f9f9",
                    margin: '0.5rem'
                }}
            />
        </Box>
    );
}