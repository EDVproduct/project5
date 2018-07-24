## Jasmine-test-feedreader by Esther de Veer
Build testing suites with Jasmine to check main functionalities of a FeedReader step-by-step (Project 5). 
 Created for the Udacity _
- Front End Web Developer Nanodegree (Full Google Scholarship) -

## Using

Clone this repo to your desktop, go to `udacity-feed-reader-testing` its directory and run:

index.html



## Instructions:
- Students are given the `RSS feedreader as Udacity startercode`,features included.
- __Goal__ is to __test the RSS feedreader with Jasmine "test-driven development"__ by modifying the Feedreader.js file. 
- The Feedreader consists of the following:
1) You can select 4 different feed sources in a menu. 
2) Each time a new source is selected, a new news feed is loaded.
3) hidden menu (by default).
4) The menu displays when click on menu icon with CSS/HTML class.

## Installation:
- __Clone__ this repository or __download__ it as a .zip file.
- Open the `index.html` file in the browser, to open the RSS reader.
- Check the test results on the page bottom.



## FeedReader Functionality: (Test suites and tests)
4 different __test suites__, with 8 separated Jasmine tests:
1: `RSS feeds` definition
2: `Menu` behaviour
3: `Initial Entries` loaded on the page
4: `New Feed selection` load asynchronously, once another source is selected. 

1) Testsuite 1 __`RSS Feeds`__checks,
 if:
	- RSS sources `are defined`, 
	- RSS `contain a valid URL`, 
	- RSS have `a valid name` (not be empty or undefined)
2) Testsuite 2 __`The menu`__checks:
- The Menu `is hidden by default` 
- The Menu `change visibility if icon is clicked`. 
- The Menu is hidden, if the body has the 'menu-hidden' class.  
- The Menu displays if click on menu icon.
- Body's class is available at page load
- Body class is hidden en displayed if the icon is clicked.

3) Testsuite 3 __`Initial Entries`__ checks:
- First feed collection (`allFeeds`array) loads within feed container (in HTML). 
- Test starts _AFTER_ this content feed is loaded. 
- The `loadFeed` function is asynchronously called by the `beforeEach` function.
- Test store the feed elements in an array.
- Array elements have to contain more than nothing (>0).

4)Testsuite 3 __`New Feed Selection`__ checks: 
- The `Feed_02` contents a user selects, loads within feed container (in HTML) to replace the `Feed_01`. 
- The content is asynchronously called by the `beforeEach` function to load correctly.
- Both `newFeed` and `oldFeed` contents are stored in a variable.
- Both variables are compared. If their content differ, the HTML content(= Feeds) will be different as well.

## Requirements:
The FeedReader testing need to fullfill the following code criteria [Project Rubric Link](https://review.udacity.com/#!/rubrics/18/view).

 original [Udacity's Project](https://github.com/udacity/frontend-nanodegree-feedreader).

## Technologies
 
 HTML5 / CSS3
 Javascript
 Jasmine
 jQuery
