interface Hosts {
  starwars: string;
  marvel: string;
  myapp: string;
}

export default {
  starwars: process.env.REACT_APP_MF_STAR_WARS,
  marvel: process.env.REACT_APP_MF_MARVEL,
  myapp: process.env.REACT_APP_MF_MYAPP,
} as Hosts;
