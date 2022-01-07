## API Task
For this task, you will have 7 days to complete

What I would like you to do is create a web app that can accomplish the following:

    "I would like to be able to find all of the languages used by an Organization on github
    and see how many of their projects use each language."


Your app should have:

    * Documentation to instruct myself or any others on how to set up the project locally and run it.
    * Should access the Github public API (https://docs.github.com/en/rest)
    * Some sort of testing
    * A simple single input form

## Getting Started

First, clone this Repo to the desired directory `git clone https://github.com/shawnlikescode/revlogical_asssignment`.

The node_modules for this project have been gitignored. Will you need to run `yarn or npm`
to ensure you have all the necessary dependencies.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

You can open [http://localhost:3000](http://localhost:3000) with your browser to see this Next application is not running.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/orgs/:org](http://localhost:3000/api/org/:org). This endpoint can be edited in `pages/api/orgs/[org].js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Generate your access token

```js
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo

// pages/api/orgs/[org].js
// This line provides authenication
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// Rename .env.local.example to .env.local 
// Replace the placeholder with the token you generated previously

// env.local
- GITHUB_TOKEN=GITHUB_SECRET_TOKEN
+ GITHUB_TOKEN=YOUR_TOKEN_HERE
```
Project should now be functional.

## Directory Tree

```bash
├── README.md
├── __tests__
│   ├── Home-test.js
│   ├── Search-test.js
│   └── Table-test.js
├── components
│   ├── Button.jsx
│   ├── Search.jsx
│   └── Table.jsx
├── jest.config.js
├── jest.setup.js
├── next.config.js
├── package.json
├── pages
│   ├── _app.js
│   ├── api
│   │   └── orgs
│   │       └── [org].js
│   └── index.jsx
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── styles
│   ├── Home.module.css
│   └── globals.css
├── tailwind.config.js
└── yarn.lock
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
