# *Website Preview*
![Website preview Image](https://i.ibb.co/SJj6cgR/Screenshot-45.png)



## Features of this site
- ### ***Course Selection*** : Users can select and add courses to their cart by clicking the "Select" button on each course card. The page keeps track of the selected courses.
- ### ***Cart Summary*** : The page displays a cart summary that includes the selected courses' total price, total credit hours, and remaining credit hours available. Users can see a real-time update of their selections.
- ### ***Credit Limit Check*** : The page implements a credit limit check to ensure that users do not exceed a maximum of 20 hours of credit. If the limit is exceeded, a toast notification is displayed to inform the user.
- ### ***Responsive Design*** : The page has a responsive design, ensuring that it adapts to different screen sizes and devices, providing a consistent user experience across various platforms.

## State Management in this site
In this page, state management is at the core of the user experience, enabling seamless course selection and real-time updates. The primary state variable, 'cart,' keeps track of the courses users select, ensuring they can review and modify their choices easily. As users interact with the 'Select' button on course cards, the state dynamically updates, reflecting the current cart composition. The 'total' state variable calculates and displays the cumulative price of selected courses, offering transparency on the financial aspect of their choices. Additionally, the 'time' state variable monitors the total credit hours associated with the selected courses, facilitating users in planning their academic workload. To maintain adherence to a maximum credit limit, the 'remainingCredit' state keeps users informed about their remaining credit hours, providing feedback and alerting them if the limit is surpassed. This state management, driven by React's 'useState' hook, ensures that the page's interface remains synchronized with users' actions, resulting in an intuitive and responsive course selection experience. It showcases the power of React's state management capabilities in creating interactive web applications that offer real-time feedback and control to the users.

## If you wnat to visit the site. [Click Here](https://poised-face.surge.sh/)
