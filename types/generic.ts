export type Maybe<T> = T | undefined;
export type ReqRes<Req, Res> = (req?: Req) => Promise<Maybe<Res>>;
