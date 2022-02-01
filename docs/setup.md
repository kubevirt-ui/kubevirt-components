# Kubevirt UI shared components - setup

## Init yarn workspaces plugin

``` bash
corepack enable
yarn init -2
yarn plugin import workspace-tools
```

## Init rollup

``` bash
yarn add -D @rollup/plugin-typescript
yarn add -D rollup-plugin-dts
```


## Init Kubevirt project eslint plugin definitions

Copy `common` and `eslint-plugin-internal` packages from https://github.com/openshift/dynamic-plugin-sdk
Copy `.prettierrc` from packages from https://github.com/openshift/dynamic-plugin-sdk

``` bash
yarn add -D typescript @typescript-eslint/parser
yarn add -D @typescript-eslint/eslint-plugin
yarn add -D eslint-plugin-promise@latest
```
