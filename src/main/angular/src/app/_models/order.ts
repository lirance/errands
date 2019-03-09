import {User} from "./user";

export class Order {
  orderid: number;
  itemlist: [string];
  storeadd: string;
  destination: string;
  state: string;
  timelimit: number;
  tip: number;
  maker: User;
  recipient: User;
}
