import  React from 'react';
import { Typography, Container, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';

const About = () => {
    const cards = [{name: "Sanjay Sharma", image:"", role: "Senior Software Engineer 2"},{name: "Saketh Yerra", image:"", role: "Senior Software Engineer 2"},{name: "Rohan Kothapalli", image:"", role: "Senior Software Engineer 1"},{name: "Gayathri Mandala", image:"", role: "Senior Software Engineer 1"},{name: "Ajay Police Patil", image:"./ajay.jpg", role: "Senior Software Engineer 1"}];

    return (
        <main className='aboutpage'>
            <div className='aboutpage'>
                <Box
                    sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography 
                            component="h3"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            >
                            About
                        </Typography>
                        <Typography 
                            variant="h5" 
                            align="center" 
                            color="text.secondary" 
                            paragraph>
                        Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks
                        don&apos;t simply skip over it entirely............
                        </Typography>
                    </Container>
                </Box>

                <Box
                    sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography 
                            component="h3"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            >
                            Meet The Team
                        </Typography>
                    </Container>
                </Box>
            
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                            <CardMedia
                                component="img"
                                sx={{
                                // 16:9
                                pt: '50%',
                                }}
                                image={card.image}
                                alt={card.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                {card.name}
                                </Typography>
                                <Typography>
                                {card.role}
                                </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
          </div>
        </main>
    )
}

export default About;