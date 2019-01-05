export interface IStoreState {
    translate: {
        from: {
            language: string,
            text: string
        },
        to: {
            language: string,
            text: string
        }
    };
}
export type StoreState = IStoreState;