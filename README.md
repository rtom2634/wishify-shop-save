# Wishify - A Shopify-inspired Wishlist Application

## Overview

Wishify is a Shopify-inspired web application that allows users to browse products and save their favorites to a wishlist for later consideration. This project demonstrates a responsive, modern e-commerce interface with wishlist functionality.

## Features

- **Product Browsing**: View a collection of products on the home page
- **Wishlist Functionality**: Save products to a wishlist for later viewing
- **Persistent Storage**: Wishlist items are stored in the browser's localStorage
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Toast Notifications**: User-friendly notifications when adding or removing items from the wishlist

## Technologies Used

### Core Technologies
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Static typing for improved development experience
- **React Router**: Navigation and routing between pages
- **Vite**: Modern frontend tooling and build system

### Styling and UI
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Beautifully designed components built with Radix UI and Tailwind
- **Lucide Icons**: Simple and consistent icon set

### State Management
- **React Context API**: For global state management of the wishlist
- **LocalStorage**: For persisting wishlist data between sessions

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
Navigate to the project directory:


cd wishify
Install dependencies:


npm install
Start the development server:


npm run dev
Open your browser and navigate to:

http://localhost:5173
Project Structure
/src: Source code for the application
/components: Reusable UI components
/contexts: React Context providers
/data: Mock product data
/pages: Page components for different routes
/lib: Utility functions and helpers
Future Improvements
User authentication for personalized wishlists
Integration with a backend database for persistent storage across devices
Product filtering and searching capabilities
Animated transitions between pages
Integration with an actual e-commerce API
License
This project is licensed under the MIT License.

