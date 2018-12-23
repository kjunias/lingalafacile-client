export interface IStoreState {
    translate: {
        from: {
            language: string
        },
        to: {
            language: string
        }
    };
}
export type StoreState = IStoreState;