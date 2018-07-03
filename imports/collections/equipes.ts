import { MongoObservable } from 'meteor-rxjs';

import { Equipe } from '../models/equipe';

export const Equipes = new Mongo.Collection('equipes');
Equipes.attachSchema(Equipe);
export const EquipesObservable = new MongoObservable.Collection(Equipes);



