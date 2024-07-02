import { Code } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import hljs from "highlight.js";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const ShowCodeButton = ({ qNum = 0 }) => {
  const [codeNum, setCodeNum] = useState(0);
  const [codeText, setCodeText] = useState("");

  const handleClick = async (qNum) => {
    try {
      const response = await fetch(`src/Algorithms/2023/day${qNum}.ts`);
      if (response.ok) {
        const text = await response.text();
        setCodeText(text);
      } else {
        toast(`Error fetching file`, { type: "error", closeOnClick: true });
      }
    } catch (error) {
      toast(`Error fetching file`, { type: "error", closeOnClick: true });
    }
  };

  return (
    <>
      <Tooltip title="Show Code" disableInteractive>
        <IconButton
          onClick={() => {
            setCodeNum(qNum);
            handleClick(qNum);
          }}
        >
          <Code />
        </IconButton>
      </Tooltip>
      <Dialog
        open={!!codeNum}
        onClose={() => setCodeNum(0)}
        transitionDuration={{ enter: 400, exit: 0 }}
        PaperProps={{
          sx: { width: "40rem", maxHeight: "50rem", overflowY: "auto" },
        }}
      >
        <DialogTitle>Question: {qNum}'s Code</DialogTitle>
        <DialogContent
          sx={{ padding: "0 1rem 0 1rem", border: "1px solid white" }}
        >
          {React.Children.toArray(
            codeText
              .split("\n")
              .filter((s) => !s.includes("sourceMappingURL"))
              .map((line) => (
                <DialogContentText
                  style={{
                    paddingLeft: `${
                      (line.length - line.trim().length) * 0.5
                    }rem`,
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: hljs.highlight(line, {
                      language: "javascript",
                    }).value,
                  }}
                ></DialogContentText>
              ))
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCodeNum(0)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
