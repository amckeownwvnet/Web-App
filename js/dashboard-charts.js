//Traffic Chart
const canvas = document.querySelector('canvas');
const traffic = document.querySelector('.traffic-filter');
const hourly = document.querySelector('.hourlyt');
const daily = document.querySelector('.dailyt');
const weekly = document.querySelector('.weeklyt');
const monthly = document.querySelector('.monthlyt');

// Traffic Overview
var chartData = {
	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	datasets: [{
		backgroundColor: 'rgba(116, 120, 191, .5)',
		borderColor: 'rgba(116, 120, 191, 1)',
		data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
	}]
};
// var chartData1 = {
// 	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
// 	datasets: [{
// 		backgroundColor: 'rgba(116, 120, 191, .5)',
// 		borderColor: 'rgba(116, 120, 191, 1)',
// 		data: [450, 1050, 700, 1700, 1600, 2500, 2750, 2250, 2750, 2250, 1750, 2250],
// 	}]
// };
// var chartData2 = {
// 	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
// 	datasets: [{
// 		backgroundColor: 'rgba(116, 120, 191, .5)',
// 		borderColor: 'rgba(116, 120, 191, 1)',
// 		data: [250, 750, 600, 2700, 610, 200, 2150, 2250, 850, 450, 1050, 1250],
// 	}]
// };
// var chartData3 = {
// 	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
// 	datasets: [{
// 		backgroundColor: 'rgba(116, 120, 191, .5)',
// 		borderColor: 'rgba(116, 120, 191, 1)',
// 		data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
// 	}]
// };
// var chartData4 = {
// 	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
// 	datasets: [{
// 		backgroundColor: 'rgba(116, 120, 191, .5)',
// 		borderColor: 'rgba(116, 120, 191, 1)',
// 		data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
// 	}]
// };


var context = document.querySelector('#trafficOverview').getContext('2d');
var chartParams = {
	type: 'line',
	data: chartData,
	options: {
		responsive: true,
		maintainAspectRatio: false,
		elements: {
	      line: {
	        tension: 0,
	      }
	  	},
	    scales: {
	         yAxes: [{
	             ticks: {
	                 beginAtZero:true
	             }
	         }]
	     },
	     legend: {
	            display: false
	         },
	         tooltips: {
	            enabled: false
	         },
		}
};
var myLineChart = new Chart(context, chartParams);

window.onload = weekly.classList.add('active');

function switchCharts(chartName) {
		myLineChart.destroy();
		chartName.classList.add('active');
		myLineChart = new Chart(context, chartParams);
}

hourly.addEventListener('click', (e) => {
	chartData = {
		labels: ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
		datasets: [{
			backgroundColor: 'rgba(116, 120, 191, .5)',
			borderColor: 'rgba(116, 120, 191, 1)',
			data: [450, 1050, 700, 1700, 1600, 2500, 2750, 2250, 2750, 2250, 1750, 2250],
		}]
	};
	chartParams = {
		type: 'line',
		data: chartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			elements: {
		      line: {
		        tension: 0,
		      }
		  	},
		    scales: {
		         yAxes: [{
		             ticks: {
		                 beginAtZero:true
		             }
		         }]
		     },
		     legend: {
		            display: false
		         },
		         tooltips: {
		            enabled: false
		         },
			}
	};
	daily.classList.remove('active');
	weekly.classList.remove('active');
	monthly.classList.remove('active');
	switchCharts(hourly);
});
daily.addEventListener('click', (e) => {
	chartData = {
		labels: ["M", "Tu", "W", "Th", "F", "Sa", "Su"],
		datasets: [{
			backgroundColor: 'rgba(116, 120, 191, .5)',
			borderColor: 'rgba(116, 120, 191, 1)',
			data: [250, 750, 600, 2700, 610, 200, 2150],
		}]
	};
	chartParams = {
		type: 'line',
		data: chartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			elements: {
		      line: {
		        tension: 0,
		      }
		  	},
		    scales: {
		         yAxes: [{
		             ticks: {
		                 beginAtZero:true
		             }
		         }]
		     },
		     legend: {
		            display: false
		         },
		         tooltips: {
		            enabled: false
		         },
			}
	};
	hourly.classList.remove('active');
	weekly.classList.remove('active');
	monthly.classList.remove('active');
	switchCharts(daily);
});
weekly.addEventListener('click', (e) => {
	chartData = {
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
		datasets: [{
			backgroundColor: 'rgba(116, 120, 191, .5)',
			borderColor: 'rgba(116, 120, 191, 1)',
			data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
		}]
	};
	chartParams = {
		type: 'line',
		data: chartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			elements: {
		      line: {
		        tension: 0,
		      }
		  	},
		    scales: {
		         yAxes: [{
		             ticks: {
		                 beginAtZero:true
		             }
		         }]
		     },
		     legend: {
		            display: false
		         },
		         tooltips: {
		            enabled: false
		         },
			}
	};
	hourly.classList.remove('active');
	daily.classList.remove('active');
	monthly.classList.remove('active');
	switchCharts(weekly);
});
monthly.addEventListener('click', (e) => {
	chartData = {
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
		"4-10", "11-17", "18-24", "25-31"],
		datasets: [{
		data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
		2500],
		backgroundColor: 'rgba(116, 119, 191, .3)',
		borderWidth: 1,
		}]
	};
	chartParams = {
		backgroundColor: 'rgba(112, 104, 201, .5)',
		fill: true,
		aspectRatio: 2.5,
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
	hourly.classList.remove('active');
	daily.classList.remove('active');
	weekly.classList.remove('active');
	switchCharts(monthly);
});

// Daily traffic
var ctxdt = document.getElementById('dailyTraffic').getContext('2d');
var chart = new Chart(ctxdt, {
	// The type of chart we want to create
	type: 'bar',

	// The data for our dataset
	data: {
		labels: ["S", "M", "T", "W", "T", "F", "S"],
		datasets: [{
			backgroundColor: '#7477BF',
			data: [75, 115, 175, 125, 225, 200, 100],
		}]
	},

	// Configuration options go here
	options: {
		responsive: true,
		maintainAspectRatio: false,
		elements: {

	  	},
	    scales: {
	         yAxes: [{
	             ticks: {
	                 beginAtZero:true
	             }
	         }]
	     },
	     legend: {
	            display: false
	         },
	         tooltips: {
	            enabled: false
	         },
		}
});

// Mobile traffic

var ctxmt = document.getElementById('mobileUsers').getContext('2d');
var chart = new Chart(ctxmt, {
	// The type of chart we want to create
	type: 'doughnut',

	// The data for our dataset
	data: {
		labels: ["Desktop", "Tablet", "Phones"],
		datasets: [{
			backgroundColor:['#7477BF',
			'#78CF82',
			'#51B6C8'],
			borderWidth: 0,
			borderColor:['#74b1bf', '#81c98f', 'rgba(116, 120, 191, 1)'],
			data: [2000, 550, 500],
		}]
	},

	// Configuration options go here
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
		   display: true,
		   position: 'right'
	   }
	}
});
