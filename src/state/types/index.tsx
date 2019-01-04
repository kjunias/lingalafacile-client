export interface IStoreState {
    translate: {
        from: {
            language: string,
            value: string
        },
        to: {
            language: string,
            value: string
        }
    };
}
export type StoreState = IStoreState;