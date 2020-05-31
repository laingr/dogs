import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import Loader from 'react-loader-spinner';

const colors = [
  '#222745',
  '#8b8780',
  '#c6b9bc',
  '#2954a7',
  '#ba542c',
  '#73a99c',
  '#ec795c',
  '#f3be5d',
  '#a9c1b5',
  '#85144b',
];

const Pie = ({ data, numberOfImages }) => {
  if (data.length) {
    const sortedData = [...data].sort((a, b) => {
      return b.numberOfImages - a.numberOfImages;
    }).slice(0, 10);
    const pieData = sortedData.map((dog, index)=>({
      title: dog.breed,
      value: dog.numberOfImages,
      color: colors[index],
    }));
    return (
      <PieChart 
        data={pieData}
        viewBoxSize={[200,100]}
        center={[100,50]}
        label={({ dataEntry }) => `${dataEntry.title[0].toUpperCase()+dataEntry.title.slice(1,dataEntry.title.length)} ${Math.round(dataEntry.value/numberOfImages*100)} %`}
        labelStyle={(index) => ({
          fill: colors[index],
          fontSize: '5px',
          fontFamily: 'sans-serif',
        })}
        radius={42}
        labelPosition={112}
        startAngle={270}/>
    )};

  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
};

export default Pie;