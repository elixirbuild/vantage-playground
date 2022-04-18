// Programmed by Rogan Wido
var canvas = document.getElementById('world');

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Vertices = Matter.Vertices,
    Events = Matter.Events;

//Setup Matter JS
var engine = Matter.Engine.create(),
    world = engine.world;
var render = Matter.Render.create({
    canvas: canvas,
        engine: engine,
        options: {
            width: 2030,
            height: 1200,
            background: 'transparent',
            wireframes: false,
            hasBounds: false,
            enabled: true,
            showSleeping: false,
            showDebug: false,
            showBroadphase: false,
            showBounds: false,
            showVelocity: false,
            showCollisions: false,
            showSeparations: false,
            showAxes: false,
            showPositions: false,
            showAngleIndicator: false,
            showIds: false,
            showShadows: false,
            showVertexNumbers: false,
            showConvexHulls: false,
            showInternalEdges: false,
            showMousePosition: false,
            showStats: false,
            showPerformance: false
        }
});


var floor = Matter.Bodies.rectangle(950, 1148, 2700, 80, {
    isStatic: true,
    render: {
        fillStyle: 'transparent',
        strokeStyle: 'white',
        lineWidth: 1
    }
});
var wallLeft = Matter.Bodies.rectangle(9, 250, 90, 4010, {
    isStatic: true,
    render: {
        fillStyle: 'transperant',
        strokeStyle: 'transperant',
        lineWidth: 1
    }
});
var wallRight = Matter.Bodies.rectangle(2020, 250, 90, 4010, {
    isStatic: true,
    render: {
        fillStyle: 'transperant',
        strokeStyle: 'transperant',
        lineWidth: 1
    }
});
var Top = Matter.Bodies.rectangle(250, 10, 4030, 70, {
    isStatic: true,
    render: {
        fillStyle: 'transperant',
        strokeStyle: 'transperant',
        lineWidth: 1
    }
});

Matter.World.add(world, [
    floor,
    wallLeft,
    wallRight,
    Top
]);

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
        Matter.World.clear(world);
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

// prevent reloading on accident
document.addEventListener("change", () => {
    window.onbeforeunload = function () {
        return true;
    }
});

var button = document.getElementById("rsButton");
button.addEventListener("click", function () {
    event.preventDefault();
    restartSim();
});

/* X/Y object scale 
   This part of the code will be changed v1.1
*/
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

var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
    element: canvas,
    constraint: {
        render: {
            visible: false
        },
        stiffness: 0.96
    }
});
Matter.World.add(world, mouseConstraint);

Runner.run(engine);
Render.run(render);

var f = document.getElementById("file");

// Shapes
var defaultP = Matter.Bodies.rectangle(985, 90, 90, 90, {
    density: 0.001,
    friction: 0.01,
    frictionAir: 0.0001,
    restitution: 0.1,
    render: {
        fillStyle: 'white',
        strokeStyle: 'white',
        lineWidth: 0
    }
});
Matter.World.add(world, defaultP)

function Polygon() {
    var newP = Matter.Bodies.polygon(985, 90, 5, 50, {
        density: 0.001,
        friction: 0.01,
        frictionAir: 0.0001,
        restitution: 0.1,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 0
        }
    });
    Matter.World.add(world, newP);
}

function Circle() {
    var newP = Matter.Bodies.circle(985, 90, 50, {
        density: 0.001,
        friction: 0.01,
        frictionAir: 0.0001,
        restitution: 0.1,
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
        density: 0.001,
        friction: 0.01,
        frictionAir: 0.0001,
        restitution: 0.1,
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
        density: 0.001,
        friction: 0.01,
        frictionAir: 0.0001,
        restitution: 0.1,
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
        density: 0.001,
        friction: 0.01,
        frictionAir: 0.0001,
        restitution: 0.1,
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
        density: 0.001,
        friction: 0.01,
        frictionAir: 0.0001,
        restitution: 0.1,
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
        density: 0.001,
        friction: 0.01,
        frictionAir: 0.0001,
        restitution: 0.1,
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
        density: 0.001,
        friction: 0.01,
        frictionAir: 0.0001,
        restitution: 0.1,
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
        engine.world.gravity.y = 1.5;
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
