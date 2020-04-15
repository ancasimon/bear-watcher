# Compete

## Description
This site is an exploration into using ES6 modules. It allows the park rangers in Alaska's Katmai National Park to track brown bear feeding behavior during salmon season in July and August, keep a record of the bears' attempts and succeses catching fish, and quickly identify the winners. Project instructions can be found [here](https://github.com/nss-nightclass-projects/exercise-vault/blob/master/MODULES_bear_watcher.md).

## Background
This project was a culmination of what we learned during the Patterns & Tools milestone in our front-end program.

Some of my hikes along the years have allowed me glimpses of these massive and gorgeous carnivores. No, I will not get out of my car and take a picture even at some distance in front of a black bear at Cades Cove in the Smokies, and, yes, I will sing at the top of my lungs and put bells on my backpack as I hike through Glacier National Park. Like with all wildlife, I love enjoying bears from a distance. And that's why I also particularly enjoyed working on this assignment and staring at these pictures for hours as I was figuring out various nuances of the site. I mean - wouldn't you want to be out there? Just ... on the opposite side of the mountain, checking them out through binoculars!


## Feature List
1. Users can track a new bear by quickly adding a name and photo. The name is required, and a user's entry is validated accordingly.
1. Users can record if a bear on the list has attempted to catch a fish (and failed) or if he/she actually succeeded. 
1. Users can see the details of each bear's activity, including a tally of their total catches and a list of attempts and succeses with timestamps. 
1. The site instantly calculates the top 3 winners and displays their names and photos for the user's review. If multiple bears have caught the same number of fish and their score falls in the top 3, then the podium displays all the bears with that score. 


## Screenshots
##### Home Page
![Home Page](./bear-watcher-screenshots/home.png)
##### Bear Name Validation
![Bear Name Validation](./bear-watcher-screenshots/validation.png)
##### Individual Bear Activity
![Individual Bear Activity](./bear-watcher-screenshots/bear_activity.png)

## Technologies & Tools
Bootstrap, CSS, ES6 Modules, Github (for version control), HTML, JavaScript (vanilla), JQuery

## How to Run
1. Clone down this repo.
1. Make sure you have http-server installed via npm. If not, get it [here](https://www.npmjs.com/package/http-server).
1. On your command line, run `hs -p 9999`.
1. In your browser, navigate to `http://localhost:9999`.
