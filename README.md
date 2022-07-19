# Cv Creator
A simple cv creator app that can be used to create cv and save that cv as pdf.

Built as an assignment for the react section of [The Odin Project](https://github.com/TheOdinProject).

Details for the assignment can be found [here](https://www.theodinproject.com/lessons/node-path-javascript-cv-application).

Use it [here](https://hattima-tim.github.io/cv-project/).

## Demo

Picture of a cv that was created by the app:

![](https://res.cloudinary.com/du3oueesv/image/upload/v1657289612/Screenshot_2022_0708_200921_cuab78.png)

## Built With

- React
- Material ui
- react-to-print

## Features

1. Save the cv that was created as a pdf.
2. Add personal details (`name, email, phone`) to the cv.
3. Add educational information (`school name, the title of study, from, to`) to the cv.
4. Add multiple educational information.
5. Add work experience (`company name , job title, from, to`) to the cv.
6. Add multiple work experience.
7. Delete and edit information.

## Possible future change
* [x] A rewrite of the project using functional components. This project is mostly written using class components to become familiar with it.

* [ ] Addition of `toggle color mode` button for using dark mode.

## Known bugs

1. If you don't give your first name and last name then the cv that will be created will show your name as `undefined undefined` .

2. This bug is a complex one to explain. So, normally if you want to edit a piece of information you will press the edit button and a form will appear that is related to the information. But if you give same information to multiple forms of the same section (work/education), save those forms, and try to edit one of the forms, all the forms that was previously submitted will appear in front of you instead of the form that you want to edit.

## Reflections
A perfect first project for react. At first, I thought it will be an easy one but it didn't take long for it to become hard. Enjoyed the project a lot though. Had a lot of practice with state and props. Feeling a lot more confident with react after the project.
