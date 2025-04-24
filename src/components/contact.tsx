import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Button, Grid, Paper, TextField, Typography, Divider, IconButton, Snackbar, Alert } from '@mui/material';
import { Email as EmailIcon, WhatsApp as WhatsappIcon, GitHub as GithubIcon } from '@mui/icons-material';
import { SnackbarCloseReason } from '@mui/material';
import "./contact.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const serviceID = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.REACT_APP_EMAILJS_USER_ID;
  console.log(serviceID, templateID, userID);

  const [open, setOpen] = React.useState({ open: false, message: "", severity: "success" });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDataToSend = {
      from_name: formData.name,
      from_email: formData.email,
      from_subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, formDataToSend, userID)
      .then(
        (result) => {
          console.log(result.text);
          setOpen({ open: true, message: "Message sent successfully", severity: "success" })
        },
        (error) => {
          console.log(error.text);
          alert('Error sending message. Please try again.');
        }
      );
  };

  return (
    <Box sx={{
      maxWidth: 800,
      marginLeft: { xl: '14.5%', md: '8%', sm: '9%', xs: '0%' },
      margin:{xs:"auto", sm:"auto"},
      padding: 4,
      marginTop: -5,
      width: { xs: '80%', sm: '60%', md: '70%', lg: '70%', xl: '90%' }
    }}>
      <Paper elevation={3} sx={{
        padding: 4, marginTop: 4, backgroundColor: '#f4fbf6', boxShadow: 'none',
        borderRadius: 15, border: '1px solid rgb(209, 235, 222)'
      }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'gray',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'gray',
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'gray',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'gray',
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                margin="normal"
                required
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'gray',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'gray',
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                required
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'gray',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'gray',
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  marginTop: 2,
                  color: 'white',
                  boxShadow: 'none',
                  backgroundColor: 'rgb(100, 128, 114)',
                }}
              >
                Send Message
              </Button>
              <Snackbar open={open.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity={open.severity} variant="filled" sx={{ width: '100%' }}>
                  {open.message}
                </Alert>
              </Snackbar>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Or contact me directly via:</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  borderColor: 'rgb(161, 192, 177)',
                  color: 'rgb(100, 128, 114)',
                  "&:hover": {
                    backgroundColor: 'rgb(213, 236, 225)',
                  },
                }}
              >
                hikolakita.dev@gmail.com
              </Button>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" gutterBottom>Chat with me:</Typography>
            <Box sx={{ display: 'flex', gap: 0.4 }}>
              <IconButton aria-label="WhatsApp" size="large"><WhatsappIcon /></IconButton>
              <IconButton aria-label="GitHub" size="large"><GithubIcon /></IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ContactForm;
