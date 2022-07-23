import React from 'react';
import {Parallax} from 'react-parallax';
function Home() {
  return (
    <div className="main-container">
     <h1>Home Page</h1>
     {/* <Parallax blur={0} bgImage="https://images.unsplash.com/photo-1592743263126-bb241ee76ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" bgImageAlt="the cat" strength={200}>
        Content goes here. Parallax height grows with content height.<div style={{ height: '2000px' }} />
    </Parallax> */}

<div> 
        <article>
            <a href="https://www.lrenoe.com">
            <section  id="Portfolio" class="card1" >
                <h2 class="cardheader">Art</h2> 
            </section></a>
            <a href="https://almost-faim-ous.herokuapp.com/chat">
            <section class="card2">
                <h3 class="cardheader">Almost fAIM-ous</h3>
            </section></a>
            <a href="https://www.lrenoe.com/selected-works">
            <section class="card3">
                <h4 class="cardheader">More Art</h4>
            </section></a>
        </article>
    
</div>

    </div>
  );
}

export default Home;
