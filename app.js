//Selectors
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Functions
function addTodo() {
  event.preventDefault()
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")

  if (todoInput.value == "") {
    alert("Input can not be empty!")
    btn.disabled = true;
  }
  const newTodo = document.createElement("li")
  newTodo.innerText = todoInput.value
  newTodo.classList.add("todo-item")
  todoDiv.appendChild(newTodo)

  //check mark
  const completeBtn = document.createElement("button")
  completeBtn.innerHTML = "<i class = 'fas fa-check'></i>"
  completeBtn.classList.add("completeBtn")
  todoDiv.appendChild(completeBtn)

  //edit list
  const editBtn = document.createElement("button")
  editBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>"
  editBtn.classList.add("editBtn")
  todoDiv.appendChild(editBtn)

  //trash mark
  const trashBtn = document.createElement("button")
  trashBtn.innerHTML = "<i class = 'fas fa-trash'></i>"
  trashBtn.classList.add("trashBtn")
  todoDiv.appendChild(trashBtn)

  todoList.appendChild(todoDiv)

  //clear input
  todoInput.value = ""

  completeBtn.setAttribute("onclick", "completeItem(this)")
  trashBtn.setAttribute("onclick", "deleteItem(this)")
  editBtn.setAttribute("onclick", "editItem(this)")

}

function completeItem(e) {
  e.parentNode.classList.toggle("completed")
}
function deleteItem(e) {
  e.parentNode.remove();
}
function editItem(e) {
  var val = e.parentNode.firstChild.innerText;
  var editValue = prompt("Enter edit value", val)

  e.parentNode.firstChild.innerHTML = editValue
}

function deleteAll() {
  event.preventDefault()
  todoList.innerHTML = ""
}


/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('snow_fall',

  {
    "particles": {
      "number": {
        "value": 800,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
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
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 0.4
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
