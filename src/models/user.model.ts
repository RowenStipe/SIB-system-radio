import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  uuid: string;

  @property({
    type: 'number',
    required: true,
  })
  locChannel: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  comms: object[];

  @property({
    type: 'string',
    required: true,
  })
  registerDate: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
