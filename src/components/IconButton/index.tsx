import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { SxProps } from '@mui/system';

interface IconButtonProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  sx?: SxProps;
}

export default function IconButton({ title, icon, onClick, sx }: IconButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{
        ...sx,
      }}
      onClick={onClick}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {icon}
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '16px',
            letterSpacing: '0em',
            textAlign: 'left',
            padding: '8px',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Button>
  );
}