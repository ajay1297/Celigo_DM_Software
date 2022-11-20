import  React from 'react';
import { Typography, Select, MenuItem, Container, Box, Button, TextField, FormControl, InputLabel } from '@mui/material';


const Page1 = () => {
    const resourceTypes = ['Export', 'Import', 'Integration']
    const [resourceType, setResourceType] = React.useState('');
    const [filter, setFilter] = React.useState('');
    const [path, setPath] = React.useState('');


    const handleChangeResource = (event) => {
        setResourceType(event.target.value);
    };
    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };const handleChangePath = (event) => {
        setPath(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
          resourceType: resourceType,
          filter: filter,
          path: path
        });
        setResourceType('')
        setFilter('')
        setPath('')
    };

    return (
        <main className='homepage'>
            <div className='homepageheader'>
                <Box
                    sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                    }}
                >
                <Container maxWidth="sm">
                    <Typography 
                        component="h4"
                        variant="h5"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        >
                        Page1 Header
                    </Typography>
                </Container>
                </Box>
            </div>
            <div>
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Resource Type *</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="resourceType"
                            value={resourceType}
                            label="Resource Type"
                            required
                            name="Resource Type"
                            onChange={handleChangeResource}
                            >
                            {resourceTypes.map((resource) => (
                                <MenuItem key={resource} value={resource.toLocaleLowerCase()}>{resource}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="filter"
                        label="Filter"
                        name="filter"
                        value={filter}
                        onChange={handleChangeFilter}
                    /> 
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="path"
                        label="Path"
                        name="path"
                        value={path}
                        onChange={handleChangePath}
                    /> 
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                    Execute
                    </Button>
                </Box>
            </Box>
            </div>
        </main>
    )
}

export default Page1;