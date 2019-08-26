const URL = 'https://randomuser.me/api';
var users = [];
var names = [];
var age = [];
var foto = [];

$(document).ready(function () {
  getUsers();

});

function getUsers() {
  //$.get
  $.get(URL, {results: 5}, function (resp) {
    if (resp.error === true) {
      alert('Error: ' + resp);
      return;
    }
    for (row in resp.results) {
      users.push({
        'nombre': resp.results[row]['name']['first'].toUpperCase(),
        'edad': resp.results[row]['dob']['age'],
        'foto': resp.results[row]['picture']['large'],
      });
    }
    listUpdate();
    getChart();
    getChart1();
    getChart2();
    getChart3();
  });
}

function getChart() {
  for (row in users){
    names[row]=users[row]['nombre'];
  }
  for (row in users){
    age[row]=users[row]['edad'];
  }
  age.sort();
  for (row in users){
    foto[row]=users[row]['foto'];
  }
  let backgroundColor = [
    'rgba(0,233,255,0.2)',
    'rgba(235,22,0,0.2)',
    'rgba(0,255,64,0.2)',
    'rgba(192,187,0,0.2)',
    'rgba(153, 102, 255, 0.2)',
  ];
  let borderColor = [
    'rgb(0,191,255)',
    'rgb(235,124,70)',
    'rgb(34,255,0)',
    'rgb(192,171,0)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  var ctx4 = document.getElementById('myChart').getContext('2d');
  var myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Meses',
        data: age,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 2
      }]
    }, options: {
      responsive: true,
      title: {
        display: true,
        text: 'Orden por edad'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}

function listUpdate() {
  // TRae los usuarios de la api
  var tbody = $('.card-deck');
  tbody.html('');
  for (let x in users){
    tbody.append('<div class="card" style="width:10rem;">'
      +'<img class="card-img-top" src="'+users[x]["foto"]+'" alt="Card image cap">'+
      '<div class="card-body">'+
      '<p class="card-text">'+users[x]["nombre"]+'</p>'+
      '<p class="card-text">'+users[x]["edad"]+" Años"+'</p>'+
      '</div>'+
      '</div>');
  }
}

function getChart1() {
  for (row in users){
    names[row]=users[row]['nombre'];
  }
  for (row in users){
    age[row]=users[row]['edad'];
  }
  age.sort();
  for (row in users){
    foto[row]=users[row]['foto'];
  }
  let backgroundColor = [
    'rgba(0,233,255,0.2)',
    'rgba(235,22,0,0.2)',
    'rgba(0,255,64,0.2)',
    'rgba(192,187,0,0.2)',
    'rgba(153, 102, 255, 0.2)',
  ];
  let borderColor = [
    'rgb(0,191,255)',
    'rgb(235,124,70)',
    'rgb(34,255,0)',
    'rgb(192,171,0)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  var ctx4 = document.getElementById('myChart1').getContext('2d');
  var myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
      labels: names,
      datasets: [{
        label: 'Meses',
        data: age,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 2
      }]
    }, options: {
      responsive: true,
      title: {
        display: true,
        text: 'Orden por edad'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function getChart2() {
  for (row in users){
    names[row]=users[row]['nombre'];
  }
  for (row in users){
    age[row]=users[row]['edad'];
  }
  age.sort();
  for (row in users){
    foto[row]=users[row]['foto'];
  }
  let backgroundColor = [
    'rgba(0,233,255,0.2)',
    'rgba(235,22,0,0.2)',
    'rgba(0,255,64,0.2)',
    'rgba(192,187,0,0.2)',
    'rgba(153, 102, 255, 0.2)',
  ];
  let borderColor = [
    'rgb(0,191,255)',
    'rgb(235,124,70)',
    'rgb(34,255,0)',
    'rgb(192,171,0)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  var ctx4 = document.getElementById('myChart2').getContext('2d');
  var myChart4 = new Chart(ctx4, {
    type: 'radar',
    data: {
      labels: names,
      datasets: [{
        label: 'Meses',
        data: age,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 2
      }]
    }, options: {
      responsive: true,
      title: {
        display: true,
        text: 'Orden por edad'
      },

    }
  });
}

function getChart3() {
  for (row in users){
    names[row]=users[row]['nombre'];
  }
  for (row in users){
    age[row]=users[row]['edad'];
  }
  age.sort();
  for (row in users){
    foto[row]=users[row]['foto'];
  }
  let backgroundColor = [
    'rgba(0,233,255,0.2)',
    'rgba(235,22,0,0.2)',
    'rgba(0,255,64,0.2)',
    'rgba(192,187,0,0.2)',
    'rgba(153, 102, 255, 0.2)',
  ];
  let borderColor = [
    'rgb(0,191,255)',
    'rgb(235,124,70)',
    'rgb(34,255,0)',
    'rgb(192,171,0)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  var ctx4 = document.getElementById('myChart3').getContext('2d');
  var myChart4 = new Chart(ctx4, {
    type: 'horizontalBar',
    data: {
      labels: names,
      datasets: [{
        label: 'Meses',
        data: age,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 2,
      }]
    }, options: {
      responsive: true,
      title: {
        display: true,
        text: 'Orden por edad'
      },

    },scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  });
}
