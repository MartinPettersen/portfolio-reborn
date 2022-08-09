---
title: 'First look at Nextjs'
date: 'June 29 2022'
description: 'When creating this site I decided that I would try something new and unfamiliar.
It was time to try Nextjs.'
---
Nextjs is a React framework and at first glance looks very similar to another React framework. You guessed it, Gatsby. But my knowledge of Gatsby is not good enough
to get into the pro's and cons or any real comparison between them.
So instead you get a small comparison about how working with NextJss differs from ReactJs.

We start of pretty similar:
'npx create-react-app app-name' to create a single page application in React
'npx create-next-app app-name' to create a single page application in Nextjs

If you prefer typescript they both got you covered:
'npx create-react-app --template typescript app-name'
'npx create-next-app --typescript app-name'


With Nextjs being an React application you use 'npm start' 'npm run start' and 'npm run build' on both of them.

The first big difference you are going to notice going from ReactJs to Nextjs is routing.
With NextJs you don't have to do your own routing.
While routing might not be that hard or time consuming its still a nice quality of life feature.
Although one downside with the Nextjs's routing is that as far as I know it decides the path for you so 
pages/posts/blogs/index.js becomes https://mywebsiteportfolio3456.herokuapp.com/posts/blogs

Nextjs achieves this automatic routing by including server-side code

React creates a Single Page Application (SPA)
React creates client side code
Nextjs creates client side code and server side code.

React creates static
next.js can create dynamic and static?