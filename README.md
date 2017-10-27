# README

[ ![Codeship Status for maxsean/restaurants-reviews](https://app.codeship.com/projects/bb466cb0-94c4-0135-bb8f-2651940696f3/status?branch=master)](https://app.codeship.com/projects/251043)

![Code Climate](https://codeclimate.com/github/maxsean/restaurants-reviews.png)

![Coverage Status](https://coveralls.io/repos/maxsean/restaurants-reviews/badge.png)

# Eatalike
A review website for restaurants

## Introduction
This project was created in two weeks as part of a bootcamp curriculum. The goal was to create an application with RESTful API back-end and a React-featured front-end. Users can sign up to post their restaurant(s), leave a review on other restaurants, and upvote or downvote other reviews. Users can also view demographic data of a restaurant's reviews to gain a quick impression.  

## Technologies
* Ruby on Rails: back-end mainly used for API endpoints
* React.js: React app for quick and responsive user interface
* D3.js: visualization of review demographic data
* Devise: user authentication and authorization
* Carrierwave: image upload
* Capybara: testing Rails components and features
* Jasmine-Enzyme: testing React components and features

## Setup
In app directory, run:
```
bundle install
rake db:create
rake db:migrate
rake db:test:prepare
rails s
```
In a separate terminal tab, run:
```
yarn install
./bin/webpack-dev-server
```
Then navigate to `localhost:3000`.

For Capybara tests run `rake`
and for Jasmine-Enzyme tests run `karma start`.

## ToDo
* External API integration
* Search filters
* Review filters


## Contributors
* [Mark Swinimer](github.com/markswinimer)
* [Olivia Zhang](github.com/oliviayizhang)
* [Dev Person](github.com/devlin-person)
* [Sean Ma](github.com/maxsean)
