import React, { Component } from 'react';
import { csvParse } from 'd3';

//import styled components
import { MainWrapper, Title, GraphAndOptionsWrapper } from './../Styles/styledComponents';

//import components to render
import ChartTypeDisplayContainer from './ChartsTypeDisplayContainer.jsx';
import InputsDisplay from './InputsDisplay.jsx';
import ChartDisplay from './ChartDisplay.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import CodeDisplay from './CodeDisplay.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'Q1', value: 20 },
        { name: 'Q2', value: 70 },
        { name: 'Q3', value: 5 },
        { name: 'Q4', value: 30 }
      ],
      // will be modified to reflect the code used to build the graph
      codeText: '',

      // reflect the type of graph chosen by user
      // defaulted to Bar Chart
      type: 'BarChart',

      // options that can be modified by user for each type
      // of graphs available in the app
      graphs: {
        BarChart: [
          'barColor',
          'barMargin',
          'chartHeight',
          'chartWidth',
          'chartBGColor',
          'chartTitle',
          'xTitle',
          'yTitle',
          'transition'
        ],
        PieChart: ['chartWidth', 'chartHeight', 'chartTitle'],
        BubbleChart: ['chartWidth', 'chartHeight', 'chartTitle'],
        LineChart: ['chartTitle', 'chartWidth', 'chartHeight']
      },

      // all available options
      chartTitle: { value: 'Name', type: 'text' },
      chartHeight: { value: 300, type: 'number' },
      chartWidth: { value: 450, type: 'number' },
      chartBGColor: { value: '#fbfbfb', type: 'color' },
      xTitle: { value: 'Quartiles', type: 'text' },
      yTitle: { value: 'Rainfall (cm)', type: 'text' },
      barColor: { value: '#7e8471', type: 'color' },
      barMargin: { value: 2, type: 'number' },
      transition: { name: 'false', type: 'checkbox' }
    };

    // binding functions that are passed to children components
    this.handleChange = this.handleChange.bind(this);
    this.updateCodeText = this.updateCodeText.bind(this);
    this.changeGraph = this.changeGraph.bind(this);
    this.handleDataInput = this.handleDataInput.bind(this);
  }

  // handle user interaction with inputs
  handleChange(e) {
    let { name, type, value } = e.target;

    // parses the inputs of type number to be stored as numbers (string by default)
    if (type === 'number') {
      value = Number(value);
    }
    const newObj = Object.assign({}, this.state[name]);
    newObj.value = value;

    // update the state for corresponding options
    this.setState({
      [name]: newObj
    });
  }

  handleDataInput(file) {
    const reader = new FileReader();

    reader.onload = () => {
      const csv = reader.result;

      const data = csvParse(csv, d => ({
        name: d.name,
        value: +d.value
      }));
      this.setState({ data: data });
    };

    reader.readAsText(file, 'UTF-8');
  }

  updateCodeText(codeText) {
    this.setState({ codeText });
  }

  changeGraph(e) {
    this.setState({
      type: e.target.alt
    });
  }

  render() {
    const { graphs, type, codeText, data } = this.state;
    // filter out the options to only pass the props that correspond
    // to a chosen graph
    const optionsToPass = graphs[type].reduce((acc, option) => {
      acc[option] = this.state[option];
      return acc;
    }, {});
    return (
      <MainWrapper>
        {/* Navbar to be developed */}
        <Navbar />
        <Title>D3 Simplifier</Title>

        <ChartTypeDisplayContainer types={Object.keys(graphs)} changeGraph={this.changeGraph} />
        <GraphAndOptionsWrapper>
          {/* Container that has each option as a child components */}
          <InputsDisplay
            options={optionsToPass}
            handleChange={this.handleChange}
            handleDataInput={this.handleDataInput}
          />
          <ChartDisplay
            options={optionsToPass}
            data={data}
            updateCodeText={this.updateCodeText}
            codeText={codeText}
            type={type}
          />
        </GraphAndOptionsWrapper>

        <CodeDisplay codeText={codeText} updateCodeText={this.updateCodeText} />
        <Footer />
      </MainWrapper>
    );
  }
}

export default App;
