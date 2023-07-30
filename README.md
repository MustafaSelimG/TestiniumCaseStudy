# TestiniumCaseStudy
>*libraries*  Selenium , Cucumber , JUnit , WebDriverManager , Log4j
     
   **Background:**</br>
      - *Given* cookies accepted</br>
      - *And* verify the homepage is open</br>

  **Scenario: case study**</br>
    - *Then* verify the account section</br>
    - *And* verify the favorites section</br>
    - *And* verify the basket section</br>
    - *When* search for "pantolan"</br>
    - *Then* result page should be seen</br>
    - *And* scroll to the end of the page</br>
    - *And* click the show more button</br>
    - *And* select the product randomly</br>
    - *And* add product the basket</br>
    - *And* verify the product price</br>
    - *And* increase the number of products</br>
    - *When* delete products from basket</br>
    - *Then* basket should be empty</br>
    </br>
    
You can run program from CucumberRunner</br></br>
**Case 1**</br></br>
![case2](https://user-images.githubusercontent.com/88919177/147646328-cba871a6-19f6-4325-b472-afacb03ef666.gif)
</br></br>
**Case 2**</br></br>
![case](https://user-images.githubusercontent.com/88919177/147645916-2c06fe8d-d634-48c4-9ecd-da077b46faab.gif)
</br></br>
In this case, since the product variety cannot find the products with more in stock, it chooses the products that are less in stock.</br>
Then, since the product quantity is only 1, it deletes from the basket without increasing the quantity.
</br></br>
**Generates report after the case**</br></br>
![report](https://user-images.githubusercontent.com/88919177/147645944-18065d29-3a6e-40c6-829a-1c1c241021b5.gif)
</br></br>
**When the case failed**</br></br>
![reportfail](https://user-images.githubusercontent.com/88919177/147647325-f8291dbf-747f-4f54-ab39-02ae705cda9e.gif)

