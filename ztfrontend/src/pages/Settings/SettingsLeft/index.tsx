import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
function SettingsLeft() {
    return (

        <List aria-labelledby="nested-list-subheader"  >
            <ListItemButton>
                <ListItemIcon>
                    <InfoOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Personal Information" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <SecurityOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Security" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AccountBalanceWalletOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Billing & Tax" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ContentPasteOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Plans" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingBagOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Linked Shops" />
            </ListItemButton>
        </List>

    )
}

export default SettingsLeft