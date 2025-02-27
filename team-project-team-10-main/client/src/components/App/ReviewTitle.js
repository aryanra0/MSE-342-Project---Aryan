import React from 'react';
import {TextField} from '@mui/material';

function ReviewTitle({enteredTitle, handleTitleChange}) {
  return (
    <TextField
      label="Enter your review title"
      value={enteredTitle}
      onChange={handleTitleChange}
      fullWidth
      id="review-title"
    />
  );
}

export default ReviewTitle;
