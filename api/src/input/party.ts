import * as io from 'io-ts';

import { Party as PartyModel } from '../model/party'

export const PartialParty = io.partial({
    secret: io.string
})

export const Party = io.intersection([PartyModel, PartialParty])

export type IParty = io.TypeOf<typeof Party>