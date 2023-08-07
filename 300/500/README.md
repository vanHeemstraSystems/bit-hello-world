# 500 - Collaborate

Run the following to verify there are no issues preventing Bit from [snapping](https://bit.dev/reference/components/snaps) each component, independently:

```
$ bit status
```

The output should confirm all components are ```ok``` to be snapped. The components' [status](https://bit.dev/reference/workspace/workspace-status) is currently ```new``` as they were [forked](https://bit.dev/docs/components/importing-components#forking-components) by the workspace starter and not [imported](https://bit.dev/getting-started/collaborate/importing-components#fork-a-component).

```
(use "bit tag [version]" to lock a version with all your changes)
 
new components 
 
> hello-world-app ... ok 
> ui/hello-world ... ok 
> get-hello-world ... ok
```

The snapping process creates an immutable snapshot of the components' latest changes. The component's 'scope' property is part of these changes. Follow the next section to create your own scope and set your components, accordingly.