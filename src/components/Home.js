import React from 'react';
import {Parallax} from 'react-parallax';
function Home() {
  return (
    <div className="main-container">
     <h1>Home Page</h1>
     <Parallax blur={0} bgImage="https://images.unsplash.com/photo-1592743263126-bb241ee76ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" bgImageAlt="the cat" strength={200}>
        Content goes here. Parallax height grows with content height.<div style={{ height: '2000px' }} />
    </Parallax>
    </div>
  );
}

export default Home;
