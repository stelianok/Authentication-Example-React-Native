interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'opyrr3fasffa90i01qe9123eji1ij1foi13jfio13',
        user: {
          name: 'Kauã',
          email: 'stelianok@gmail.com',
        },
      });
    }, 2000);
  });
}
