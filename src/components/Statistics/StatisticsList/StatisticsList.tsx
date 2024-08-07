import React, { useEffect, useState } from 'react';
import './StatisticsList.css';
import Statistic from '../Statistic/Statistic';
import axios from 'axios';
import { StatisticModel } from '../../../models/StatisticModel';
import { StatisticsAllModel } from '../../../models/StatisticsAllModel';

const StatisticsList: React.FC = () => {
  const [statistics, setStatistics] = useState<StatisticModel[]>([]);

  useEffect(() => {
    getAllStatistics();
  }, []);

  const getAllStatistics = async () => {
    try {
      const response = await axios.get<StatisticsAllModel>('https://localhost:5001/api/Statistics');
      const data = response.data;

      const mappedStatistics: StatisticModel[] = [
        { name: 'To do:', color: 'yellow', amount: data.ToDo ?? 0 },
        { name: 'In progress:', color: 'blue', amount: data.InProgress ?? 0 },
        { name: 'Done:', color: 'green', amount: data.Done ?? 0},
        { name: 'Cancelled:', color: 'red', amount: data.Cancelled ??0  },
      ];

      setStatistics(mappedStatistics);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  return (
    <div className="container">
      <h1>Statistics:</h1>
      <div className="statistic-list">
        {statistics.map((statistic, index) => (
          <Statistic key={index} statistic={statistic} />
        ))}
      </div>
    </div>
  );
};

export default StatisticsList;
