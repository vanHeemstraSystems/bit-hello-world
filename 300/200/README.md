# 200 - Initialize a workspace

Initialize a workspace to start your journey into component-driven development. A workspace is a group of files and directories that provide the necessary context for components to be authored, composed, maintained, and collaborated on.

Run the following to create a workspace with a few components included, using the [hello-world starter](https://bit.cloud/teambit/community/starters/hello-world?_gl=1*b0egob*_ga*MTgyMjIxMzQ4MS4xNjkxMzk3MzQx*_ga_C0T2GH2G99*MTY5MTQwNjAxMi4yLjEuMTY5MTQwNzI3My41Mi4wLjA.):

**NOTE**: As we already created the workspace ```my-hello-world```, simply skip below command.

```
$ bit new hello-world my-hello-world --env teambit.community/starters/hello-world
```

You will be prompted as follows:

```
Congrats! A new workspace has been created successfully at '/workspace/bit-hello-world/my-hello-world'

Inside the directory 'my-hello-world' you can run various commands including:

      bit start
        Starts the workspace in development mode

      bit install
        Installs any missing dependencies

      bit status
        Shows the status of the components

      bit compile
        Compiles the components

      bit test
        Runs the tests on all your components

      bit templates
        Shows all available component templates

      bit help
        Shows all available commands


Let's get started!

      cd my-hello-world
      bit run hello-world-app
      bit start
```


Open your workspace directory:

```
$ cd my-hello-world
```
