## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```


## Technical Stacks

- Vue 2

- Vuex 3

- TypeScript

- Class Component

- Unit testing with Jest and Vue testing library


## How it works

I followed atomic design approach. So there are atoms, molecules and organisms.

There is one Button component in atoms, and molecules are each steps in Form. Form is organism.

There is a step variable which stands for step in Form. It shows different Step compoment based on step store variable.

When click `Back` or `Next` button it mutates the step variable in store, and the different steps are displayed.

It also stores for form data in store and communicate between components with Vuex.

Thanks
