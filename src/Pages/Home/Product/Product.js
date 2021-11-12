import Grid from '@mui/material/Grid';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Product = ({product}) => {
    const { name, img } = product;
    return (
        <div>
            <Grid item xs={4} sm={4} md={4} ml={5} my={5}>
                <Card sx={{ minWidth: 350, border: 0 ,boxShadow: 2 }}>
                    <CardMedia
                        component="img"
                        style={{width:'auto', height:'100px', margin: '0 auto'}}
                        image={img}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                        {name}
                        </Typography>
                        <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Buy Now</Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
};

export default Product;