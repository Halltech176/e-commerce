import {Tooltip,Modal, TextField, Stack, styled, Avatar, Box, Typography, ButtonGroup,Button, Fab} from '@mui/material'
import {MdAdd,MdImageSearch,MdPersonSearch, MdVideocam,MdEmojiEmotions} from 'react-icons/md'
import {useState} from 'react'

const StyledModal = styled(Modal) ({
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
})

const UserBox = styled(Box) ({
    display : 'flex',
    alignItems : 'center', 
    gap : '10px'
})
const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
   <Tooltip onClick={() =>setOpen(true)} title='delete' sx={{position :'fixed', bottom : 20, left:{xs : 'calc(50% - 25px)', md : 30}}}>
    <Fab color ='primary' arial-label ='add'>
        <MdAdd/>
    </Fab>
   </Tooltip>
        <StyledModal
        open = {open}
        onClose = {() => setOpen(false)}
        arial-labelledby = 'modal-title'
        arial-describedby ='modal-description'
        >
            <Box bgcolor ={'background.default'} color={'text.primary'} p={3} borderRadius = {5} width={400} height = {280}>
         <Typography variant='h6' textAlign='center' color='gray'>
             Create Post
         </Typography>
         <UserBox>
             <Avatar sx ={{bgcolor : 'blue', mx:1}}>J</Avatar>
             <Typography fontWeight ={300}>John Doe</Typography>
         </UserBox>
         <TextField sx={{width : '100%'}} id='std-multi'
         multiline
         rows ={3}
         placeholder ='What is on your mind'
         variant ='standard'/>
         <Stack direction ='row' gap = {1} my={2}>
             <MdEmojiEmotions color='primary'/>
             <MdImageSearch color='secondary'/>
             <MdVideocam color='success'/>
             <MdPersonSearch color='success'/>
         </Stack>
         <ButtonGroup
         fullWidth
         variant='contained'>
             <Button>Post</Button>
         </ButtonGroup>
            </Box>

        </StyledModal>
   </>
    )
}
export default Add