import styled from 'styled-components';
/**
 * grid styled component
 */
export const Grid = styled.div`
  display: grid;
  margin : 0 auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(475px, 1fr));
 `
export const GridItem = styled.div`
    grid-column: span 1;
    padding: 1rem;
  
    `



