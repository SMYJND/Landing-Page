import React from "react";
import { Grid, TextField, Button, Box, Typography } from "@mui/material";

const Form = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Send Us a Message
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="firstName"
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="lastName"
              label="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="email"
              label="Email"
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="subject"
              label="Subject"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="message"
              label="Message"
              variant="outlined"
              inputProps={{ sx: { height: "100px" } }}
            />
          </Grid>

          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
