import React, { useState } from 'react';
import { Typography, Link } from '@mui/material';

interface Props {
  text: string;
}

const BoldFirstEightWords: React.FC<Props> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  // Trim the text to remove trailing spaces or line breaks
  const trimmedText = text.trim();

  // Remove spaces from the text for length check
  const textWithoutSpaces = trimmedText.replace(/\s+/g, '');
  const isTruncated = textWithoutSpaces.length > 200 && !expanded;

  // Show only first 270 characters (including spaces) if not expanded
  const displayText = expanded ? trimmedText : trimmedText.slice(0, 270);

  // Bold the first 8 words in the displayed text
  const words = displayText.split(' ');
  const boldWords = words.slice(0, 8).join(' ');
  const remainingWords = words.slice(8).join(' ');

  return (
    <Typography sx={{ whiteSpace: 'pre-line', wordBreak: 'break-word' }}>
      <strong>{boldWords}</strong>
      {remainingWords && ` ${remainingWords}`}
      {isTruncated && (
        <>
          ...
          <Link
            component='button'
            variant='body2'
            onClick={() => setExpanded(true)}
            underline='hover'
            sx={{ cursor: 'pointer', color: 'grey.600' }}
          >
            see more
          </Link>
        </>
      )}
    </Typography>
  );
};

export default BoldFirstEightWords;
