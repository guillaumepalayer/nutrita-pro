//
// dashkit.js
// Theme module
//

'use strict';

// Audience chart

(function() {
  var chart = document.getElementById('audienceChart');

  if (typeof Chart !== 'undefined' && chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            id: 'yAxisOne',
            type: 'linear',
            display: 'auto',
            gridLines: {
              color: '#283E59',
              zeroLineColor: '#283E59'
            },
            ticks: {
              callback: function(value) {
                return value + 'k';
              }
            }
          }, {
            id: 'yAxisTwo',
            type: 'linear',
            display: 'auto',
            gridLines: {
              color: '#283E59',
              zeroLineColor: '#283E59'
            },
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }]
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Customers',
          data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
          yAxisID: 'yAxisOne'
        }, {
          label: 'Sessions',
          data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45],
          yAxisID: 'yAxisOne',
          hidden: true
        }, {
          label: 'Conversion',
          data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48],
          yAxisID: 'yAxisTwo',
          hidden: true
        }]
      }
    });
  }
})();

// Convertions chart

(function() {
  var chart = document.getElementById('conversionsChart');

  if (typeof Chart !== 'undefined' && chart) {
    new Chart(chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }]
        }
      },
      data: {
        labels: ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6', 'Oct 7', 'Oct 8', 'Oct 9', 'Oct 10', 'Oct 11', 'Oct 12'],
        datasets: [{
          label: '2020',
          data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
        }, {
          label: '2019',
          data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
          backgroundColor: '#d2ddec',
          hidden: true
        }]
      }
    });
  }
})();

// Traffic chart

(function() {
  var chart = document.getElementById('trafficChart');

  if (typeof Chart !== 'undefined' && chart) {
    new Chart(chart, {
      type: 'doughnut',
      options: {
        tooltips: {
          callbacks: {
            afterLabel: function() {
              return '%'
            }
          }
        }
      },
      data: {
        labels: ['Direct', 'Organic', 'Referral'],
        datasets: [{
          data: [60, 25, 15],
          backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC']
        }, {
          data: [15, 45, 20],
          backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
          hidden: true
        }]
      }
    });
  }
})();

// Traffic chart (alt)

(function() {
  var chart = document.getElementById('trafficChartAlt');

  if (typeof Chart !== 'undefined' && chart) {
    new Chart(chart, {
      type: 'doughnut',
      options: {
        tooltips: {
          callbacks: {
            afterLabel: function() {
              return '%'
            }
          }
        }
      },
      data: {
        labels: ['Direct', 'Organic', 'Referral'],
        datasets: [{
          data: [60, 25, 15],
          backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC']
        }, {
          data: [15, 45, 20],
          backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
          hidden: true
        }]
      }
    });
  }
})();

// Sales chart

(function() {
  var chart = document.getElementById('salesChart');

  if (typeof Chart !== 'undefined' && chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                return '$' + value + 'k';
              }
            }
          }]
        }
      },
      data: {
        labels: ['Oct 1', 'Oct 3', 'Oct 6', 'Oct 9', 'Oct 12', 'Oct 5', 'Oct 18', 'Oct 21', 'Oct 24', 'Oct 27', 'Oct 30'],
        datasets: [{
          label: 'All',
          data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25]
        }, {
          label: 'Direct',
          data: [7, 40, 12, 27, 34, 17, 19, 30, 28, 32, 24],
          hidden: true
        }, {
          label: 'Organic',
          data: [2, 12, 35, 25, 36, 25, 34, 16, 4, 14, 15],
          hidden: true
        }]
      }
    });
  }
})();

// Orders chart

(function() {
  var chart = document.getElementById('ordersChart');

  if (typeof Chart !== 'undefined' && chart) {
    new Chart(chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                return '$' + value + 'k';
              }
            }
          }]
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
        }, {
          label: 'Affiliate',
          data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
          backgroundColor: '#d2ddec',
          hidden: true
        }]
      }
    });
  }
})();

// Earnings chart

(function() {
  var chart = document.getElementById('earningsChart');

  if (typeof Chart !== 'undefined' && chart) {
    new Chart(chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            id: 'yAxisOne',
            type: 'linear',
            display: 'auto',
            ticks: {
              callback: function(value) {
                return '$' + value + 'k';
              }
            }
          }, {
            id: 'yAxisTwo',
            type: 'linear',
            display: 'auto',
            ticks: {
              callback: function(value) {
                return value + 'k';
              }
            }
          }, {
            id: 'yAxisThree',
            type: 'linear',
            display: 'auto',
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }]
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Earnings',
          data: [18, 10, 5, 15, 10, 20, 15, 25, 20, 26, 25, 29, 18, 10, 5, 15, 10, 20],
          yAxisID: 'yAxisOne'
        }, {
          label: 'Sessions',
          data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45, 50, 75, 35, 25, 55, 19],
          yAxisID: 'yAxisTwo',
          hidden: true
        }, {
          label: 'Bounce',
          data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48, 40, 57, 25, 50, 57, 29],
          yAxisID: 'yAxisThree',
          hidden: true
        }]
      }
    });
  }
})();

// Weekly hours chart

(function() {
  var chart = document.getElementById('weeklyHoursChart');

  if (typeof Chart !== 'undefined' && chart) {
    new Chart(chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                return value + 'hrs';
              }
            }
          }]
        }
      },
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [21, 12, 28, 15, 5, 12, 17, 2]
        }]
      }
    });
  }
})();

// Overview chart

