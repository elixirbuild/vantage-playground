//programmed by Rogan Wido
//Made in August 10th 2020
//Fetch our canvas
var canvas = document.getElementById('world');

//Setup Matter JS
var engine = Matter.Engine.create();
var world = engine.world;
var render = Matter.Render.create({
    canvas: canvas,
    engine: engine,
    options: {
        width: 2030,
        height: 1000,
        background: 'transparent',
        wireframes: false,
        showAngleIndicator: false
    }
});


// Floor
var floor = Matter.Bodies.rectangle(250, 980, 4030, 80, {
    isStatic: true, //An immovable object
    render: {
        fillStyle: 'transperant',
        strokeStyle: 'white',
        lineWidth: false
    }
});
Matter.World.add(world, floor);

// Wall Left
var wallLeft = Matter.Bodies.rectangle(9, 250, 90, 4010, {
    isStatic: true, //An immovable object
    render: {
        fillStyle: 'transperant',
        strokeStyle: 'transperant',
        lineWidth: 0
    }
});
Matter.World.add(world, wallLeft);

// Wall Right
var wallRight = Matter.Bodies.rectangle(2020, 250, 90, 4010, {
    isStatic: true, //An immovable object
    render: {
        fillStyle: 'transperant',
        strokeStyle: 'transperant',
        lineWidth: 0
    }
});
Matter.World.add(world, wallRight);

// Ceiling
var Top = Matter.Bodies.rectangle(250, 10, 4030, 70, {
    isStatic: true, //An immovable object
    render: {
        fillStyle: 'transperant',
        strokeStyle: 'transperant',
        lineWidth: 0
    }
});
Matter.World.add(world, Top);

var running = false;

function restartSim() {
    if (running == false) {
        var scaleX = document.getElementById("scaleX");
        var scaleY = document.getElementById("scaleY");
        var density = document.getElementById("density");
        var friction = document.getElementById("friction");
        var frictionAir = document.getElementById("frictionAir");
        var restitution = document.getElementById("restitution");
        var color = document.getElementById("color");
        var frictionStatic = document.getElementById("frictionStatic");

        // Clear
        World.clear(world);
        Matter.World.add(world, floor);
        Matter.World.add(world, wallLeft);
        Matter.World.add(world, wallRight);
        Matter.World.add(world, Top);
        Matter.World.add(world, mouseConstraint);

        scaleX.value == "";
        scaleY.value == "";
        density.value == "";
    }
}

var button = document.getElementById("rsButton");
button.addEventListener("click", function () {
    event.preventDefault();
    restartSim();
});

/* X/Y object scale */
var scaleX = document.getElementById("scaleX");
var scaleY = document.getElementById("scaleY");
var density = document.getElementById("density");
var friction = document.getElementById("friction");
function add() {
    var addP = Matter.Bodies.rectangle(985, 90, scaleX.value, scaleY.value, {
        density: density.value,
        friction: friction.value,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0,
        }
    });
    Matter.World.add(world, addP);
}

//Make interactive
var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
    element: canvas,
    constraint: {
        render: {
            visible: false
        },
        stiffness: 0.8
    }
});
Matter.World.add(world, mouseConstraint);

//Start the engine
Matter.Engine.run(engine);
Matter.Render.run(render);

function MouseConstOff() {
    document.getElementById("btn2").style.opacity = "72%";
    document.getElementById("btn1").style.opacity = "100%";
    Matter.World.remove(world, mouseConstraint);
}

function MouseConstOn() {
    document.getElementById("btn2").style.opacity = "100%";
    document.getElementById("btn1").style.opacity = "72%";
    Matter.World.add(world, mouseConstraint);
}

function background() {
    var value = document.getElementById("h");
    document.getElementById("world").style.backgroundColor = value.value;
}

document.onkeydown = function (e) {
    if (e.which == 13) {
        var value = document.getElementById("h").value;
        document.getElementById("world").style.backgroundColor = value;
    }
}

var f = document.getElementById("file");

// Shapes
var defaultP = Matter.Bodies.rectangle(985, 90, 90, 90, {
    density: 0.04,
    friction: 0.01,
    frictionAir: 0.00001,
    restitution: 0.8,
    render: {
        fillStyle: 'white',
        strokeStyle: 'white',
        lineWidth: 0
    }
});
Matter.World.add(world, defaultP)

function Polygon() {
    var newP = Matter.Bodies.polygon(985, 90, 5, 50, {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0
        }
    });
    Matter.World.add(world, newP);
}

function Shapes() {
    document.getElementById("shapes").style.display = "inline";
    document.getElementById("display").style.display = "inline";
    document.getElementById("sh").style.display = "none";
}
function Close() {
    document.getElementById("shapes").style.display = "none";
    document.getElementById("display").style.display = "none";
    document.getElementById("sh").style.display = "inline";
}

function Circle() {
    var newP = Matter.Bodies.circle(985, 90, 50, {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0
        }
    });
    Matter.World.add(world, newP);
}

function Square() {
    var newP = Matter.Bodies.rectangle(985, 90, 90, 90, {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0
        }
    });
    Matter.World.add(world, newP);
}

function Triangle() {
    var newP = Matter.Bodies.polygon(985, 90, 3, 50, {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0
        }
    });
    Matter.World.add(world, newP);
}

function Rectangle() {
    var newP = Matter.Bodies.rectangle(985, 90, 150, 90, {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0
        }
    });
    Matter.World.add(world, newP);
}

function Hexagon() {
    var newP = Matter.Bodies.polygon(985, 90, 6, 50, {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0
        }
    });
    Matter.World.add(world, newP);
}

function Heptagon() {
    var newP = Matter.Bodies.polygon(985, 90, 7, 50, {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0
        }
    });
    Matter.World.add(world, newP);
}

function Octagon() {
    var newP = Matter.Bodies.polygon(985, 90, 8, 50, {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0
        }
    });
    Matter.World.add(world, newP);
}

// platform detection *deleted platform detection because it was unnescessary*

function gravity() {
    var input = document.getElementById("inp2");

    if (check.checked == true) {
        engine.world.gravity.y = 1;
        input.value = "1";
    } else if (check.checked == false) {
        engine.world.gravity.y = 0;
        input.value = "0";
    }
}

function gravityX() {
    var inputX = document.getElementById("inp").value;
    var inputY = document.getElementById("inp2").value;

    engine.world.gravity.x = inputX;
    engine.world.gravity.y = inputY;
}
