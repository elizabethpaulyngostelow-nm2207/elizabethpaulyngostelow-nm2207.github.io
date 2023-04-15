//Code for the first DONUT CHART.
var xValues = ["Females", "Males"];
var yValues = [443,497];
var barColors = [
  "darkblue", "cornflowerblue"
];

new Chart("myFirstDonutChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Sociodemographic breakdown of sample by gender"
    }
  }
});


//Code for the second DONUT CHART.
var xValues = ["Singaporean citizen", "Permanent resident"];
var yValues = [805,135];
var barColors = [
  "navy","lightblue"
];

new Chart("mySecondDonutChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Sociodemographic breakdown of sample by nationality"
    }
  }
});


//Code for the third DONUT CHART.
var xValues = ["Chinese", "Malay", "Indian", "Other"];
var yValues = [773,41,75,51];
var barColors = [
  "cornflowerblue","navy","lightblue","dodgerblue"
];

new Chart("myThirdDonutChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Sociodemographic breakdown of sample by ethnicity"
    }
  }
});


//Code for vertical bar chart on the frequency of the top five most common words associated with the term 'mental illness'//
var xValues = ["Depression/Depressed", "Crazy", "Different", "Weird", "Autism/Autistic"];
var yValues = [190,176,149,123,93];
var barColors = ["darkblue", "cornflowerblue","navy","lightblue","darkslateblue"]; 

new Chart("myVerticalChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
//Turning responsive to false such that the bar chart does not resize drastically when the browser window changes
    responsive: false,
    legend: {display: false},
    title: {
      display: true,
      text: "Frequency of the top five most common words associated with the term mental illness"
    }
  }
});

//Code for the horizontal bar chart
var xValues = 
["If I had a mentally ill relative, I wouldn't want anyone to know", 
"Most of my friends would see me as being weak if they thought that I had a mental illness.", 
"I would be very embarrassed if I were diagnosed as having a mental illness", 
"Mentally ill people scare me", 
"I would cross the street if I saw a mentally ill person coming to avoid passing him/her",
"I think that mentally ill people are strange and weird",
"I think that there really is not anything called mental illness; some people are just different",
"Schools and parents are mostly responsible for making people mentally ill",
"I think that society makes up the diagnosis of mental illness just to control people",
"I think that you could catch mental illness from another person",
'I sometimes worry that I may have a mental illness.',
'Mentally ill people can get well if they are treated with love and kindness.',
'There are medications now that can cure mental illness.',
'People who are mentally ill could be well if they tried hard enough',
'If a relative of mine became mentally ill, I know that I could convince them to get well',
'I cannot see myself hanging out with a mentally ill person.',
'Mentally ill people are easy to spot.',
'If you become mentally ill your life is pretty much over',
'I do not think there is any way that I can become mentally ill.',
'Eating the wrong things or taking drugs can make you mentally ill',
'Mentally ill people tend to be more violent than other people',
'I would be upset if someone with a mental illness always set next to me in class',
'I would not be close friends with someone I knew had a mental illness.',
'I would visit a classmate in hospital if they had a mental illness',
'I would try to avoid someone with a mental illness.',
'I would not mind it if someone with a mental illness lived next door to me.',
'If I knew someone had a mental illness I would not date them.',
'I would not want to be taught by a teacher who had been treated for a mental illness',
'I would tell a teacher if a student was being bullied because of their mental illness.',
'I would stick up for someone who had a mental illness if they were being teased.',
'I would tutor a classmate who got behind on their studies because of their mental illness.',
'I would volunteer my time to work in a programme for people with a mental illness.'
];

var yValues = [213, 330, 434, 211, 126, 132, 280, 169, 98, 33, 330, 586, 322, 315, 265, 191, 186, 103, 122, 283, 224, 137, 140, 786, 149, 604, 366, 150, 842, 822, 736, 490];
var barColors = [
"darkblue", "cornflowerblue","navy","lightblue","darkslateblue",
"darkblue", "cornflowerblue","navy","lightblue","darkslateblue",
"darkblue", "cornflowerblue","navy","lightblue","darkslateblue",
"darkblue", "cornflowerblue","navy","lightblue","darkslateblue",
"darkblue", "cornflowerblue","navy","lightblue","darkslateblue",
"darkblue", "cornflowerblue","navy","lightblue","darkslateblue",
"darkblue", "cornflowerblue"
];

