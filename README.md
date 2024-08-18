# ECOM Store with NextJS

## Tech Stack

- NextJS
- TailwindCSS
- Typescript
- Fake Store API
- Zustand (State Management)
- React Icons

# Detailed Features:

Product Listing Page:

* Display at least 6-10 products using a grid layout
* Each product card should include:
  * Product image
  * Product name
  * Product price (formatted for currency)
  * "Add to Cart" button`x

Add to Cart Functionality:

* Clicking the "Add to Cart" button on a product should:
  * Add the chosen product to a user's virtual shopping cart.
  * Update the cart icon or a dedicated counter to reflect the number of added items (optional).
  * Provide visual feedback (e.g., animation) confirming the item's addition.

Cart Page:

* Display a dedicated cart page where users can manage their selected products.
* The cart page should include:
  * A list of all added products, displaying:

    * Product image
    * Product name
    * Product price
    * Quantity selector (up/down buttons or input field) to adjust the amount of each item.
    * "Remove Item" button to delete a specific product from the cart.
  * Cart summary section:
  * Subtotal: Calculate the total cost of all items in the cart based on their quantity and price.
  * Discounts (optional): Implement the ability to apply discounts on the total price. This could involve:
  * Fixed discounts (e.g., "\$10 off")
  * Percentage discounts (e.g., "10% off")
  * Total price (including discounts): Display the final price the user needs to pay.
  * Checkout button (optional): This can redirect to a simulated checkout page or provide a message indicating successful cart addition.

Evaluation Criteria:

* Code Logic and Cleanliness:

  * Well-structured, readable, and maintainable code with proper indentation and comments.
  * Efficient use of state management to keep track of products and cart items.
* Design Symmetry:
* Consistent layout and user interface throughout the application.
* Responsive design to adjust for different screen sizes.
* Reusable Components:
* Create reusable components for product cards, cart items, and other common UI elements.
* Completeness of Features:
* Implement all listed features with proper functionality.

**
