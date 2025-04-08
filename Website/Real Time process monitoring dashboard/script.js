
const ctx = document.getElementById('realtimeChart').getContext('2d');
const memCtx = document.getElementById('memoryChart').getContext('2d');

let dataValues = Array(10).fill(0);
let memoryValues = Array(10).fill(0);
let labels = Array.from({ length: 10 }, (_, i) => `${i}s`);

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'CPU Usage',
            data: dataValues,
            borderColor: 'cyan',
            backgroundColor: 'rgba(0,255,255,0.2)',
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        animation: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

const memoryChart = new Chart(memCtx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Memory Usage',
            data: memoryValues,
            borderColor: 'limegreen',
            backgroundColor: 'rgba(50,205,50,0.2)',
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        animation: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

function updateChart() {
    let cpuUsage = Math.floor(Math.random() * 100);
    let memoryUsage = Math.floor(Math.random() * 100);
    let networkActivity = Math.floor(Math.random() * 100);

    document.getElementById('cpu').textContent = cpuUsage + "%";
    document.getElementById('memory').textContent = memoryUsage + "%";
    document.getElementById('network').textContent = networkActivity + "%";

    dataValues.shift(); dataValues.push(cpuUsage);
    memoryValues.shift(); memoryValues.push(memoryUsage);

    chart.update();
    memoryChart.update();
}

setInterval(updateChart, 1000);

const processData = [
    { pid: 101, name: "Chrome.exe", cpu: 25, memory: 35, status: "Running" },
    { pid: 102, name: "Discord.exe", cpu: 18, memory: 20, status: "Running" },
    { pid: 103, name: "Code.exe", cpu: 32, memory: 40, status: "Running" },
    { pid: 104, name: "Photoshop.exe", cpu: 45, memory: 70, status: "High" },
  ];
  
  const tbody = document.getElementById("process-table-body");
  
  processData.forEach(proc => {
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${proc.pid}</td>
      <td>${proc.name}</td>
      <td>${proc.cpu}%</td>
      <td>${proc.memory}%</td>
      <td>${proc.status}</td>
      <td><button class="kill-btn" onclick="alert('Terminating ${proc.name}')">Kill</button></td>
    `;
  
    tbody.appendChild(row);
  });
  
  function updateNetworkInfo() {
    const download = (Math.random() * 100).toFixed(2);
    const upload = (Math.random() * 50).toFixed(2);
    const ip = `192.168.1.${Math.floor(Math.random() * 255)}`;
  
    document.getElementById("download-speed").textContent = `${download} Mbps`;
    document.getElementById("upload-speed").textContent = `${upload} Mbps`;
    document.getElementById("ip-address").textContent = ip;
  }
  
  // Update every 5 seconds
  setInterval(updateNetworkInfo, 5000);
  updateNetworkInfo(); // Initial load
  
function fetchProcessDetails() {
    const processName = document.getElementById('processInput').value.trim();

    if (processName === "") {
        alert("Please enter a process name");
        return;
    }

    const pid = Math.floor(Math.random() * 10000);
    const memoryUsage = (Math.random() * 100).toFixed(2) + " MB";
    const statuses = ["Running", "Sleeping", "Stopped"];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    document.getElementById('pid').textContent = pid;
    document.getElementById('memoryUsage').textContent = memoryUsage;
    document.getElementById('status').textContent = status;
}
