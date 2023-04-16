import React from 'react';
import SearchBar from './searchBar';
import background1 from './assets/tree2.png';

function page1() {
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
          src={background1}
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
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontFamily: 'Lilita One',  
            fontSize: 100, 
            color: "white",
            textAlign: 'center',
            margin: 0,
          }}>
            Using data to <br/> solve climate change
          </h1>
  
          <SearchBar style={{ marginTop: 20 }} />
        </div>
      </div>
    );
  }
  
  

export default page1;
