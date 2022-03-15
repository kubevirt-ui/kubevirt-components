
type ResponseType = 'basic' | 'cors' | 'default' | 'error' | 'opaque' | 'opaqueredirect';

const getText = (buff: Buffer) => {
    return new Promise<string>(function(resolve) {
        resolve(buff.toString());
    });
};

const getJSON = (buff: Buffer) => {
    return new Promise<unknown>(function(resolve) {
        resolve(buff.toJSON());
    });
};

const bufferToResponse = (buff: Buffer) => {
  return {
    cache: null,
    credentials: null,
    destination: '',
    integrity: '',
    keepalive: false,
    method: 'GET',
    mode: null,
    referrer: '',
    referrerPolicy: null,
    signal: null,
    headers: null,
    ok: true,
    redirected: false,
    status: 200,
    statusText: 'ok',
    type: 'basic' as ResponseType,
    url: '',
    clone: () => null,
    body: null,
    bodyUsed: false,
    arrayBuffer: null,
    blob: null,
    formData: null,
    json: () => getJSON(buff),
    text: () => getText(buff),
  };
};

export default bufferToResponse;