Simple example

```js
<ConditionLabel
  message={'success'}
  reason={'ready'}
  status={'true'}
  type={'Ready'}
/>
```


Showcase

```js
import { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

<TableComposable>
  <Caption>Virtual Machines list</Caption>
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Conditions</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Virtual Machine 1</Td>
      <Td>
        <ConditionLabel
          message={'success'}
          reason={'ready'}
          status={'true'}
          type={'Ready'}
        />
      </Td>
    </Tr>
    
    <Tr>
      <Td>Virtual Machine 2</Td>
      <Td>
        <ConditionLabel
          message={'no vmi found'}
          reason={'no_vmi'}
          status={'true'}
          type={'Failure'}
        />
      </Td>
    </Tr>
  </Tbody>
</TableComposable>
```
