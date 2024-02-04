# Telegram Weather Bot
This is a weather bot, specifically in Telegram, where user can subscribe for weather updates of their city and get weather updates every 24 hours. 
There is an Admin Panel as well, which can control the bot : block, unblock and delete the user, change the API Keys. 

### Telegram Bot ID : @weather_Myupdater_bot

### Tech Stack
1. Nest.js
2. React.js
3. MongoDB
4. Typescript
5. Tailwind CSS

### Running the project
1. Fork and Clone the repository.
2. In one terminal, navigate to the Nest.js directory (weather-app).
```
cd weather-app
```
3. Install the packages
```
yarn
```
4. Before Running, Make sure to replace all the env variables. 
5. Run the project
```
nest start
```
5. In another terminal, navigate to the frontend directory.
```
cd frontend
```
6. Install the packages
7. Run the project
```
yarn dev
```
8. Visit @weather_Myupdater_bot on Telegram.

#### Commands with Telegram bot :
1. /weather <city-name> : Get the current weather of the city
2. /subscribe : Subscribe for updates every 24 hours. 
3. /setcity <city-name> : Set the city to which weather updates should be recieved
4. /unsubscribe : Unsubscribe from the weather updates.

### Screenshots
#### Telegram Bot : 
![IMG_20240107_080052](https://github.com/devesh-2002/telegram-weather-bot/assets/79015420/7ef5dfbf-238f-46c2-a445-504d8341720b)

#### Admin Panel : 

<img width="765" alt="image" src="https://github.com/devesh-2002/telegram-weather-bot/assets/79015420/c7913aab-3017-4882-a8e9-de25096dba08">
