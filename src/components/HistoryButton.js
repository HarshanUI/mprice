import React from 'react';
import { makeStyles } from "@material-ui/core";

const HistoryButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    HistoryButton: {
      border: "1px solid #ff00ef",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      cursor: "pointer",
      backgroundColor: selected ? "#ff00ef" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#ff00ef",
        color: "black",
      },
      width: "22%",
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.HistoryButton}>
      {children}
    </span>
  );
};

export default HistoryButton;