(function() {
  var chart = document.getElementById('overviewChart');

  if (chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            id: 'yAxisOne',
            type: 'linear',
            display: 'auto',
            ticks: {
              callback: function(value) {
                return '$' + value + 'k';
              }
            }
          }, {
            id: 'yAxisTwo',
            type: 'linear',
            display: 'auto',
            ticks: {
              callback: function(value) {
                return value + 'hrs';
              }
            }
          }]
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Earned',
          data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
          yAxisID: 'yAxisOne'
        }, {
          label: 'Hours Worked',
          data: [7, 35, 12, 27, 34, 17, 19, 30, 28, 32, 24, 39],
          yAxisID: 'yAxisTwo',
          hidden: true
        }]
      }
    });
  }
})();

// Sparkline chart

(function() {
  var chart = document.getElementById('sparklineChart');

  if (typeof Chart !== 'undefined' && chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            hoverRadius: 0
          }
        },
        tooltips: {
          custom: function() {
            return false;
          }
        }
      },
      data: {
        labels: new Array(12),
        datasets: [
          {
            label: 'Carbs limit:',
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            borderWidth: 1,
            borderDash: [1,3],
            borderColor: '#FFF',
            backgroundColor: 'rgb(255, 99, 132)',
            fill: false,
          },{
          label: 'Net Carbs:',
          data: [65, 55, 60, 80, 50, 40, 15, 30, 25, 10, 15, 10]
        }]
      }
    });
  }
})();

// Sparkline chart (gray)

(function() {
  var charts = document.querySelectorAll('#sparklineChartSocialOne, #sparklineChartSocialTwo, #sparklineChartSocialThree, #sparklineChartSocialFour');

  if (typeof Chart !== 'undefined' && charts) {
    [].forEach.call(charts, function(chart) {
      new Chart(chart, {
        type: 'line',
        options: {
          scales: {
            yAxes: [{
              display: false
            }],
            xAxes: [{
              display: false
            }]
          },
          elements: {
            line: {
              borderWidth: 2,
              borderColor: '#D2DDEC'
            },
            point: {
              hoverRadius: 0
            }
          },
          tooltips: {
            custom: function() {
              return false;
            }
          }
        },
        data: {
          labels: new Array(12),
          datasets: [{
            data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65]
          }]
        }
      });
    });
  }
})();

// Feed chart

(function() {
  var chart = document.getElementById('feedChart');

  if (chart) {
    new Chart(chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                return '$' + value + 'k';
              }
            }
          }]
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
        }, {
          label: 'Affiliate',
          data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
          backgroundColor: '#d2ddec',
          hidden: true
        }]
      }
    });
  }
})();

// Orders select

(function() {
  var ordersSelect = document.querySelectorAll('[name="ordersSelect"]');
  var ordersSelectAll = document.getElementById('ordersSelectAll');

  if (ordersSelect && ordersSelectAll) {
    ordersSelectAll.addEventListener('change', function() {
      var that = this;

      [].forEach.call(ordersSelect, function(checkbox) {
        checkbox.checked = that.checked;
      });
    });
  }
})();

// D3 circular charts
var data = [
    {day: 'M'},
    {day: 'T'},
    {day: 'W'},
    {day: 'T'},
    {day: 'F'},
    {day: 'S'},
    {day: 'S'}
  ];
  var dateFormatter = d3.time.format("%A, %B %d, %Y");
  var mainChart = new RadialProgressChart('.main-radial-progress-chart', {
        diameter: 500,
        round: true,
        shadow: {
            width: 0
        },
        series: [
          {
            value: 5,
            color: {
                solid: '#e63757',
                background: 'white'
            }
          },
          {
            value: 20,
            color: {
                solid: '#f6c343',
                background: 'white'
            }
          },
          {
            value: 70,
            color: {
                solid: '#00d97e',
                background: 'white'
            }
          }
        ]}
  );

  d3.select('.week').selectAll('li')
      .data(data).enter()
      .append('li').on('click', function (d) {
        // Update active class, date and main chart
        d3.selectAll('.circle').classed('active', false);
        d3.select(this).select('.circle').classed('active', true);
        d3.select('.date').text(d.date);
        mainChart.update(d.series);
      })
      .append('div').attr('class', 'circle').text(function (d) {
        return d.day;
      })
      .each(function (d, i) {
        d.date = dateFormatter(getDate(i));
        d.series = [getRandom(), getRandom(), getRandom()];
        new RadialProgressChart(this.parentNode, {
          diameter: 10,
          round: true,
          shadow: {
              width: 0
          },
          stroke: {
            width: 6,
            gap: 1
          },
          series: [
            {
              value: 30,
              color: {
                  solid: '#e63757',
                  background: 'white'
              }
            },
            {
              value: 70,
              color: {
                  solid: '#f6c343',
                  background: 'white'
              }
            },
            {
              value: 60,
              color: {
                  solid: '#00d97e',
                  background: 'white'
              }
            }
          ]
        });
      });

  // Return some chronological dates
  function getDate(i) {
    var date = new Date('2015-06-16');
    date.setDate(date.getDate() + i);
    return date;
  }

  // Random int between 20-80
  function getRandom() {
    return Math.round(Math.random() * 60) + 20;
  }

  // Select monday by default
  document.querySelector('li').click();

  var progress = new RadialProgressChart('.progresscircular', {
    diameter: 48,
     stroke: {
       width: 6,
       gap: 1
     },
    round: true,
    shadow: {
        width: 0
    },
   series: [{
     value: 0,
     color: '#2C7BE5'
   }],
   center: function(p) {
     return p + ' %'
   }
 });

 function getRandom(min, max) {
   return Math.random() * (max - min) + min;
 }

 function loop(p) {
   if (p > 100) {
     setTimeout(function() {
       loop(0)
     }, 3000)
   } else {
     progress.update(p);
     setTimeout(function() {
       loop(p + 1)
     }, 90)
   }
 }

 loop(10);
