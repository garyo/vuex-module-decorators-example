# vuex-test

This project shows how to use Vuex and vuex-module-decorators
with static module setup, including how to access modules from one another.

The source is organized like this:

```
src
├── App.vue
├── main.ts
└── store
    ├── index.ts
    ├── modules
    │   ├── modB.ts
    │   └── user.ts
    └── store-accessor.ts
```

The idea is that `App.vue` only imports from `store`, which exports all the
stores (root as default, and each module). It can use those modules
type-safely thanks to vuex-module-decorators.

The store's `index.ts` imports from `store/store-accessor` and sets up the
init plugin that initializes the modules' stores. It also (critically) ensures
that all the modules (the module classes, not the instances) are in the root
store's `modules`.

`store/store-accessor.ts` is where the magic happens: it defines exported
Store vars which are instances of each Module class, and defines the init
plugin that creates them from their classes. They need a top-level store
before they can be initialized, and this works because the plugin is called
only when the Vuex store is set up.

The modules themselves are standard vuex-module-decorators modules. The key
insight here is that to access state/getters/actions from other modules, don't
import the module directly (e.g. `import ... from '@/store/modules/moduleB`);
import the `modBStore` store instance from `@/store/store-accessor`. That way
the circular imports don't matter because those vars will have valid values by
the time they're needed (during mutations or actions).
I put in some console.log statements so you can see that when the module's
code is run, `modBStore` is undefined; but that's OK because the plugin will
initialize it before it can be used.

## Note on Module vs. Store

The Stores exported by `src/store/store-accessor.ts` are the
vuex-module-decorators store instances; they have the generated state, getter,
mutation and action methods. The Modules (e.g. `UserModule`) are just the
constructor functions for a Vuex module (resulting from the
vuex-module-decorators decorator).

## Note on Circular Imports

To allow modules to access one other, circular imports are necessary.
However, they are OK in this case.

ES6 imports are done in two phases: creation, and execution. In the creation
phase, all the modules are scanned, and import dependencies are determined.
Also all class and variable declarations are set up and "hoisted" -- but no
code is actually run yet. What this means is that by the time the execution
phase starts, for example `UserModule` class is available from `user.ts` (it's
a class declaration), and `userStore` is available from `store-accessor.ts`
(it's a variable declaration), although it is still undefined.

Then in the execution phase the modules' source code is read and run, which
gives all the variables their values, and runs any immediate code in the
modules. At that point you'll see the console.log functions running.

We set up a third phase in this project: we define a "store plugin" that runs
when the Vuex store is initialized by Vue, i.e. when the project is created.
At that point, `initializeStores` in `store-accessor` runs, and creates the
stores using `getModule()`. Then `userStore` is defined and usable.

(Be careful to always use "live bindings" for things to be defined later;
"export" is fine, but don't use "export default" except for classes.)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

You probably don't want to do this with this project, but you can:
```
yarn run build
```

### Lints and fixes files

```
yarn run lint
```
