import { Database, baseRecored } from "./types/db";
import { Log } from "./types/log";

class MemDatabase<T extends baseRecored> implements Database<T> {
  private db: Record<string, T>;

  constructor() {
    this.db = {};
  }

  public get(id: string): T {
    return this.db[id];
  }
  public set(newValue: T): void {
    this.db[newValue.id] = newValue;
  }
}

const logDb = new MemDatabase<Log>();

logDb.set({
  id: "1",
  message: "hello",
  url: "localhost",
});

console.log(logDb.get("1"));
console.log(logDb.get("2"));
