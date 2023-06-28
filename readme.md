
## Live Site Link

- [live-Site](https://incomparable-rugelach-c1c755.netlify.app/)


## Deployment

Run this project

Clone the Repository & go to the folder and run these command:
```bash
  yarn install
  yarn dev
```


## Technology Used 
* Vite, 
* React 
* Tailwind-CSS 
* React Router 
* React-hot-toast 
* Redux-toolkit, RTK Query, Redux-Persist.

## Features

**Pages:** Homepage, Checkout Page, Search page

**Functionalities:** 
* Write something on search bar & click on search button. It will take you to search page and show you the result. Search will work on keypress.
* See All Products by default
* Can see products by category
* Add to cart products. If enough products not available you can not add to cart.
* Remove product & delete products from cart.
* Responsive UI
* If an item has 10 or more items available, show it as “Available” on the UI as well or
else will show the exact number of items available
* Else product status show the quantity.
* Buy 6 cans of Coca-Cola, and get one free. Free items price will add to discount
* Buy 3 croissants and get a free coffee. Free item will show on UI & price will be add to subtotal & discount.
* You can able to navigate back and forth between the 2 pages with retain the cart information(Done by redux persist)
* The subtotal, discount and totals are calculated correctly