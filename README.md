# Evaluate News Articles with NLP Project

## Overview
In this project, I built a webtool that allows users to run NLP on articles and blogs found on other websites.
Using the Aylien API, this tool gives back pertinent information about the article, such as the subjectivity, polarity, and the confidence the API has in its analysis. 

Node and express are used for the webserver and routing, and webpack is used for module bundling and asset management. Using webpack, I have set up the app to have dev and prod environments.

This project also utilizes Jest to handle testing and has service workers to allow for offline access.