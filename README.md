#Single Page Responsive Webdesign Example

A simple property application

#Technologies used

Reach  
SASS  
HTML5
Bootstrap
Gulp
Axios
Express

#Description
I made one of the sections in the design more dynamic than the other ones, thats why i built a inner server to the application just to simulate like a server. This server provides data to "Feedback" section in the design.  
To run the server simply  run `mpm run server` in the `Server` folder on directory.  
After that you can easly run the apps itself with `npm start` in main directory.  

Everything in this app made by using `Component` methodology.
SASS used in design, also splitted in folder called components in sass folder.  

Also, both CSS and JS files are compiled and minified with Gulp and concatenated to single files like `app.min.css` and `app.min.js` in public folder.  

#What's next?
You can go one step further, and compile also JSX files with gulp and translate them with transpilar like Babel to ES5 or older for better browser compability.  
