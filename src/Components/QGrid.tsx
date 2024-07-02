import { Box, Grid, Typography } from "@mui/material";
import { ShowCodeButton } from "./ShowCodeButton";
import { SolveFormButton } from "./SolveFormButton";

export const QGrid = () => {
  return (
    <>
      <Grid
        container
        gap="1rem"
        rowGap="2rem"
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "4rem",
          width: "60%",
        }}
      >
        {Array(25)
          .fill(0)
          .map((_, i) => (
            <Grid
              key={`Q${i}`}
              md={2}
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                rowGap: "0.3rem",
                borderRadius: "1rem",
                border: "1px solid cyan",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-evenly"
                height="1.5rem"
                alignItems="center"
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    userSelect: "none",
                  }}
                >
                  Question {i + 1}
                </Typography>
                <ShowCodeButton qNum={i + 1} />
              </Box>
              <SolveFormButton qNum={i + 1} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
