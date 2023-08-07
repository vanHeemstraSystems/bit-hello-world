# 400 - Preview components

A Bit component is a reusable, independently source-controlled module, that is stored in [scopes](https://bit.dev/reference/scope/scope-overview) and maintained in [workspaces](https://bit.dev/reference/workspace/creating-workspaces). Bit components enable a new software development strategy that can be used to complement monorepos and poly-repos, or replace them, altogether.

Run the Workspace UI to preview your components (**NOTE**: If you want the browser to continue serving your page, open a new terminal session for the below command):

```
$ bit start
```

You will be prompted to open a new browser window for each components that is being displayed.

```
webpack 5.84.1 compiled successfully in 53561 ms
ENVIRONMENT NAME                                                                            URL                                                                                         STATUS
teambit.node/node@0.1.12 on behalf of teambit.node/node@0.1.12,                             http://localhost:3300                                                                       RUN
ENVIRONMENT NAME                                                           URL                                                                        STATUS
teambit.node/node@0.1.12 on behalf of teambit.node/node@0.1.12,            http://localhost:3300                                                      RUNNING
org.scope-name/react-env-extension
teambit.envs/env                                                           http://localhost:3301                                                      RUNNING


You can now view 'my-hello-world' components in the browser.
Bit server is running on http://localhost:3001
```

The workspace UI displays all components maintained by your workspace. Use it to explore your components' [compositions](https://bit.dev/reference/compositions/compositions-overview), [documentation](https://bit.dev/reference/docs/docs-overview), [dependency graph](https://bit.dev/reference/dependencies/inspecting-dependencies), [version history](https://bit.dev/reference/components/navigating-history), and more.

![image](https://github.com/vanHeemstraSystems/bit-hello-world/assets/1499433/ab7a0486-b2ca-4757-b361-01b939b47871)
