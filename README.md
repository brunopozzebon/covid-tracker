# Covid Tracker

Amid the chaos and uncertainty of the pandemic, I decided to create a visual map to track the current cases of Covid-2019. It´s been hard to see this numbers, because the situation is getting worse every day. So, if you wanna run this application, just follow the instructions bellow. 

Good luck to all of us!

![Captura de tela de 2020-04-21 22-24-25](https://user-images.githubusercontent.com/37053115/79931142-a6c57600-8420-11ea-97d4-e27de843b435.png)

## :gear: First of all
You need to create a token on [MapBox](https://www.mapbox.com/), it´s free and easy to use.
After this, you need to create a file called **.env** inside **./src**, and put the folling code
```bash
REACT_APP_TOKEN=<YOUR TOKEN>
```
Just replace <YOUR_TOKEN>, and it shold work

## :rocket: How to run it
```bash
# Clone this repository
git clone https://github.com/brunopozzebon/covid-tracker.git

# Go into the repository
cd covid-tracker

# If you are using Yarn
yarn install 

# Run locally, on localhost:3000
yarn start

# If you are using npm, replace the yarn command to npm
```

## :v: Acknowledgment

This project won´t be possible without the API that provide´s me data, actually, the owner of this API has a github account and offer the data by free. Check his github repository to see more information.  
[Rodrigo Pombo Repository](https://github.com/pomber/covid19)
