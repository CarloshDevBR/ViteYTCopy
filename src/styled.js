import { Box,  ListItemText, ListItem } from '@mui/material';
import styled from 'styled-components';

export const BoxCustomized = styled(Box)`
    height: 100vh;
    background-color: #181818;
`

export const ListItemTextCustomized = styled(ListItem)`
    display: flex;
    font-size: 14px;
`

export const ListItemCustomized = styled(ListItemText)`
    display: flex;
    gap: 30px; 
    padding-top: 4px; 
    padding-bottom: 4px;
`