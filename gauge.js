var opts = {
    angle: -0.22, // The span of the gauge arc
    lineWidth: 0.07, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.45, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    percentColors: [[0.0, "#ff0000" ], [0.50, "#a9d70b"], [1.0, "#ff0000"]],
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    // renderTicks is Optional
    renderTicks: {
      divisions: 5,
      divWidth: 1.1,
      divLength: 0.7,
      divColor: '#333333',
      subDivisions: 3,
      subLength: 0.5,
      subWidth: 0.6,
      subColor: '#666666'
    }
    
  };

  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 100; // set max gauge value
  gauge.setMinValue(-100);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(0); // set actual value