import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const categories = [
  'All',
  'Music',
  'Gaming',
  'News',
  'Sports',
  'Education',
  'Comedy',
  'Technology',
];

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = (category) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
    if (onClose) onClose();
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          background: `linear-gradient(180deg, #1A1F3A 0%, #0A0E27 100%)`,
          borderRight: '2px solid #FF00FF',
          boxShadow: '2px 0 20px rgba(255, 0, 255, 0.2)',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ px: 2, py: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: '#00D9FF',
            fontWeight: 700,
            textShadow: 'none',
            letterSpacing: 1,
            mb: 2,
          }}
        >
          CATEGORIES
        </Typography>
      </Box>
      <List sx={{ width: 250 }}>
        {categories.map((cat, index) => (
          <ListItem key={cat} disablePadding>
            <ListItemButton
              onClick={() => handleClick(cat)}
              sx={{
                color: '#E0E0FF',
                transition: 'all 0.3s ease',
                borderLeft: '3px solid transparent',
                pl: 2.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 255, 0.1)',
                  borderLeftColor: '#FF00FF',
                  color: '#FF00FF',
                  pl: 3,
                  textShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
                },
              }}
            >
              <ListItemText
                primary={cat}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: '1rem',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
 
