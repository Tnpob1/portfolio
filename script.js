var data = {
    labels: ["การเรียน", "กล้าแสดงออก", "กีฬา", "ประสบการณ์ทำงาน"],
    datasets: [
      {
        label: "Data Set 1",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "cyan",
        data: [6, 3, 4, 0], // Adjust these values based on your data
      },
    ],
  };
  
  // Configuration options for the radar chart
  var options = {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 10, // You can adjust the maximum scale value
      },
    },
  };
  
  // Get the canvas element and create the radar chart
  var radarChart = new Chart(document.getElementById("radarChart"), {
    type: "radar",
    data: data,
    options: options,
  });

  var data = {
    labels: ["Element 1", "Element 2", "Element 3", "Element 4"],
    datasets: [
      {
        data: [25, 30, 20, 25], // Adjust these values based on your data
        backgroundColor: ["red", "blue", "green", "orange"],
      },
    ],
  };
  
  // Configuration options for the pie chart
  var options = {
    responsive: true,
  };
  
  // Get the canvas element and create the pie chart
  var pieChart = new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: data,
    options: options,
  });

  var data = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Grades",
        data: [85, 90, 78, 92, 88], // Adjust these values based on your data
        backgroundColor: "blue",
      },
    ],
  };
  
  // Configuration options for the bar chart
  var options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max :4.00,
      },
    },
  };
  
  // Get the canvas element and create the bar chart
  var paddingChart = new Chart(document.getElementById("paddingChart"), {
    type: "bar",
    data: data,
    options: options,
  });