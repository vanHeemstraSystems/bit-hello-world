# 600 - Create a remote scope

A [scope](https://bit.dev/reference/scope/scope-overview) is a collaboration server for components. It lets you export components from your workspace, store them remotely, and collaborate on them with others. Developers with access to your scope can use your components or suggest changes.

Scopes help organize components in a shared domain of responsibility. For example, the [analytics](https://bit.cloud/teambit/analytics?_gl=1*1x46i8j*_ga*MTgyMjIxMzQ4MS4xNjkxMzk3MzQx*_ga_C0T2GH2G99*MTY5MTQwNjAxMi4yLjEuMTY5MTQwNzI3My41Mi4wLjA.) scope includes all components that provide analytics services, and the [design](https://bit.cloud/teambit/design?_gl=1*17llrex*_ga*MTgyMjIxMzQ4MS4xNjkxMzk3MzQx*_ga_C0T2GH2G99*MTY5MTQwNjAxMi4yLjEuMTY5MTQwNzI3My41Mi4wLjA.) scope includes the services for our design language.

Run the following to log in to your [bit.cloud](https://bit.cloud/?_gl=1*17llrex*_ga*MTgyMjIxMzQ4MS4xNjkxMzk3MzQx*_ga_C0T2GH2G99*MTY5MTQwNjAxMi4yLjEuMTY5MTQwNzI3My41Mi4wLjA.) account: (user: willemvanheemstra)

```
$ bit login
```

**Set** the components in your workspace with **your newly created remote scope** (replace 'my-org' with your username or organization name. For example, john.my-wiki):

```
$ bit scope rename org.scope-name my-org.my-scope-name --refactor
```

Run the following to [link](https://bit.dev/reference/workspace/component-links) to components (with their newly renamed scopes) from the ```node_modules``` directory:

```
$ bit link
```

Run the following to compile all components:

```
$ bit compile
```
