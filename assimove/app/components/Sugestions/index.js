import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {Typography} from '@mui/material'
export const SuggestionList = () => {
    // Aquí puedes colocar la lista de sugerencias con sus imágenes y subtítulos
    const suggestions = [
      { image: 'https://www.iserlohn.de/fileadmin/_processed_/5/a/csm_rollstuhl_128779959_380px_20967c469e.jpg', title: 'Ir al banco' },
      { image: 'https://hubpublishing.co.uk/wp-content/uploads/2020/04/Hannah.jpg', title: 'Ir a consulta medica' },
      { image: 'https://th.bing.com/th/id/OIP.8etJ5Uq11uG5NhxODermCAHaFX?pid=ImgDet&rs=1', title: 'Ir a hacer deporte' },
      { image: 'https://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Disabled-cuts-welfare-850619.jpg', title: 'Ir a hacer la despensa' },
      { image: 'https://ak3.picdn.net/shutterstock/videos/11241833/thumb/1.jpg', title: 'Ir a tomar un paseo' },
      { image: 'https://th.bing.com/th/id/OIP.JG_Mo1WwDoDcE8r9BZsZhAHaEK?pid=ImgDet&rs=1', title: 'Ir a comprar ropa' },
    ];

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} >
        {suggestions.map((suggestion, index) => (
          <div key={index}>
            <img src={suggestion.image} alt={suggestion.title} style={{ width: '100px', height: '100px' }} />
            <Typography variant="body2">{suggestion.title}</Typography>
          </div>

        ))}

      </Slider>
    );
  };