import { Chart } from 'chart.js/auto';

const chartViewer = () => {
  
  const canvas = document.getElementById('myChart') as HTMLCanvasElement 
  const ctx = canvas.getContext('2d')
  if (!ctx) return;
  // | null // canvasElement인지 확인
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
