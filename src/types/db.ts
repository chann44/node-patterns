export interface baseRecored {
  id: string;
}

export interface Database<T extends baseRecored> {
  get(id: string): T | undefined;
  set(newValue: T): void;
}
