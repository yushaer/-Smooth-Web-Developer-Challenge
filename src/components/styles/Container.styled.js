
import styled from 'styled-components';
/**
 * Container styled component
 */
const Container = styled.div.attrs((props) => ({
  width: props.width || "80%",

  background: props.background || "white",
  padding: props.padding || "25px",
  margin: props.margin || "0 auto",
}))`
  
    width: ${(props) => props.width}; // Falls back to 100%
    min-height: 100vh;
    padding: ${(props) =>
    (props.padding)};
     margin:0 auto;
      margin-top: 1rem;
    background: ${(props) => props.background};

    text-align: center;
  border-radius: 5px;
 
   box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    align-items: center;
    justify-content: center;


  `;
export default Container;
