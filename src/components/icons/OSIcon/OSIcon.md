OSIcon render icons of commonly used operating systems. 
It can be used to give visual clues for a template or virtual machine that use a specific operating system.

Simple example:

```js
<OSIcon width='40px' iconClass='icon-rhel' />

```


Showcase in a card:

```js
import { Button, Card, CardBody, CardFooter, CardHeader, CardHeaderMain, CardTitle } from '@patternfly/react-core';

  <Card>
    <CardHeader>
      <CardHeaderMain>
        <OSIcon width='40px' iconClass='icon-debian' /> 
      </CardHeaderMain>
    </CardHeader>
    <CardTitle>    
        Debian Server
    </CardTitle>
    <CardBody>
        <div>
            <label>Template creation date: </label>
            
            <span className=''>
                {Date.now().local}
            </span>
        </div>

        <div>
            <label>Workload: </label>
            
            <span className=''>
                Server
            </span>
        </div>
    </CardBody>
    <CardFooter><Button>Create Virtual Machine</Button></CardFooter>
  </Card>


```