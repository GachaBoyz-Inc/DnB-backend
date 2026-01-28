export default interface ResponseUtil<T> {
  status: number;
  message?: string;
  data?: T;
}