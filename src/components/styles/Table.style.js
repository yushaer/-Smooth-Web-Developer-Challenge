import styled from 'styled-components';
/**
 * table styled component
 */
const Table = styled.table`
  width: 100%; 
 
  
  tr:nth-of-type(odd) { 
  
  background-color:rgb(202 191 191 / 20%);
  }
  tr:hover {
      background-color: rgba(1,1,1,0.2);
      color: white;
    }


  th { 
    background: #333; 
    color: white; 
    font-weight: bold; 
}
td, th { 
  padding: 6px; 
  border: 1px solid #ccc; 
  text-align: left; 
}

`;
export default Table;