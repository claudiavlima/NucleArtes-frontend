import React, { useEffect } from 'react'
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const QuantityUsers = (props) => {
  const { fetchUsers, users } = props;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const labelsMonth = users.map((user) => {
    return user.label;
  });

  const countsMonth = users.map((user) => {
    return user.count;
  });

  Chart.register(CategoryScale);

  return (
    <>
      <Line
        data={{
          labels: labelsMonth,
          datasets: [
            {
              label: 'Cantidad de usuarios registrados',
              data: countsMonth,
              fill: true,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        }}
        height={100}
        width={300}
      />
    </>
  )
}

export default QuantityUsers;