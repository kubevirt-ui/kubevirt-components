Examples

```js
<ConditionLabelList conditions={[
    {
      message: 'no vmi found',
      reason: 'no_vmi',
      status: 'true',
      type: 'Failure',
    },
    {
      message: 'success',
      reason: 'ready',
      status: 'true',
      type: 'Ready',
    },
  ]}
/>
```

Showcase 
```js
  <div>
    <span>Virtual Machine 1  </span>
    <ConditionLabelList conditions={[
        {
          message: 'no vmi found',
          reason: 'no_vmi',
          status: 'true',
          type: 'Failure',
        },
        {
          message: 'success',
          reason: 'ready',
          status: 'true',
          type: 'Ready',
        },
      ]}
    />
  </div>
```