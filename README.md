# Milpac_Scraper
A Webscraper built in Node.JS using Osmosis to scrape 7cav.us/rosters data for members.
Pulls Name, Primary Billet and upto 6 Secondary Billets. for each profile page.
Throws the data into a members.json file in the directory.

## How to run

```sh
$ npm install osmosis fs
```
Then,
```sh
$ node scrape.js
```
