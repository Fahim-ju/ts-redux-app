class User{
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

    constructor(
        id: number,
        name: string,
        username: string,
        email: string,
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            };
        },
        phone: string,
        website: string,
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        }){
            this.id = id;
            this.name = name;
            this.username = username;
            this.email = email;
            this.address = address;
            this.phone = phone;
            this.website = website;
            this.company = company;
        }
};

const user = new User(
    326,
  "Md Fahimul Karim",
  "Fahim",
  "f.nahian@gmail.com",
  {
    street: "abc",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  "0171522022",
  "fahim.com",
  {
    name: "Kaz Software",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  }
  );

  export {user, User};