import { MongoObservable } from 'meteor-rxjs';

import { Personne } from '../models/personne';

export const Personnes = new Mongo.Collection('personnes');
Personnes.attachSchema(Personne);
export const PersonnesObservable = new MongoObservable.Collection(Personnes);


