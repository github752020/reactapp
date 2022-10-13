import * as React from 'react';
import Detail from "./Detail";

import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Avatar,
    CardHeader,
    IconButton,
} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {
    return (
        
        <Box m={2} pt={3}>
            <Card sx={{ minWidth: 275 }}>
                <CardHeader
                    avatar={<Avatar>{props.id}</Avatar>}
                    title={props.company}
                    subheader={props.bs}
                    action={
                        <IconButton>
                            <AddAPhotoIcon />
                        </IconButton>
                    }
                />
            <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {}
                </Typography>
                    <Typography variant="h5" component="div">
                        {props.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.catchPhrase}
                </Typography>
                        <Detail
                            email={props.email}
                            phone={props.phone}
                            website={props.website}
                            suite={props.suite}
                            street={props.street}
                            city={props.city}
                            zipcode={props.zipcode}
                        />
                    <br />
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
            </Box>
    );
}
