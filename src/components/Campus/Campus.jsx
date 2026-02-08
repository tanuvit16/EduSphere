import React from 'react';
import './Campus.css';
import gallery1 from '../../assets/gallery-1.png';
import gallery2 from '../../assets/gallery-2.png';
import gallery3 from '../../assets/gallery-3.png';
import gallery4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  return (
    <div className="campus-section">
      <h2 className="campus-title">Explore Our Campus</h2>

      <div className="gallery">
        {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img} alt={`Campus ${i + 1}`} />
          </div>
        ))}
      </div>

      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Campus;
