---
title: Adventure - A Space Adventure
permalink: /projects/adventure/
layout: page
---

{% include button.html text="Download as zip" link="http://ci.brycemehring.me/downloads/" %}

## Description
***
This is my own personal project using my own game engine. The motivation behind this project was to get a lot of ships on the screen moving, being able to give orders to move the ships, and have the ships move intelligently while having knowledge of their surroundings. I ended up using a flocking algorithm that the ships abide by with an added in user component to control the behavior of the ships. All of the different components of the flocking behavior can be changed in game. The ship sprites were created by [millionthvector](http://millionthvector.blogspot.com/p/free-sprites.html).

## Controls
***

### Game management:
* ESC: change the game state to the plugin loader. If in the plugin loader, ESC will exit the game.
* F1: toggle rendering of the quadtree
* F5: toggle V-sync
* F6: toggle FPS
* To change the resolution, edit the file `VideoModes.txt` and place `F` for fullscreen or `W` for windowed on the end of the line for the mode you want to use.

### Unit Movement:
* Select units by left clicking on them individually or by dragging the mouse over many.
* Move selected units by right clicking on their suggested destination.
* Pressing the delete key will destroy selected units.

### Camera Movement:

* The camera can be moved by:
    * Arrow keys
    * Moving the mouse to the edge of the screen
    * Middle clicking while dragging the mouse
* The camera can zoom in and out by using the mouse scroll wheel.

## System Requirements
***

* Video Card: OpenGL 3.3 support
