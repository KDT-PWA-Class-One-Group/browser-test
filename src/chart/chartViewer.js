import { Chart } from 'chart.js/auto';

const chartViewer = () => {
  
  const ctx = document.getElementById('myChart').getContext('2d')
  
  // Chart.js를 사용하여 차트 생성
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '차트 확인',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })

}

export default chartViewer
