"use client";
import { Box, Container, Typography, IconButton, InputBase } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MicIcon from '@mui/icons-material/Mic';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { alpha } from '@mui/system';



export default function HomePage() {
  const handleMicClick = () => {
    // Aquí se puede implementar la funcionalidad para activar el micrófono del navegador
    console.log('Mic clicked');
  };
  

  

  return (
    // <Container maxWidth="md" sx={{ backgroundColor: 'white' }}>
    //   <Box
    //     display="flex"
    //     flexDirection="column"
    //     alignItems="center"
    //     justifyContent="center"
    //     style={{ gap: '1em' }}
    //   >
    //     <Typography variant="h4" component="h1">
    //       Encuentra a un Asistente
    //     </Typography>

    //     <Box
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="start"
    //       bgcolor="#00260F"
    //       borderRadius="15px"
    //       width="90%"
    //       height="75px"
    //       style={{ padding: '1em' }}
    //     >
    //       <Box
    //         bgcolor={alpha('#FFFFFF', 0.5)}
    //         borderRadius="100%"
    //         display="flex"
    //         justifyContent="center"
    //         alignItems="center"
    //         width="50px"
    //         height="50px"
    //       >
    //         {/* Aquí puedes poner el ícono que quieras */}
    //         <LocalOfferIcon sx={{ color: 'white', fontSize: '10px' }} />
    //       </Box>
    //       <Box display="flex" flexDirection="column">
    //         <Typography variant="body1" color="#fff">
    //           Calendariza con anticipación
    //         </Typography>
    //         <Typography variant="body2" color="#fff">
    //           Obtén un 10% de descuento en tu próximo move
    //         </Typography>
    //       </Box>
    //     </Box>

    //     <Box
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="start"
    //       bgcolor="#D9D9D9"
    //       borderRadius="25px"
    //       width="90%"
    //       height="50px"
    //       style={{ padding: '1em' }}
    //     >
    //       <InputBase placeholder="Buscar" style={{ color: '#3C3C43', flexGrow: 1 }} />
    //       <IconButton onClick={handleMicClick}>
    //         <MicIcon />
    //       </IconButton>
    //     </Box>
    //   </Box>

    //   <Typography variant="h5" component="h2">
    //     Sugerencias
    //   </Typography>
    //   <SuggestionList />


    //   <Typography variant="h5" component="h2">
    //     Descubrir
    //   </Typography>
    //   <Box
    //     display="flex"
    //     justifyContent="space-between"
    //     alignItems="center"
    //     bgcolor="#232D71"
    //     borderRadius="25px"
    //     p={2}
    //     my={2}
    //     style={{ gap: '1em' }}
    //   >
    //     <Box display="flex" flexDirection="column" style={{ gap: '0.5em' }}>
    //       <Typography variant="h6" component="h2" fontWeight="bold" sx={{ color: 'white' }}>
    //         Busca al mejor asistente para tí
    //       </Typography>
    //       <Box display="flex" alignItems="center" style={{ gap: '0.5em' }}>
    //         <Typography variant="body1" sx={{ color: 'white' }}>Descubre</Typography>
    //         <ArrowForwardIosIcon sx={{ color: 'white' }} />
    //       </Box>
    //     </Box>
    //     <Box position="relative" width={100} height={100}>
    //       <img src="/find.png" style={{ objectFit: 'cover' }} alt="Imagen descriptiva" />
    //     </Box>
    //   </Box>

    // </Container>
    <div>hola</div>
  );
}
