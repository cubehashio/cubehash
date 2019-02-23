const json = {
    "particles": {
        "number": {
            "value": 25,
            "density": {
                "enable": true,
                "value_area": 1025.8919341219544
            }
        },
        "color": {
            "value": "#2350A4"
        },
        "shape": {
            "type": "edge",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.665416005259192,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4.872463273808071,
                "size_min": 20,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 347.22496231819997,
            "color": "#536deb",
            "opacity": 0.2244776885211732,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 671.3286713286714,
                "line_linked": {
                    "opacity": 0.6557058552104332
                }
            },
            "bubble": {
                "distance": 59.94005994005994,
                "size": 23.976023976023978,
                "duration": 5.594405594405595,
                "opacity": 0.4875124875124875,
                "speed": 3
            },
            "repulse": {
                "distance": 167.83216783216784,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

const jsonHome = {
    "particles": {
        "number": {
            "value": 25,
            "density": {
                "enable": true,
                "value_area": 1025.8919341219544
            }
        },
        "color": {
            "value": "#2350A4"


        },
        "shape": {
            "type": "edge",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.665416005259192,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4.872463273808071,
                "size_min": 20,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 347.22496231819997,
            "color": "#536deb",
            "opacity": 0.2244776885211732,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 671.3286713286714,
                "line_linked": {
                    "opacity": 0.6557058552104332
                }
            },
            "bubble": {
                "distance": 59.94005994005994,
                "size": 23.976023976023978,
                "duration": 5.594405594405595,
                "opacity": 0.4875124875124875,
                "speed": 3
            },
            "repulse": {
                "distance": 167.83216783216784,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

setTimeout(() => {
  const elements = [].slice.call(document.querySelectorAll('.Particles'))

  elements.forEach((elem, i) => {
    elem.id = `Particles_${i}`

    particlesJS(elem.id, json)
  })

}, 0);

setTimeout(() => {
    const elements = [].slice.call(document.querySelectorAll('.ParticlesHome'))

    elements.forEach((elem, i) => {
        elem.id = `Particles_${i}`

        particlesJS(elem.id, jsonHome)
    })

}, 0);
