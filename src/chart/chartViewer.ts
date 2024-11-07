import { Chart } from 'chart.js/auto';

const chartViewer = () => {
  
  const canvas = document.getElementById('myChart') as HTMLCanvasElement | null // canvasElement인지 확인
  if(canvas){ // 이걸 이렇게 쓰는게 맞나 찾아볼 것
    const ctx = canvas.getContext('2d') // 임시 방편으로 if문으로 생성

    if(ctx) {
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
  } 

}

export default chartViewer