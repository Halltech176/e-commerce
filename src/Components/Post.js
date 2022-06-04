import {
  Card,
  Typography,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Avatar,
  Checkbox,
  Button,
} from "@mui/material";
import {
  MdMoreVert,
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdShare,
} from "react-icons/md";
const Post = () => {
  return (
    <Card sx ={{m: 3}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} arial-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton arial-label="settings">
            <MdMoreVert />
          </IconButton>
        }
        title="A well furnished building"
        subheader="June 2, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="../assets/house.jfif"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Checkbox
            icon={<MdOutlineFavoriteBorder />}
            checkedIcon={<MdFavorite sx={{ color: "red" }} />}
          />
        </Button>
        <Button size="small">
          <IconButton>
            <MdShare />
          </IconButton>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
