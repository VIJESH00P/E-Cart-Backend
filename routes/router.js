// To define routes for client request,create route folder and router.js files

   //import express
    const express=require('express')
   //import productController
    const productController= require('../controllers/productController')

    //import wishlist controller
    const wishlistController=require('../controllers/wishlistController')

    //import cart controller
    const cartController=require('../controllers/cartController')

    //using express create an object for router class inorder to setup path 
   const router=new express.Router()

    // Resolving Client Requests
    // api - getallproduct request

    router.get('/products/all-products',productController.getallproducts)

   //api - get particular product
    router.get('/products/view-product/:id',productController.viewProduct)

    //api -product added wish list product
    router.post('/wishlist/add-to-wishlist',wishlistController.addtowishlist)

    //api to get wish list product
    router.get('/wishlist/get-wishlist',wishlistController.getWishlistitems)

     //api - remove wishlist item
     router.delete('/wishlist/remove-wishlist-item/:id',wishlistController.removewishlistitems)

     //api - add to cart
     router.post('/cart/add-to-cart',cartController.addtocart)

     //api - get cart items
      router.get('/cart/get-cart',cartController.getcart)

    // api -remove item from cart
    router.delete('/cart/remove-item/:id',cartController.removecartitems)

     //api - increment quantity
     router.get('/cart/increment-count/:id',cartController.incrementcount)

     //api - decrement quantity
     router.get('/cart/decrement-count/:id',cartController.decrementcount)



    //export router
    module.exports = router