new Chart("myHoriChart", {
  type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      axis: 'y',
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: false,
    indexAxis: 'y',
    legend: {display: false},
    title: {
      display: true,
      text: "Number of students who replied Agree or Strongly Agree to survey items"
    }
  }
});

//Below is the code for the first RADAR CHART.
var data = {
  labels: [
    'Mentally iill people scare me',
    'I would cross the street if I saw a mentally ill person coming to avoid passing him/her',
    'I think that mentally ill people are strange and weird',
    'I cannot see myself hanging out with a mentally ill person',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [0.79,0.78,0.73,0.5],
    fill: true,
    backgroundColor: 'rgba(135,206,250,0.2)',
    borderColor: 'rgb(35,206,250)',
    pointBackgroundColor: 'rgb(35,206,250)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(35, 206, 250)'
  }, {

  }]
};
new Chart("first-chart",
      {
          type: "radar",
          data: data,
          options: {
            responsive: false,
              maintainAspectRatio: false,
              legend: {
                  display: false
              },
              title: {
                  display: true,
                  text: ['1: Physical Threat'],
                  fontFamily: "TrebuchetMS",
                  fontSize: 20,
                  fontColor: 'rgb(0,0,0)',
              }
          }
      });


//Below is the code for the second RADAR CHART.
   var data = {
    labels: [
      'Mentally ill people can get well if they are treated with love and kindness',
      'There are medications now that can cure mental illness',
      'People who are mentally ill could be well if they tried hard enough',
      'If a relative of mine became mentally ill, I know that I could convince them to get well',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [0.74,0.66,0.75,0.75],
      fill: true,
      backgroundColor: 'rgba(176,224,230, 0.2)',
      borderColor: 'rgb(176,224,230)',
      pointBackgroundColor: 'rgb(176,224,230)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(176,224,230)'
    }, {

    }]
  };
new Chart("second-chart",
        {
            type: "radar",
            data: data,
            options: {
              responsive: false,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: ['2: Wishful Thinkinig'],
                    fontFamily: "TrebuchetMS",
                    fontSize: 20,
                    fontColor: 'rgb(0,0,0)',
                }
            }
        });



//Below is the code for the third RADAR CHART.
var data = {
  labels: [
    'Mentally ill people are easy to spot',
    'Eatinig the wrong things or taking drugs can make you mentally ill',
    'Mentally ill people tend to be more violent than other people',
    'If you become mentally ill your life is pretty much over',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [0.65, 0.64, 0.62, 0.58],
    fill: true,
    backgroundColor: 'rgba(100,149,237, 0.2)',
    borderColor: 'rgb(100,149,237)',
    pointBackgroundColor: 'rgb(100,149,237)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(100,149,237)'
  }, {

  }]
};

new Chart("third-chart",
      {
          type: "radar",
          data: data,
          options: {
            responsive: false,
              maintainAspectRatio: false,
              legend: {
                  display: false
              },
              title: {
                  display: true,
                  text: ['3: Categorical Thinking'],
                  fontFamily: "TrebuchetMS",
                  fontSize: 20,
                  fontColor: 'rgb(0,0,0)',
              }
          }
      });


//Below is the code for the fourth RADAR CHART.
var data = {
  labels: [
    'If I had a mentally ill relative, I would not want anyone to know',
    'Most of my friends would see me as being weak if they thought I had a mental illness',
    'I would be very embarassed if I were diagnosed as having a mental illness'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [0.63, 0.75, 0.72],
    fill: true,
    backgroundColor: 'rgba(30,144,255, 0.2)',
    borderColor: 'rgb(30,144,255)',
    pointBackgroundColor: 'rgb(30,144,255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(30,144,255)'
  }, {

  }]
};

