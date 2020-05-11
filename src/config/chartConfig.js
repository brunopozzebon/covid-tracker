const options = {
  hAxis: {
    title: "Dias",
    textStyle: { color: '#000' },
    gridlines: { count: 10 }
  },
  vAxis: {
    title: "Casos",
    gridlines: { count: 10 },
    textStyle: { color: '#000' }
  },
  legend: {
    maxLines: 5,
    position: 'bottom', 
        alignment: 'center' ,
    textStyle: {
      fontSize: 12
    }
  },
  colors:["#F29F17","#C6382B","#4396DB","#2E4055"],
  chartArea: {    
    width: '90%'
  },

}

export default options;