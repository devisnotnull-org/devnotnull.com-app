import * as io from 'io-ts';

import { Guest } from './guest';

export const Party = io.type({
    email: io.string,
    secret: io.string,
    guests: io.array(Guest)
})

export type IParty = io.TypeOf<typeof Party>