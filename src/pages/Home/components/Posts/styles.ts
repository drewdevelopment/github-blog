import { styled } from "../../../../styles";

export const Post = styled('div', {
  width: '26rem',
  height: '16.25rem',
  padding: '2rem',
  borderRadius: '0.625rem',
  backgroundColor: '$blue600',
  
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$blue500',
    transition: '0.2s',
  }
});

export const Title = styled('span', {
  display: 'flex',
  flexDirection: 'space-between',
  marginBottom: '1.25rem',

  strong: {
    display: '-webkit-box',
    fontSize: '1.25rem',
    color: '$white',
    maxWidth: '17.6rem',
    overflow: 'hidden',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },

  p: {
    fontSize: '0.875rem',
    color: '$blue300',
    marginTop: '0.3125rem',
  }
});

export const Description = styled('div', {
  display: '-webkit-box',
  fontSize: '1rem',
  color: '$blue200',
  overflow: 'hidden',
  '-webkit-line-clamp': 4,
  '-webkit-box-orient': 'vertical',

  strong: {
    fontWeight: 400,
  },
});