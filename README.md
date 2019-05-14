# Project Name

​Employee Manager

# Developers

​Jesus Benages , Miguel Angel Moreno , Marc Benaiges

# Link to App:

​https://employeemanager-ca333.firebaseapp.com/login

* use in mode mobile device at browser, iphone X prefered

## Description

A web-app where you can manage the task and schedules of your employes

## User Stories

​
- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

- **Signup:** As an anon I can sign up in the platform 

- **Login:** As an user I can login to the platform 

- **Logout:** As an user I can logout from the platform so no one else can use it

- **Home:** As an admin I can see all the status of my workers and click in each of them

- **Calendar:** As an admin I can go to the calendar so I can see the schedule of my workers

- **Calendar:** As an user I can go to the calendar so I can see the schedule of my company

- **Calendar Id:** As an admin I can see particulary the schedule and the task of one worker

- **Calendar Id:** As an user I can see my schedule and my own task so I can organice myself

- **Add worker:** As an admin I can add a worker to my company so I can give him a profile and tasks

- **See status:** As an admin I can check each status of my worker so I can controll who has accepted

- **Edit worker:** As an admin I can edit my worker's profile so I can modify their schedule or task

- **Delete worker:** As an admin I can delete a worker of my bussines

- **Profile:** As an user I can go to my profile so I can see my data, edit it and do log out

​

## Backlog

​- Second User

- General Calendar

- Import Data to other format

- Be able to confirm the schedule


- ...

 

# Client

​medium and small companies

## Routes

| Method | Path | Component | Permissions | Behavior | 

|--------|------|--------|--| -------|

| `get` | `/` | HomePageComponent| public | just promotional copy|

| `post` | `/auth/signup` | SignupPageComponent| anon only| signup form, link to login, navigate to homepage after signup|

| `post` | `/auth/login` | LoginPageComponent | anon only |login form, link to signup, navigate to homepage after login |

| `post` | `/auth/logout` | -------| anon only | navigate to homepage after logout, expire session |

| `get` | `/calendar` |-----| user and admin | shows all task and a general schedule

| `get` | `/calendar/:id` | -----| user and admin  | show a worker calendar with his/her task

| `put` | `/calendar/:id/` |-------- | admin | edit the task and the schedule of a worker

| `get` | `/employee/new` | -------- | admin | add a worker view

| `get` | `/employee/new/data` | -------- | admin | creating user data view

| `get` | `/employee/new/schedule`|-------- | admin | creating user schedule view

| `post` | `/employee/new/data` | -------- | admin | create the user's data

| `post` | `/employee/new/schedule` | -------- | admin |create the user's schedule

| `get` | `/user` | --------| user - admin | user can see his/her own profile

| `put` | `/user` | -------- | user - admin| user can edit his/her own profile

| `get` | `/user/:id/` |-------- | user - admin | show a woker's editting schedule and data

| `get` | `/user/:id/data` |-------- | admin| show a worker's own data to edit it

| `get` | `/user/:id/schedule` |-------- | admin | show a worker's own schedule to edit it

| `put` | `/user/:id/data` |-------- | admin | edit the worker's data

| `put` | `/user/:id/schedule` |-------- | admin | edit the worker's schedule

| `get` | `**` | NotFoundPageComponent | public | 

​

​

​

​

## Components

- Pages:

    - Home

    - User

    - Calendar

- Components:
    
    - EmployeeCard
    
    - EmployesList

    - NavBar

    - Date

    - Schedule

    - CreateTaskForm

    - CreateEmployeDataForm
    
    - CreateEmployeScheduleForm

    - EditTaskForm

    - EditEmployeScheduleForm
    
    - EditEmployeDataForm



## Services

​

- Auth Service

 - auth.login(user)

 - auth.signup(user)

 - auth.logout()

 - auth.me()

 - auth.getUser() // synchronous

- Employees Service

 - employee.list()

 - employee.create(data)

 - employee.create(schedule)

 - employee.detail(id)

 - employee.delete(id)

​

# Server

​

## Models

Admin model

```

username - String // required & unique

password - String // required

workers - Array // ref worker

company - String // required

tlf - Number // required

adress - String // required

E-mail - String // required

```

worker model

```

workername - String // required

password - String // required

address - String // required

tlf - Number // required

tasks - Array // ref task model

Dni - String // required & unique

E-mail - String // required

schedule - Array [{days:[horaInicio1, HoraFinal1, horaInicio2, HoraFinal2]}]

```

task model

```

taskdescription - String // required

date - Date // required

initialTime - time // required

endTime - time // required

```


​

## API Endpoints (backend routes)

- GET /auth/me

  - 404 if no user in session

  - 200 with user object

- POST /auth/signup

  - 401 if user logged in

  - body:

    - username

    - email

    - password

  - validation

    - fields not empty (422)

    - user not exists (409)

  - create user with encrypted password

  - store user in session

  - 200 with user object

- POST /auth/login

  - 401 if user logged in

  - body:

    - username

    - password

    - rol

  - validation

    - fields not empty (422)

    - user exists (404)

    - password matches (404)

  - store user in session

  - 200 with user object

- POST /auth/logout

  - body: (empty)

  - 204

- GET /

- GET /adduser/

- GET /adduser/data

- GET /adduser/schedule

- POST /adduser/data

- POST /adduser/schedule

- GET /calendar/

- GET /calendar/:id/

- PUT /calendar/:id/

- GET /user/

- PUT /user/

- GET /user/:id/

- GET /user/:id/data

- GET /user/:id/schedule

- PUT /user/:id/data

- PUT /user/:id/schedule

- DELETE /user/:id


​

## Links

​

### Trello/Kanban

​

[Link to your trello board](https://trello.com) or picture of your physical board

​

### Git

​

The url to your repository and to your deployed project

​

[Client repository Link](http://github.com)

[Server repository Link](http://github.com)

​

[Deploy Link](http://heroku.com)

​

### Slides

​

The url to your presentation slides

​

[Slides Link](http://slides.com)
