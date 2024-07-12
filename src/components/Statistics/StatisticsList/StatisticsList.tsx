// import React from 'react'
// import Statistic from '../Statistic/Statistic';

// const statisticData = {
//   name: 'Nazwa statystyki',
//   amount: 100,
//   color: 'blue'
// };

// export default function StatisticsList() {
//   return (
//     <Statistic statistic={statisticData} />
//   )
// }

import React, { useEffect, useState } from 'react';
import './StatisticsList.css'; // Zaimportuj plik CSS
import Statistic from '../Statistic/Statistic'; // Zaimportuj komponent Statistic
//import { statisticModel } from '../models/statistic-model'; // Zaimportuj model danych (jeśli istnieje)
//import { statisticsallModel } from '../models/StatisticsAll-model'; // Zaimportuj model danych (jeśli istnieje)
import axios from 'axios'; // Zaimportuj axios lub inne narzędzie do wykonywania żądań HTTP


export interface StatisticModel {
  name: string;
  amount: number;
  color: string;
}

export interface statisticsallModel {
  ToDo?: number;
  InProgress?: number;
  Done?: number;
  Cancelled?: number;
}

// const statisticData = {
//   name: 'Nazwa statystyki',
//   amount: 100,
//   color: 'blue'
// };

const StatisticsList: React.FC = () => {
  const [statistics, setStatistics] = useState<statisticsallModel[]>([]);

  useEffect(() => {
    getAllStatistics();
  }, []);

  const getAllStatistics = async () => {
    try {
      const response = await axios.get<statisticsallModel>('https://localhost:44340/api/Statistics');
      const data = response.data;

      console.log(data);

      // const mappedStatistics: StatisticModel[] = [
      //   { name: 'To do:', color: 'yellow', amount: data.ToDo },
      //   { name: 'In progress:', color: 'blue', amount: data.InProgress },
      //   { name: 'Done:', color: 'green', amount: data.Done },
      //   { name: 'Cancelled:', color: 'red', amount: data.Cancelled },
      // ];

      // setStatistics(mappedStatistics);
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
