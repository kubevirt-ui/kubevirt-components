# DemoUseResources

DemoUseResources is a demo component to serve as a boilerplate when creating a new component.

Examples:

A virtual machine with one condition:
```js
<DemoUseResources namespaced={true} name="vm-example" namespace="default" errorText="Missing virtual machine data"/>
```

Missing virtual machine:
```js
<DemoUseResources namespaced={true} name="does-not-exist" namespace="default" errorText="Missing virtual machine data"/>
```
