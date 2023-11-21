# SENG-FLEX-082823-Project-1
First Project - show ranker with local json DB

## Learning Goals

- Design and architect features across a frontend
- Communicate and collaborate in a technical environment
- Integrate JavaScript and an external API
- Debug issues in small- to medium-sized projects
- Build and iterate on a project MVP

## Overveiw

This project is a simple show ranker site. 
Users can see a list of 5 popular shows and highlight the ones that they like best in this list

## Details

JSON DB - This site relies on a JSON db that serves as a controlled data source. 
The original content came from https://api.tvmaze.com/singlesearch/shows 
This data was cleaned and abbeviated to a simpler data set.

JS - The js fetches the data from the db and renders it in order by ID
Inner HTML is used to create the show cards 
The site listens to the dom and uses create element to build the HTML, 
query selector to select individual element IDs and event listener to color the users favorite show
JS functions are used to fetch the db data and create the show cards 

HTML - The HTML is primarily a shell for the JS to add elements to
The form is the primary site element that is built in HTML to intake a users email

CSS - CSS is also a shell that provides very simple styles for the site elements created by the js





