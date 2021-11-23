import * as io from 'io-ts';

export const Guest = io.type({
    name: io.string,
    type: io.string,
    starter: io.string,
    main: io.string,
    desert: io.string,
    requirements: io.string
})

export type IGuest = io.TypeOf<typeof Guest>
