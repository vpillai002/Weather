import styled from "styled-components";

const CenterContainerBlock = styled.section`
display: flex;
flex-direction:column;
gap: 1.5rem;
text-align: center;
align-items: center;
margin: 0 auto;
padding: 2rem;
max-width: 600px;
width: 600px;
font-size: 2.5rem;
`;

const HighLow = styled.section`
display: flex;
flex-direction:row;
gap: 1rem;
font-size: 1.4rem;
`;

const WeatherDesc = styled.p`
font-size: 1.4rem;
`
export { CenterContainerBlock, HighLow, WeatherDesc };