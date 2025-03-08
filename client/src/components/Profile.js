import React from 'react';
import { Card, CardContent, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();
    navigate('/profileform'); // Change the route to match your application
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', p: 2 }}>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {/* Profile Header */}
        <Box
          sx={{
            textAlign: 'center',
            p: 4,
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Avatar
            sx={{
              bgcolor: 'green',
              width: 96,
              height: 96,
              mx: 'auto',
              fontSize: 40,
            }}
          >
            M
          </Avatar>
          <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
            Mohan
          </Typography>
        </Box>

        {/* Experience Section */}
        <Box
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Experience
            </Typography>
            <Box
              sx={{
                display: 'flex',
              }}
            >
               <IconButton onClick={handleForm}>
                <EditIcon />
              </IconButton>
              <IconButton color="primary" onClick={handleForm}>
                <AddCircleIcon />
              </IconButton>
             
            </Box>
          </Box>

          {/* Experience Item 1 */}
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    AI Engineer
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    BALS • Full-time
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Bangalore
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Feb 2025 - Present
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Sample Description
                  </Typography>
                </Box>

              </Box>
            </CardContent>
          </Card>

          {/* Experience Item 2 */}
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    MERN
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    BALS • Part-time
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Bangalore
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Feb 2025 - Present
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    sadasd
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
