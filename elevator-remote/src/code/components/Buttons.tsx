import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

interface Props {
  onClick: (floorNumber: number) => void;
}

const Buttons = ({ onClick }: Props) => {
  const buttonClicked = (e: any) => onClick(e.currentTarget.value);

  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        <Button value={1} onClick={buttonClicked}>
          One
        </Button>
        <Button value={4} onClick={buttonClicked}>
          Four
        </Button>
        <Button value={7} onClick={buttonClicked}>
          Seven
        </Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        <Button value={2} onClick={buttonClicked}>
          Two
        </Button>
        <Button value={5} onClick={buttonClicked}>
          Five
        </Button>
        <Button value={8} onClick={buttonClicked}>
          Eight
        </Button>
        <Button
          color="success"
          variant="contained"
          value={0}
          onClick={buttonClicked}
        >
          Zero
        </Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        <Button value={3} onClick={buttonClicked}>
          Three
        </Button>
        <Button value={6} onClick={buttonClicked}>
          Six
        </Button>
        <Button value={9} onClick={buttonClicked}>
          Nine
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Buttons;
