# Exomine

This project has you building an application that lets governors of different colonies in our Solar System purchase minerals from various mining facilities that human have established.

## Learning Objectives

Completing the project is not your objective. Your focus is to building the following skills and deepen your knowledge of the concepts.

1. Collaboration (are you helping your team succeed)
1. Productivity (are you wasting too much time before asking for help)
1. Data types
1. Data structures
1. Navigating data relationships using primary keys and foreign keys

Quote from previous student...

> "This project has made me realize the importance of an ERD and quality design of your data structure and how to access that data."

## Wireframe

This is the general layout provided by your product owner. Please follow this guideline for your project's layout.

![wireframe for project](./images/wireframe.png)


## Workflow Animation

This animation shows you the basic behavior of the application.

![](./images/exomine.gif)

## Data Relationships

Below you can ready some basic information about the properties and relationships of the data you need for this application. 

## Governors

Each human habitation colony in the Solar System _(Earth, Mars, Europa, etc...)_ has a governor. To keep each colony running efficiently, the governor has to purchase essential minerals from lightly staffed mining facilities that have been established on asteroids, moons, and rocky planets.

From time to time, governors take leaves of absence, so their status can change from active to inactive. Only active governors should be displayed in the UI.

## Colonies

Each colony can have one, or more, active governor depending on the size of the colony. For example, Earth could support up to five governors that are responsible for different regions of the planet.

## Mining Facilities

Each mining facility can be active or inactive depending on the changes of staffing from the various companies that operate the facilities. Each object representation should record the name of the facility and its active status.

If a mining facility is inactive, then the button in the UI should never be enabled, even after a governor is chosen.

## Minerals

Each mining facility can produce several kinds of minerals. Each mineral type can be produced at several mining facilities.

# Stretch Goal

**Do not attempt the stretch goal until you have completed the basic requirements above.**

If your team would like to do more advanced state manipulations, refactor your code to allow a governor to select minerals from multiple mining facilities before finalizing the purchase. A working example done by a previous team can be seen at [https://solar-mine.onrender.com/](https://solar-mine.onrender.com/). 
