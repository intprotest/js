var options = {
    chart: {
        zoomType: 'x',
        type: 'area',
        spacingTop: 30,
        backgroundColor: '#323635',
        resetZoomButton: {
            position: {
                // align: 'right', // by default
                // verticalAlign: 'top', // by default
                x: -30,
                y: 0
            },
            relativeTo: 'chart',
            theme: {
                fill: '#4a4d4a',
                stroke: '#282b2a',
                style: {
                    color: 'white'
                },
                r: 0,
                states: {
                    hover: {
                        fill: '#282b2a',
                        stroke: '#4a4d4a',
                        style: {
                            color: 'white'
                        }
                    }
                }
            }
        },
        events: {
            load: function() {
                this.credits.element.onclick = function() {
                    window.open(
                            'http://www.stateoftheinternet.com/resources-report-state-of-the-internet.html',
                            '_blank'
                            );
                }
            }
        }
    },
    title: {
        text: '',
        align: 'left',
        style: {
            color: '#FFFFFF',
            fontSize: '12px'
        },
        y: -9999
        
    },
    credits: {
        text: 'Source: Akamai State of the Internet Report',
        href: 'http://www.stateoftheinternet.com/resources-report-state-of-the-internet.html',
        style: {
        }
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Select with your mouse to zoom-in on graph'
        },
        labels: {
            formatter: function() {
                return timeConverter(this.value, "no");
            },
            minRange: 30 * 24 * 3600000 // fourteen days
        }
    },
    yAxis: {
        title: {
            text: 'IPv6 Adoption %'
        },
        gridLineColor: "#5b5b5b"
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            lineWidth: 2,
            fillColor: "#5d6d2e",
            lineColor: "#97c409",
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: false,
                        fillColor: '#000000'
                    }
                }
            }
        }
    },
    tooltip: {
        backgroundColor: "#000000",
        borderColor: '#000000',
        xDateFormat: '%m/%d/%Y',
        valueSuffix: ' %',
        valueDecimals: 1,
        style: {
            color: '#ffffff',
            padding: '8px'
        }        
    },
    exporting: {
        scale: 1,
        chartOptions: {
            xAxis: {
                title: {
                    enabled: false,
                    text: '&nbsp;'
                }
            },
            title: {
                floating: true,
                align: 'center',
                y: -5,
                style: {                 
                    fontSize: '18px'
                }                
            }
        }
    },
    navigation: {
        buttonOptions: {
            align: 'right',
            y: -30,
            x: -100,
            enabled: true,
            symbolStroke: '#ffffff',
            theme: {
                'stroke-width': 1,
                stroke: '#282b2a',
                fill: '#4a4d4a',
                r: 0,
                states: {
                    hover: {
                        fill: '#909090',
                        stroke: '#4a4d4a'
                    },
                    select: {
                        fill: '#424542',
                        stroke: '#4a4d4a'
                    }
                }
            }
        },
        menuItemHoverStyle: {
            background: '#5d6d2e',
        },
        menuStyle: {
            background: '#424542',
            color: '#ffffff',
            border: '1px solid #282b2a',
        },
        menuItemStyle: {
            color: '#ffffff',
            background: 'none',
        }
    },
    series: []
};