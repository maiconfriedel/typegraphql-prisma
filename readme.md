# Running the API

First, install the dependencies using `npm install` or `yarn`, and then run:

```shell
#npm
npm run generate

#yarn
yarn generate
```

This will generate the folder `/prisma/generated` with the generated models and resolver based on the file `schema.prisma`.

Then run `npm run dev` or `yarn dev` and access <a href="http://localhost:3333">http://localhost:3333</a> to see the API running.