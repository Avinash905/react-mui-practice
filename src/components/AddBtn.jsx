import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  Videocam,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "10px",
  marginBottom: "20px",
});

const AddBtn = ({ mode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 20 },
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
        >
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={mode === "dark" ? "black" : "white"}
          color={"text.primary"}
          width={500}
          height={330}
          borderRadius={3}
          p={3}
        >
          <Typography
            variant="h5"
            color={"gray"}
            textAlign="center"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
            <Typography
              fontWeight={500}
              variant="span"
            >
              John Doe
            </Typography>{" "}
          </UserBox>
          <TextField
            placeholder="What's on your mind"
            rows={2}
            multiline
            sx={{ width: "100%" }}
            variant="standard"
          />
          <Stack
            direction="row"
            gap={1}
            mt={2}
            mb={5}
          >
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <Videocam color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddBtn;
