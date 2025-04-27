# Mini Message Board

<div align='center'>
  <a href='./README-pt-br.md'>
    [PT-BR]
  </a>
</div>

<br>

A simple and intuitive message board application built with Node.js and Express, allowing users to post and view
messages in a clean interface.

![Website Preview Image](./public/assets/preview.png)

## Features

- Create and post messages
- View all messages in chronological order
- Clean and responsive user interface
- Form validation
- PostgreSQL database integration

## Technologies

- Node.js
- Javascript
- Express
- EJS
- PostgreSQL
- Express Validator

## Installation

### Prerequisites:

- Node.js installed
- PostgreSQL installed

<br>

1. Clone this repository

```bash
git clone https://github.com/thomasmfx/mini-message-board.git
```

2. Install the dependencies

```bash
npm install
```

3. Add a `.env` file in the root of the project. Next, add the desired port number and your local database URL

```js
PORT=<port-number>
DATABASE_URL=<local-database-url>
```

> [!NOTE]
> The database URL is meant to look like this: `postgresql://<user>:<password<@localhost:<port>/<database>`


4. Populate the database (this script is designed to be ran only once)

```bash
npm run seed
```

5. Start the development server

```bash
npm run dev
```

If everything goes well, you should be able to open the application in the URL displayed in the terminal.

## Contact

If you have any questions, suggestions, or just want to connect, feel free to reach out:

- **Email:** thomasmoisesf@gmail.com
- **LinkedIn:** [Thomas Moisés](https://www.linkedin.com/in/thomas-moises-fernandes/)
- **GitHub:** [thomasmfx](https://github.com/thomasmfx)

***

<p align='center'>
  <em>
    "The calmer you are, the clearer you think."
  </em>
</p>