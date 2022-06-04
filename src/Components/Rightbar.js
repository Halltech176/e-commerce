import {Box, Typography,Avatar, AvatarGroup, ImageListItem, ImageList,Divider, List,ListItemAvatar, ListItemText, ListItem} from '@mui/material'
import React from 'react'
const Rightbar = () =>{
    return (
      <Box flex={2}   sx={{display : {xs : 'none', sm: 'block'}}} p={2}>
          <Box position='fixed'>
          <Typography variant ='h6'fontWeight = {100}>Online Friends</Typography>
          <AvatarGroup max={4}>
          <Avatar alt='img-1' src='../assets/person/1.jpeg'/>
          <Avatar alt='img-2' src='../assets/person/2.jpeg'/>
          <Avatar alt='img-3' src='../assets/person/3.jpeg'/>
          <Avatar alt='img-4' src='../assets/person/4.jpeg'/>
          <Avatar alt='img-5' src='../assets/person/5.jpeg'/>
          <Avatar alt='img-6' src='../assets/person/6.jpeg'/>
          <Avatar alt='img-7' src='../assets/person/7.jpeg'/>
          <Avatar alt='img-8' src='../assets/person/8.jpeg'/>
          <Avatar alt='img-9' src='../assets/person/9.jpeg'/>
          </AvatarGroup>

          <Typography my={3} variant ='h6' fontWeight = {100}>Latest photos</Typography>
          <ImageList cols ={3} rowHeight ={100} gap={5}>
              <ImageListItem>
                  <img alt='img1' src ='https://material-ui.com/static/images/image-list/breakfast.jpg'/>
              </ImageListItem>
              <ImageListItem>
                  <img alt='img3' src ='https://material-ui.com/static/images/image-list/camera.jpg'/>
              </ImageListItem>
              <ImageListItem>
                  <img alt='img2' src ='https://material-ui.com/static/images/image-list/burgers.jpg'/>
              </ImageListItem>
          </ImageList>

          <Typography my={3} variant ='h6' fontWeight = {100}>Latest Conversation</Typography>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          </Box>
      </Box>
    )
  }
  export default Rightbar