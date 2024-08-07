import React from 'react'
import './Statistic.css';

interface StatisticProps {
    statistic: {
      name: string;
      amount: number;
      color: string;
    };
  }
  
  const Statistic: React.FC<StatisticProps> = ({ statistic }) => {
    return (
      <section className="statistic">
        <div className="round" style={{ backgroundColor: statistic.color }}></div>
        <div className="name">{statistic.name}</div>
        <div className="name">{statistic.amount}</div>
      </section>
    );
  }
  
  export default Statistic;