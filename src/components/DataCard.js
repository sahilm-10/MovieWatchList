import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';
import '../App.css';

const DataCard = ({movie})=>{
  const [expanded, setExpanded] = React.useState(false);

  console.log(movie);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='movie-datacard'> 
    <Card sx={{ maxWidth: 345 , margin:'30px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        title={movie.original_title}
        subheader={movie?.release_date?.substring(0,4)}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
export default DataCard;