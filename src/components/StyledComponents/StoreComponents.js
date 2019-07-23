import styled from 'styled-components/macro'

export const RatingIndicator = styled.span`
  background: #f6c57d;
  padding: 2px 10px;
  border-radius: 12px;
  color: white;
  white-space: nowrap;
  
  ::after {
    content: ' ★';
  }
`

export const InStock = styled.span`
  background: ${
    props => {
      if (!props.inStock) {
        return '#820500';
      }
      else{
        return '#00620c';
      }
    }
  };
  padding: 2px 10px;
  border-radius: 12px;
  color: white;
  width: 111px;
  white-space: nowrap;
  font-size: 12px;
  width: 92px;
  display: inline-block;
  text-align: center;
  
  &:after {
    content: ${
      props => {
        if (!props.inStock) {
          return '"Out of Stock"';
        }
        else{
          return '"In Stock"';
        }
      }
    };
  }
`
