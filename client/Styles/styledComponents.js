import styled from 'styled-components';

export const MainWrapper = styled.main`
  font-family: font-family: 'Noto Sans', sans-serif;
  text-align: center;
  margin: 0.75em;
  width: 100%;
  padding: 0 10%;
  overflow-x: hidden;
  box-sizing: border-box;
`;
  
export const Title = styled.h1`
  color: #001230;
  font-family: 'Major Mono Display', monospace;
  font-size: 4em;
  margin: 0.5em 0;
`;
  
export const ChartWrapper = styled.section`
  overflow-x: auto;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsWrapper = styled.section`
  flex-direction: column;
  display: flex;
  line-height: 2em;
  margin: 40px 10px 0 40px;
  min-width: 175px;
  height: auto;
  max-height: 100%;
  overflow-y: auto;
`;

export const GraphAndOptionsWrapper = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 2em 0;
  height: 400px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: baseline;
  max-width: 15em;
  justify-content: space-between;
  font-family: 'Cantarell', sans-serif;
  font-size: 1em;
  padding: 0.2em;
  cursor: pointer;

  & > * {
    cursor: pointer;
  }

  &:hover {
    background-color: #f4f6f7;
  }
`;

export const Input = styled.input`
  margin: 0 2em;
  width: 3em;
  font-size: inherit;
  text-align: center;
  margin: 0;

  &[name="yTitle"], &[name="xTitle"], &[name="chartTitle"] {
    width: 6em;
  }
`;

export const FooterWrapper = styled.footer`
  font-size: 0.9em;
  margin: 3em 0 1em 0;
`;

export const Button = styled.button`
  font-size: 1.3em;
  padding: 0.5em;
  border-radius: 5px;
  outline: none;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);

  &:hover {
    background-color: white;
  }
`;

export const PreviewsWrapper = styled.div `
  display: flex;
  width: 80%;
  margin: 0 auto;
  overflow-x: auto;
  justify-content: center;

  & > div {
    padding: 0 10px
  }
`;

