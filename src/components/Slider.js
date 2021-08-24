import React from 'react';
import leave1 from '../images/leave1.png';
import leave2 from '../images/leave2.png';
import blossom from '../images/blossom2.png';
import './Slider.css';

function Slider() {
  return (
    <div className="imgCon" id="home">

      <div className="set">
        <span className="quote">
          <h3>Welcome</h3>
          <h3>Love is the Solution</h3>
          <h4>If you live for love, your dreams will create life and happiness for all beings</h4>

        </span>

        <div>
          <img className="image1 ani1" alt="lesave" src={leave1} />
        </div>
        <div>
          <img className="image3" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image3" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image1 ani1" alt="lesave" src={leave1} />
        </div>
        <div>
          <img className="image2" alt="lesave" src={leave2} />
        </div>
        <div>
          <img className="image3" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image3" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image3" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image3" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image1 set2" alt="lesave" src={leave1} />
        </div>
        <div>
          <img className="image3" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image3 set2" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image3 set2" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image2 set2" alt="lesave" src={leave2} />
        </div>
        <div>
          <img className="image3 set2" alt="lesave" src={blossom} />
        </div>
        <div>
          <img className="image3 set2" alt="lesave" src={blossom} />
        </div>

      </div>

    </div>
  );
}

export default Slider;
