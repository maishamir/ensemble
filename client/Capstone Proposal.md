# Ensemble

## Overview

What is your app? Brief description in a couple of sentences.

Ensemble is a modern wardrobe management tool which takes inspiration from Cher's closet from the movie 'Clueless'. It allows users to take pictures of their clothing and assemble them into an outfit.


### Problem

Many people lose track of which pieces of clothing they own and how to style them. And a lot of people, like myself, tend to suffer from decision fatigue when it comes to planning outfits, or finding the perfect outfit for an event.
In addition, this would just be a fun, interactive way to organize and plan outfits. 

### User Profile

Fashion enthusiasts, professionals, and just anyone who wants to be able to speed up the process of planning an outfit.
Users will interact with the app by uploading pictures of their clothes, categorizing them, and then use the app to plan their outfits.
Special considerations: easy-to-use interface

### Features

- users can upload and categorize clothing
- outfit planning calendar
- a way to share outfits to social media
- outfit suggestions based on weather/events


## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.
Frontend: React
Backend: Node.js, Express.js
Database: postgreSQL

### APIs

OpenWeather, Imagga for image recognition 

### Sitemap

Home screen - overview/outfits of the day suggestion
Closet screen: manage/view clothing items
Outift planner: calendar/outfit creation
Profile: user setting and preferences

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

clothing items: details such as color, type, category, image, type of weather to wear it in (optional)
outfits: combinations of clothing items set for specific days (i.e. work, brunch, date, interview, etc.)


### Endpoints

GET /clothes - retrieve list of all clothing items
POST /clothes - add a new clothing item
GET /outfits - retrieve all planned outfits
POST /outfits - plan a new outfit
GET /weather - (not sure about this one yet) get weather data to generate different outfit suggestions

### Auth

Users create accounts and log in
JWT for authentication
Maybe OAuth for different social platform sharing (Facebook, Instagram, etc.)

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

### Project setup and UI design
1. Finalize mockup for Different screens
2. Set up project structure (i.e. frontend vs backend)
3. Create components for Home, Closet, and Outfit planner

### Backend and database setup
1. Set up Express server
2. Setup PostgreSQL database schema
3. Setup API endpoints for managing clothing

### Core feature development
1. Implement upload and categorization functionality
2. Develop outfit planner screen (with google calendar integration?)
3. Integrate OpenWeather for weather-based outfit ideas.

### Integrating/Testing frontend to backend flow
1. Connect frontend to backend
2. Test out data flow (adding clothes, getting outfits, etc.)

### Advanced feature implementation
1. Social sharing (optional)
2. User authentication setup

### Bug Fixing
1. Check for bugs in frontend
2. Add a user guide

## Nice-to-haves

AI-powered outfit suggestions (based on mood, goal aesthetic - i.e. spring, whimsical, etc.)

