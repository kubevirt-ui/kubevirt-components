[![NPM Version](https://img.shields.io/npm/v/gm.svg?style=flat)](https://www.npmjs.org/package/@kubevirt-ui/components)
[![codecov](https://codecov.io/gh/kubevirt-ui/kubevirt-components/branch/main/graph/badge.svg?token=wkLwgaN6YD)](https://codecov.io/gh/kubevirt-ui/kubevirt-components)
[![DeepSource](https://deepsource.io/gh/kubevirt-ui/kubevirt-components.svg/?label=active+issues&show_trend=true&token=eMPSTlO760qY3rcrQ7I5rK5D)](https://deepsource.io/gh/kubevirt-ui/kubevirt-components/?ref=repository-badge)

# @kubevirt-ui/components

![alt gopher network](https://raw.githubusercontent.com/kubevirt-ui/kubevirt-components/main/images/logos.png)

React Component Library for Kubevirt UI ([API reference](https://kubevirt-ui.github.io/kubevirt-components/))

## Add to your project

```bash
yarn add -D @kubevirt-ui/components
```

## Contributing

When contributing code, use the development server, and check for linting documentation and testing.

Run linter
```bash
yarn lint # or yarn lint:fix to fix trivial linting errors
```

Run tests
```bash
yarn test 
```

Run develpment server (http://localhost:6060):
```bash
yarn styleguide 
```

Run develpment server with cluster proxy (http://localhost:9090):
```bash
yarn styleguide:proxy 
```

Build the static documentation:
```bash
yarn styleguide:build 
```

## When should I contribute my components to this repository?

When a componenet used by an application is stable it can be published in this components repository so public users could: 

- Use the components for exiting new applications
- Study how the component works
- Redistribute the component as they are
- Modified and create better components based on the components in this repository

## How to document my component when contributing to this repository? 

Before moving a component to this repo make sure the code is [documented](https://tsdoc.org/) with descriptions and
examples in a [markdown](https://www.markdownguide.org/) doc as needed to help users who are not familiar with the application
and context understand what is the purpose of the component and how to use it.

## Scope

Kubevirt UI compoents is a curated list of stable and documented components used by Kubevirt UI aplications and libraries.
Kuevirt UI is based on [PatternFly](https://www.patternfly.org/) and [Openshift console](https://github.com/openshift/console), it extend them to create specilized components needed for Kubevirt design.
