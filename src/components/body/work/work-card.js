import React from 'react'
import './work-card.css'
function WorkCard({ item }) {
    console.log(item);
    return (
      <div className="work-card">
        <img src={item.companyLogo} className="work-logo" />
            <div className="work-info">
                <label class="work-company">{item.company}</label>
          <div className="work-dates">
                    <label>{item.dateJoining} --- {item.dateEnd}</label>
                </div>
                <div className="work-desg">
                    <p>{item.designation}</p>
                </div>
          <div className="work-desc">
            <p>{item.work}</p>
          </div>
        </div>
      </div>
    );
}

export default WorkCard
