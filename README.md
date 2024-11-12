# Ensemble

**Ensemble** is a virtual closet app designed to help you organize your wardrobe, plan outfits, and take inventory of your items. Built with **React**, **Sass**, **Material UI**, and **Knext.js**, it features a custom REST API powered by **Node.js** and **Express** with **MySQL** for data storage. Future iterations will include **React Native** to enhance mobile functionality, particularly for seamless picture-taking capabilities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

---

## Features

- **Closet Organization**: Store items in your virtual closet with custom categories, descriptions, and tags.
- **Outfit Planning**: Plan outfits by selecting items and saving combinations for specific days or occasions.
- **Item Search**: Use filters and tags to quickly find specific items in your closet.
- **Customizable Categories and Tags**: Personalize item categories and tags to match your style.
- **User-Friendly Interface**: Enjoy a responsive and intuitive interface powered by Material UI and Sass.
- **Backend API Integration**: Store and manage data through a custom REST API built with Express and MySQL.

## Tech Stack

- **Frontend**: React, Sass, Material UI
- **Backend**: Node.js, Express, MySQL
- **API**: Custom REST API for seamless data management
- **Database**: MySQL with Knex.js for query building


## Usage

- **Add Items to Closet**: Add new items by entering details like name, category, tags, and a description.
- **Plan Outfits**: Use the outfit planner to select items for specific dates or occasions.
- **Search and Filter**: Use the search bar or category filters to quickly access items in your closet.

## API Endpoints

Core API endpoints:

- **GET /api/items** - Retrieve all items in your closet.
- **POST /api/items** - Add a new item to your closet.
- **PUT /api/items/:id** - Update an item’s details.
- **DELETE /api/items/:id** - Remove an item from your closet.
- **GET /api/outfits** - Retrieve all saved outfits.
- **POST /api/outfits** - Create a new outfit.
- **DELETE /api/outfits/:id** - Delete an outfit.

**Constantly working to improve chicCloset and look forward to bringing new features in the future to enhance the user experience.**
