 <img src="https://raw.githubusercontent.com/roomierplanet/KWHousing/main/client/public/LogoKWH.png?token=AKLDIBJM6H4D7SY5SDILYQDB3ZHVI" width="60">
 
# KWHousing

KW Housing (KWH) is an online portal listing student housing in the the Kitchener-Waterloo region.
This project helps consolidate tenant reviews to help students make informed decisions. 

Deployment Link - https://kwhousing.herokuapp.com
<br>
<br>

# Features
In its current state, KWH allows users to view existing properties as well as add new properties which
may not be listed. In addition, it also provides the ability to delete and update properties which will
be changed to a request-based system on public release.

The application allows users to add reviews to the properties, with a rating and a description. This automatically
adjusts the average rating of the property and adds the user review to the details page.

The search functionality allows users to navigate directly to different properties based on their name and address.
<br>
<br>

# Technologies
This application was written using the PERN Stack (PostgresQL, Express, React, Node)

PostgresQL was the database of choice since properties and reviews as entities could be efficiently tied
together using a relational database.

I used Express in conjunction with NodeJS to minimize redundacy in the routes by using various middleware such
as Express Routers, bodyParser, Morgan etc.

React was an obvious choice to implement the frontend - it made managing components and associated data retrieved
fromt the server easy to manage, modify, and display. The ContextProvider made it easy to distribute the properties
and reviews to respective components as needed. ReactRouter was used to make the user-navigation a fast experience.

Overall, this stack has been a great choice for an application of this design. It has helped optimize the lines
written for the functionality provided. It is very modular and is open to design changes on both the back-end
and the front-end.
<br>
<br>

# Latest Changes
This application is in a state of continuous development. This section keeps track of the latest changes to KWH, sorted from new to old.

*Latest Update: 18th January*

* **Interactive Rating Component**\
Nobody wants to type out their rating! The new implementation allows users to visualize the rating they are giving. 

* **Image Hosting** \
As of 15th January 2021, images uploaded to the website are now stored using the Cloudinary CDN. Earlier, users were able to only provide URLs to their images which was not very friendly. Upcoming changes include addition of image_id to the database so it can deleted once the property is deleted.
<br>
<br>

# Improvements / Upcoming Changes
This is my first full-stack project - needless to say it has numerous ways it can be improved. Here are a few upcoming improvements:
<br>
<br>

*  **Adding, Updating and Deleting Properties**\
The current iteration of this app demonstrates the ability to make the POST, PUT AND DELETE HTTP requests to the server using these respective buttons. Clearly this is not secure for a product open to the public. The future implementation of these buttons involves the data being fed to a request table for each of the respective queries which will be pushed after being reviewed by the administrator (me!). __Update:__ For now, I have added permission codes to each CRUD operation to disallow users from performing these operations without authorization. To test these, please email me so I can provide you with a temporary passcode.

* **Responsiveness**\
It was brought to my attention by the initial release group for this application that the website was not as resposive for mobile interfaces. I have since added various media queries for the landing page and individual property pages. However, there is still work to be done on the main page and certain other elements.

* **User authentication** \
Since the application helps students make informed decisions about living in a certain residence for an extended period of time, it is of utmost importance for reviews to be added by users. This avoids duplicaion of reviews and other malicious intentions protected by anonymity
<br>
<br>

# Conclusion
This project has been a great learning experience for me. I believe it has the potential to be of great use for students in the Kitchener-Waterloo region for the years to come. Any suggestions regarding the implementation or the functionality of this application will be much appreciated!