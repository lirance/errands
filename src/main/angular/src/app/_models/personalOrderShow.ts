import {User} from "./user";

export class PersonalOrderShow {
  orderid: number;
  itemlist: [string];
  storeadd: string;
  destination: string;
  state: string;
  timelimit: number;
  tip: number;
  maker: User;
  recipient: User;
  rated: string;
}
