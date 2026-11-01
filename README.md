# Self Driving Cars

An interactive self-driving car simulation built with HTML, CSS and JavaScript. You design a road world in a built-in editor, then cars drive through it using sensors to see their surroundings and a neural network to decide how to steer. You can watch the network work in real time and save the best driver.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MihaiCulbida/self-driving-cars.git
   cd self-driving-cars
   ```

2. Open the folder in your code editor and run it with a local server such as the **Live Server** extension, or from the terminal:

   ```bash
   python3 -m http.server 8000
   ```

   Then open `http://localhost:8000` in your browser.

## How to use

The project has two pages and they must be used in this order:

1. **`world/index.html`**: the World Editor, where you build the map.
2. **`index.html`** (the main page): the simulation, where the cars drive on that map.

---

## Step 1: World Editor (`world/index.html`)

Open `world/index.html` first. The editor is where you create the world the cars will drive in. Whatever you build here is what the simulation loads.

### What the editor does

You draw the **road network** and decorate it with **road markings** and **scenery**. The world is built from simple pieces:

- **Points and segments (the graph)**: roads are drawn as points connected by segments. Each segment is turned into a road surface with lanes, and where segments meet they form intersections and curves.
- **Road markings**: signs and paint placed on the road.
- **Scenery**: trees and buildings generated around the roads.
- **Viewport**: you can move around and zoom the map while you work.

### Road markings

- Start - where the cars begin driving.
- Target - the destination the cars aim for.
- Stop - a stop sign, cars must stop here.
- Yield - a yield sign, cars give way here.
- Crossing - a pedestrian crossing.
- Parking - a parking spot marking.
- Traffic light - a traffic light that controls an intersection.

### Scenery

- **Trees** are placed around the roads.
- **Buildings** are generated along the roads.

### Saving the world

When your map is ready, save the world in the editor. Then open the main `index.html`, which loads the saved world.

---

## Step 2: The simulation (`index.html`)

Open the main `index.html` after the map is saved.

The screen has two parts:

- **Left side**: the road with the cars driving on it, using the map you built.
- **Right side**: a live view of the neural network, showing how the car "thinks" while it drives.

### How the cars drive

- Each car has **sensors** (rays) that measure the distance to road edges, obstacles and traffic.
- The sensor readings go into a **neural network**, which outputs the controls: forward, left, right and reverse.
- Cars that drive well are kept, and the next cars learn from them.

### Buttons

- **Save**: saves the best car's neural network, so the next run starts from it.
- **Discard**: deletes the saved neural network, so the cars start learning from scratch.

---

