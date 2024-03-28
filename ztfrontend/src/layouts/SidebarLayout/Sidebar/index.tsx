import React from 'react'
import Stack from '@mui/material/Stack';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TypographyText from '../../../components/TypographyText';
import IconText from '../../../components/IconText';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'; import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
function Sidebar() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Stack width={'100%'} sx={{ borderRight: ' 2px solid rgb(236, 237, 239)' }} gap={6}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={1} mt={6}>
                <AcUnitIcon sx={{ width: '31px', height: '31px' }} />
                <TypographyText text="Insta Case" fontSize="25px" fontWeight="600" />
            </Stack>
            <Stack>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <ContentPasteOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="All tickets" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemIcon>
                                    <OpenInNewOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Open Tickets" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemIcon>
                                    <EventAvailableOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Tickets with Orders" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 5 }}>
                                <ListItemIcon>
                                    <HighlightOffOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Closed Tickets" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LocalOfferOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Customers" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsApplicationsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
            </Stack>
        </Stack>
    )
}

export default Sidebar;