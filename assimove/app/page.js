"use client"
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {

  const carouselData = [
    {
      image: "/carousel1.png",
      title: 'Asistencia',
      description: "Asistencia especializada en la palma de tu mano"
    },
    {
      image: "https://images.unsplash.com/photo-1633466152316-d26e2ddfd831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1435&q=80",
      title: 'Accesibilidad',
      description: "Accesibilidad e inclusion como prioridad"
    },
    {
      image: "https://images.unsplash.com/photo-1633466152316-d26e2ddfd831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1435&q=80",
      title: 'Accesibilidad',
      description: "Accesibilidad e inclusion como prioridad"
    },
    // Añade más elementos según sea necesario
  ];

  const styles ={
    img:{
      width:'100%',
      height:'600px',
      objectFit:'cover',
      filter:'brightness(0.6)'
    },
    carousel:{
      maxWidth:'300px',
      height:'500px'
    },
    main:{
      height:'100%'
    },
    buttonContainer:{
      display:'flex',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'center',
      height:'90px',
    },
    title:{
      position: 'absolute',
      bottom:'120px',
      color:'#ffff',
      transform: 'translate(-50%, 0)',
      left:'50%', 
      fontSize:'32px', 
      fontWeight:'600'
    },
    description:{
      position: 'absolute',
      bottom:'60px',
      width:'80%',
      color:'#ffff',
      transform: 'translate(-50%, 0)',
      left:'50%', 
      fontSize:'22px'
    }
    

  }

  return (
    <main style={styles.main}>
      <Carousel showArrows={false} showThumbs={false} showStatus={false} showIndicators={false} style={styles.carousel}>
        {carouselData.map((item, index) => (
          <div key={index}>
            
            <img src={item.image} alt="Carousel item" style={styles.img}/>
            <p style={styles.title}>{item.title}</p>
            <p style={styles.description}>{item.description}</p>
          </div>
        ))}
      </Carousel>
      <div style={styles.buttonContainer}>
      <Button variant="contained" color="primary" sx={{marginRight:'10px', backgroundColor:'#fff', border:'solid black 1px', color:'#000', fontSize:'12px'}}>
        Iniciar Sesión
      </Button>
      <Button variant="contained" color="secondary" sx={{backgroundColor:'#000', border:'solid black 1px', color:'#ffff', fontSize:'12px'}}>
        Registrarse
      </Button>
      </div>
      

    </main>
  )
}
