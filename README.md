# Self-Driving Cars

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

