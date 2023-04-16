import React from 'react';
//import SearchBar from './searchBar';
//import background1 from './assets/tree2.png';
//import background2 from './assets/background2.jpg';
import background2 from './assets/dashbackground.jpg';
import CircularProgressBar from './CircularProgressBar.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function page1() {
    const sust_score = 75; // to be changed
    const compare_val = 49; // to be changed

    // for the graph, to be changed 
    const data = [
        { name: "Jan", value: 400 },
        { name: "Feb", value: 300 },
        { name: "Mar", value: 200 },
        { name: "Apr", value: 278 },
        { name: "May", value: 189 },
        { name: "Jun", value: 239 },
        { name: "Jul", value: 349 },
        { name: "Aug", value: 178 },
        { name: "Sep", value: 209 },
        { name: "Oct", value: 394 },
        { name: "Nov", value: 456 },
        { name: "Dec", value: 398 }
      ];

      // end of graph data stuff
    
    return (
      <div style={{ 
        position: 'relative', 
        backgroundColor: '#07bbf2', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img
          src={background2}
          alt="Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          //top: -150,
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontFamily: 'Lilita One',  
            fontSize: 100, 
            color: "#05472A",
            textAlign: 'center',
            margin: 0,
          }}>
            FRANCE
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgressBar value={sust_score} color_opt={'#50C878'}/>
              <CircularProgressBar value={compare_val} color_opt={'#FF0000'} />
        </div>
        
        <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ left: -10 }}>
      <XAxis dataKey="name" />
      <YAxis
        ticks={[data[0].value, data[data.length - 1].value]}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>

        
        </div>
      </div>
    );
  }
  
  

export default page1;