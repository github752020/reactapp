import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        �
    </Box>
);


export default function Detail(props: any) {
    return (
        
        <Box sx={{ width: '100%' }}>
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography variant="body2" sx={{
                        fontFamily: 'monospace'
                    }}>
                        <CallIcon />{props.phone}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography variant="body2" sx={{
                        fontFamily: 'monospace'
                    }}>
                        <EmailIcon />{props.email}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography variant="body2" sx={{
                        fontFamily: 'monospace'
                    }}>
                        <LanguageIcon />{props.website}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body2" sx={{
                fontFamily: 'monospace'
            }}>
                <BusinessIcon /> {props.suite}{bull}{props.street}{bull}{props.city}{bull}{props.zipcode}
            </Typography>
            
        </Box>
    );
}
