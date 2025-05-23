// Traaffic chart //

const trafficCanvas = document.querySelector('#traffic-chart');

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficOptions = {
  backgroundColor: 'rgba(112, 104, 201, .5)',
  fill: true,
  aspectRatio: 2,
  maintainAspectRatio: true,
  animation: {
    duration: 0
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

function updateTrafficChart(newLabels, newData) {
  trafficChart.data.labels = newLabels;
  trafficChart.data.datasets[0].data = newData;
  trafficChart.update();
}

// For switching graphs with the traffic buttons  //

const navLinks = document.querySelectorAll('.traffic-nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');

    const label = e.target.textContent;

    if (label === 'Hourly') {
      updateTrafficChart(
        ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am"],
        [100, 200, 150, 75, 300, 250, 400, 500, 450, 350, 600]
      );
    } else if (label === 'Daily') {
      updateTrafficChart(
        ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
        [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
      );
    }  else if (label === 'Weekly') {
      updateTrafficChart(
        ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
      );
    } else if (label === 'Monthly') {
      updateTrafficChart(
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        [5000, 7000, 6000, 8000, 7500, 7200, 6800, 7900, 8300, 8200, 9000]
      );
    }
  });
});

window.addEventListener('resize', () => {
  trafficChart.resize();
});

// Daily bar chart //

const dailyCanvas = document.querySelector("#daily-chart")

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1
    }]
  };
  const dailyOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
    }
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});


// mobile chart //

const mobileCanvas = document.querySelector("#mobile-chart");

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
      }
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});
