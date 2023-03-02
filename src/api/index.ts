import { IWork } from './interface/IWork';
import WorkData from './mock/works.json';

export function getWorkList() {
  return WorkData;
}

export function getWorkByUrl(url: string) {
  return WorkData.find((x: IWork) => x.url === url);
}
