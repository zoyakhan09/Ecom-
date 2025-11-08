The project is divided into two main components: a Backend API (simulated or actual) and a Frontend built with React.
Core Features
Product Browsing: Display a grid of mock products.
Shopping Cart: Add, remove, and view items in the cart.
Checkout: Process a mock transaction and display a receipt.
Responsive Design: Optimized layout for various screen sizes.
Component,Technology/Framework,Description:
    Frontend:-React (with Vite/CRA)User interface and state management for cart/products.
    Backend:-Node.js/Express (or Mock API),Handles the defined API endpoints for data and logic.
    Styling:-CSS Modules/Tailwind/Bootstrap,Used for responsive styling.
Method,Endpoint,Description:-
    GET,/api/products,Retrieve a list of 5-10 mock products.,None,"[{id, name, price}, ...]"
    POST,/api/cart,Add an item to the cart.,"{productId: string, qty: number}",Updated cart contents.
    DELETE,/api/cart/:id,Remove a specific item from the cart.,None,Updated cart contents.
Frontend React Features :
    The React application implements the following views and components:
    Product Grid: Displays all products with an "Add to Cart" button.
    Cart View: Lists cart items, quantity, price, total, and allows removing items.
    Checkout Flow: Includes a simple form for user details and displays a receipt modal after submission.

Installation and setup 

Prerequisites
Node.js (LTS recommended)

npm or yarn

Steps
Clone the Repository:

Bash

git clone [Your Repository URL]
cd [project-folder]
Install Backend Dependencies:

Bash

cd backend
npm install
Install Frontend Dependencies:

Bash

cd ../frontend
npm install
Run the Backend Server:

Bash

cd ../backend
npm start
The backend should run on http://localhost:4000 (or configured port).

Run the Frontend Application:

Bash

cd ../frontend
npm run dev
The frontend should run on http://localhost:5713 (or configured port).