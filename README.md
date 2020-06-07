# ReadIt-Blog
A Blog application that holds CRUD operations and Authentications, designed using React as a front-end and Ruby On Rails in the back-end

# Title
ReadIt-Blog


# Overview
This is a blog application that holds CRUD operations and Authentications, designed using React as a front-end and Ruby on Rails in the back-end. It will have a homepage that lists all created articles, and users will be able to create, edit and delete their own articles, after they have signed up or signed in.

# Features
It will be a webpage that uses React to display a homepage that holds a title, an article, and any image file associated with it. It allow user to view all articles to be viewed without having a user sign in, but once a user signs in, it will allow the user to edit or delete his own posts, while being able to view others articles as well. In the back end, Rails will determine that proper json files are created with a user having many articles, and an article belonging to a single user, and also allow authentication for a user to sign in and store password_digest locally using bcrypt. Each article will also have many comments, and those comments will belong to a single article as well.  

# Goals
- have a restful api
- users table
- articles table
- comments table
- full crud for articles and comments 



# Challenges
- Users having access to CRUD only after signing in
- Users having access to CRUD for comments on others' posts
- Using React to generate all components, and joining backend commands with front end
- Having a full understanding of authentication.

# MVP
- Having a whole system running with users, articles and comments. Allowing users to CRUD their own articles and comment on other user articles. 
- Having a restful api ready for use on React
- full authentication on both back end and front end.

# Client
Wire-frames, component hierarchy, component breakdown, and time-frame estimates.

# Server
Data architecture, ERD model, and API endpoint documentation.

# Dependencies
A full list of all libraries, frameworks, etc.

# Post-MVP
Your goals for post-MVP, including features that you would like to implement once your MVP is complete.
