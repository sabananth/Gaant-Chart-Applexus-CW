const dataSource = {
  tasks: {
    showlabels: "1",
    color: "#5D62B5",
    task: [
      {
        processid: "EMP120",
        start: "07:00:00",
        end: "16:00:00",
        label: "Morning Shift"
      },
      {
        processid: "EMP121",
        start: "14:00:00",
        end: "22:00:00",
        label: "Afternoon Shift"
      },
      {
        processid: "EMP122",
        start: "14:00:00",
        end: "18:30:00",
        label: "Half Day"
      },
      {
        processid: "EMP123",
        start: "07:00:00",
        end: "16:00:00",
        label: "Morning Shift"
      },
      {
        processid: "EMP124",
        start: "14:00:00",
        end: "22:00:00",
        label: "Afternoon Shift"
      },
      {
        processid: "EMP125",
        start: "00:00:00",
        end: "08:00:00",
        label: "Early Morning support"
      },
      {
        processid: "EMP126",
        start: "07:00:00",
        end: "11:30:00",
        label: "Half Day"
      }
    ]
  },
  processes: {
    fontsize: "12",
    isbold: "1",
    align: "Center",
    headertext: "Employee",
    headerfontsize: "14",
    headervalign: "middle",
    headeralign: "left",
    process: [
      {
        label: "Betty",
        id: "EMP120"
      },
      {
        label: "William",
        id: "EMP121"
      },
      {
        label: "Emma",
        id: "EMP122"
      },
      {
        label: "Oliver",
        id: "EMP123"
      },
      {
        label: "Lucas",
        id: "EMP124"
      },
      {
        label: "Alex",
        id: "EMP125"
      },
      {
        label: "John",
        id: "EMP126"
      }
    ]
  },
  categories: [
    {
      category: [
        {
          start: "00:00:00",
          end: "23:59:59",
          label: "Time"
        }
      ]
    },
    {
      align: "center",
      category: [
        {
          start: "00:00:00",
          end: "02:59:59",
          label: "Midnight"
        },
        {
          start: "03:00:00",
          end: "05:59:59",
          label: "3 AM"
        },
        {
          start: "06:00:00",
          end: "08:59:59",
          label: "6 AM"
        },
        {
          start: "09:00:00",
          end: "11:59:59",
          label: "9 AM"
        },
        {
          start: "12:00:00",
          end: "14:59:59",
          label: "12 PM"
        },
        {
          start: "15:00:00",
          end: "17:59:59",
          label: "3 PM"
        },
        {
          start: "18:00:00",
          end: "20:59:59",
          label: "6 PM"
        },
        {
          start: "21:00:00",
          end: "23:59:59",
          label: "9 PM"
        }
      ]
    }
  ],
  chart: {
    dateformat: "dd/mm/yyyy",
    outputdateformat: "hh12:mn ampm",
    caption: "Shift Roster for June",
    subcaption: "Customer Success Team<br>Sensibill",
    ganttpaneduration: "22",
    ganttpanedurationunit: "h",
    scrolltodate: "09:00:00",
    useverticalscrolling: "0",
    theme: "candy"
  }
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "gantt",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});

