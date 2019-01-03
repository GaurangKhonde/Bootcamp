<?php
  include 'backend/getproducts.php';
   $products = getallproducts();
   $product = getsingleproduct(12);
    print_r($product);

?>