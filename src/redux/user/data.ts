interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };

};

  const user = {
    id: 326,
  name: "Md Fahimul Karim",
  username:"Fahim",
  email: "f.nahian@gmail.com",
  address: {
    street: "abc",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "0171522022",
  website: "fahim.com",
  company:{
    name: "Kaz Software",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  }
  };
export {user};
export default User;