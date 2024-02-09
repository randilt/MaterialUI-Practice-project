import { Box } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box
      bgcolor="coral"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">Rightbar</Box>
    </Box>
  );
};
