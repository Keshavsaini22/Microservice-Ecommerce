import { IconButton, Stack, Box, Autocomplete, Checkbox, TextField } from '@mui/material'
import React, { useState } from 'react'
import TypographyText from '../../../components/TypographyText'
import { FileUploader } from 'react-drag-drop-files'
import DragAndDrap from '../../../components/DragAndDrap'
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CustomButton from '../../../components/CustomButton'
import { useNavigate } from 'react-router'


const fileTypes = ["JPG", "PNG"];

const top100Films = [
    { title: 'Mobile' },
    { title: 'Grocery' },
    { title: 'Computer' },
    { title: 'Kitchen' },
    { title: 'Bed' },
    { title: 'Dont know tag' },
    { title: 'Known tag' },
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function ProductRight() {

    const navigate = useNavigate();

    const [file, setFile] = useState<File[]>([]);
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    const handleChange = (file: File[]) => {
        const arrayfile = Array.from(file);
        console.log('filessssssss: ', file);
        console.log('arrayfile: ', arrayfile);

        const urls = arrayfile.map(a => {
            console.log(a, "hbk")
            return URL.createObjectURL(a)
        });
        setImageUrls((prev) => [...prev, ...urls]);
        console.log('urls: ', imageUrls);

    };

    const deleteImg = (index: number) => {
        console.log("first", index)
        setImageUrls((prev) =>
            prev.filter((_, i) => i !== index)
        )
    }
    const handleCancle = () => {
        navigate(-1)
    }
    return (
        <Stack>
            <Stack py={2} gap={1} >
                <TypographyText text={'Product Gallery'} fontSize={'14'} fontWeight={'600'} />
                <FileUploader children={<DragAndDrap file={file} />} handleChange={handleChange} multiple name="file" types={fileTypes} />
                <Stack flexWrap={'wrap'} direction={'row'} gap={2}>
                    {imageUrls?.map((a, index) => (
                        <Box key={index} className="image" sx={{ width: '80px', height: '80px', position: 'relative' }}>
                            <img src={a} alt="" />
                            <IconButton onClick={() => {
                                deleteImg(index)
                            }} sx={{ position: 'absolute', top: '5px', right: '5px', height: '15px', width: '15px', color: 'black' }}><CloseIcon sx={{ height: '15px', width: '15px' }} /></IconButton>
                        </Box>
                    ))}
                </Stack>

            </Stack>
            <Stack gap={1} py={2}>
                <TypographyText text={'Tags'} fontSize={'14'} fontWeight={'600'} />
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={top100Films}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.title}
                        </li>
                    )}
                    style={{}}
                    renderInput={(params) => (
                        <TextField   {...params} placeholder="Add tags..." />
                    )}
                />
            </Stack>
            <Stack direction={'row'} py={2} gap={5}>
                <CustomButton sxprops={{ sx: { width: '50%', height: '48px' } }} variant="contained" text="Save" onclick={function (): void {
                    throw new Error('Function not implemented.')
                }} />
                <CustomButton sxprops={{ sx: { width: '50%', height: '48px' } }} variant="outlined" text="Cancel" onclick={handleCancle} />
            </Stack>
        </Stack>

    )
}

export default ProductRight