new Chart("fourth-chart",
      {
          type: "radar",
          data: data,
          options: {
            responsive: false,
              maintainAspectRatio: false,
              legend: {
                  display: false
              },
              title: {
                  display: true,
                  text: ['4: Label Avoidance'],
                  fontFamily: "TrebuchetMS",
                  fontSize: 20,
                  fontColor: 'rgb(0,0,0)',
              }
          }
      });

//Below is the code for the fifth RADAR CHART.
var data = {
  labels: [
    'I think that society makes up the diagnosis of mental illness just to control people',
    'Schools and parents are mostly responsible for making people mentally ill',
    'I think that there really is not anything called mental illness; some people are just diifferent',
    'I think that you could catch mental illness from another person'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [0.63, 0.75, 0.72],
    fill: true,
    backgroundColor: 'rgba(65,105,225, 0.2)',
    borderColor: 'rgb(65,105,225)',
    pointBackgroundColor: 'rgb(65,105,225)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(65,105,225)'
  }, {

  }]
};

new Chart("fifth-chart",
      {
          type: "radar",
          data: data,
          options: {
            responsive: false,
              maintainAspectRatio: false,
              legend: {
                  display: false
              },
              title: {
                  display: true,
                  text: ['5: Social Construction/Concern'],
                  fontFamily: "TrebuchetMS",
                  fontSize: 20,
                  fontColor: 'rgb(0,0,0)',
              }
          }
      });



//Below is the code for the sixth RADAR CHART.
var data = {
  labels: [
    'I would be upset if someone with a mental illness always sat next to me in class',
    'I would not be close friends with someone I knew had a mental illness',
    'I would try to avoid someone with a mental illness',
    'If I knew someone had a mental illness I would not date them',
    'I would not want to be taught by a teacher who had been treated for a mental illness',
    'I would not mind it if someone with a mental illness lived next door to me'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [0.79,0.78,0.77,0.74,0.61,0.51],
    fill: true,
    backgroundColor: 'rgba(30,144,255,0.2)',
    borderColor: 'rgb(30,144,255)',
    pointBackgroundColor: 'rgb(30,144,255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(230,144,255)'
  }, {

  }]
};

new Chart("sixth-chart",
      {
          type: "radar",
          data: data,
          options: {
            responsive: false,
              maintainAspectRatio: false,
              legend: {
                  display: false
              },
              title: {
                  display: true,
                  text: ['6: Social Distance'],
                  fontFamily: "TrebuchetMS",
                  fontSize: 20,
                  fontColor: 'rgb(0,0,0)',
              }
          }
      });


//Below is the code for the seventh RADAR CHART.
var data = {
  labels: [
    'I would stick up for someone who had a mental illness if they were being teased',
    'I would tell a teacher if a student was being bullied because of their mental illness',
    'I would tutor a classmate who got behind in their studies because of their mental illness',
    'I would visit a classmate in hospital if they had a mental illness',
    'I would volunteer my time to work in a programme for people with a mental illness',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [0.81,0.80,0.70,0.58,0.50],
    fill: true,
    backgroundColor: 'rgba(0,0,205, 0.2)',
    borderColor: 'rgb(0,0,205)',
    pointBackgroundColor: 'rgb(0,0,205)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(0,0,205)'
  }, {

  }]
};

new Chart("seventh-chart",
      {
          type: "radar",
          data: data,
          options: {
            responsive: false,
              maintainAspectRatio: false,
              legend: {
                  display: false
              },
              title: {
                  display: true,
                  text: ['7: Social Responsibility'],
                  fontFamily: "TrebuchetMS",
                  fontSize: 20,
                  fontColor: 'rgb(0,0,0)',
              }
          }
      });

//Code for toggle button in order to toggle between the different varimax rotations (and show different sets of RADAR CHARTS)
const toggleBtn = document.querySelector(".btn-toggle-chart");
const charts = document.querySelectorAll(".chart");

toggleBtn.addEventListener("click", (event) => {
  charts.forEach(chart => {
    chart.classList.toggle("hide");
  })
})





 
 





