# Possession App

With this web app the user can take the possession of each team and make stats out of it. It may be a good tool for journalist or 
coaches that need stats from amateur teams.

## Technologies

I start with create react-app and been working with Visual Studio Code

## Issues

I am just starting the project.

When clicking on div but on the clock itself the counter doesn't start. SOLUTION: Instead e.target had to use e.currentTarget to select the div ID. 

Include a color picker for each team. Be carefull with de clocks color. SOLUTION: Added color picker from "react-color-picker" (https://github.com/super-effective/react-color-picker).

When pausing the counters to edit, the color on the color picker has a grayscale applied effect. SOLUTION: I had to put the StopWatch and the Picker on a different DIV and had to center it with postion:absolute.

Need to display the percentaje of possetion of each team. Im triying to do it when clicking on a button. After clicking the button the app needs to take the "time" of each team and calculate the percentaje. SOLUTION: Create a div over the rest of the app that includes de clock data of each team (including no-team possession). When click to open this div overlap the rest of the app. Then you can close it. 


When the clock is on 0 the stats div returns Nan for percentaje. SOLUTION: I create a function called nanCorrector. The problem was that when the sum of all clocks was "0", during the process i would be a zero division. With this function i solved it: 

function nanCorrector(number) {
        if (isNaN(number)) {
            return 0;
        }
        else {
            return number;
        }
    }

The play/stop button is not clear enought. My idea is to implement a ON/OFF switch. SOLUTION: Using "react-switch" i replace the play/stop button with a Switch ON/OFF. Its easier to understand and makes a better User Experience. And its cuter.