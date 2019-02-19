// GENERATED TYPES FOR NEXUS-PRISMA. /!\ DO NOT EDIT MANUALLY

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      User: UserObject
      PasswordMeta: PasswordMetaObject
      UserConnection: UserConnectionObject
      PageInfo: PageInfoObject
      UserEdge: UserEdgeObject
      AggregateUser: AggregateUserObject
      PasswordMetaConnection: PasswordMetaConnectionObject
      PasswordMetaEdge: PasswordMetaEdgeObject
      AggregatePasswordMeta: AggregatePasswordMetaObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      UserSubscriptionPayload: UserSubscriptionPayloadObject
      UserPreviousValues: UserPreviousValuesObject
      PasswordMetaSubscriptionPayload: PasswordMetaSubscriptionPayloadObject
      PasswordMetaPreviousValues: PasswordMetaPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      User: UserFieldDetails
      PasswordMeta: PasswordMetaFieldDetails
      UserConnection: UserConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      UserEdge: UserEdgeFieldDetails
      AggregateUser: AggregateUserFieldDetails
      PasswordMetaConnection: PasswordMetaConnectionFieldDetails
      PasswordMetaEdge: PasswordMetaEdgeFieldDetails
      AggregatePasswordMeta: AggregatePasswordMetaFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      UserSubscriptionPayload: UserSubscriptionPayloadFieldDetails
      UserPreviousValues: UserPreviousValuesFieldDetails
      PasswordMetaSubscriptionPayload: PasswordMetaSubscriptionPayloadFieldDetails
      PasswordMetaPreviousValues: PasswordMetaPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      UserWhereUniqueInput: UserWhereUniqueInputInputObject
      UserWhereInput: UserWhereInputInputObject
      PasswordMetaWhereInput: PasswordMetaWhereInputInputObject
      PasswordMetaWhereUniqueInput: PasswordMetaWhereUniqueInputInputObject
      UserCreateInput: UserCreateInputInputObject
      PasswordMetaCreateOneInput: PasswordMetaCreateOneInputInputObject
      PasswordMetaCreateInput: PasswordMetaCreateInputInputObject
      UserUpdateInput: UserUpdateInputInputObject
      PasswordMetaUpdateOneInput: PasswordMetaUpdateOneInputInputObject
      PasswordMetaUpdateDataInput: PasswordMetaUpdateDataInputInputObject
      PasswordMetaUpsertNestedInput: PasswordMetaUpsertNestedInputInputObject
      UserUpdateManyMutationInput: UserUpdateManyMutationInputInputObject
      PasswordMetaUpdateInput: PasswordMetaUpdateInputInputObject
      PasswordMetaUpdateManyMutationInput: PasswordMetaUpdateManyMutationInputInputObject
      UserSubscriptionWhereInput: UserSubscriptionWhereInputInputObject
      PasswordMetaSubscriptionWhereInput: PasswordMetaSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    UserOrderByInput: UserOrderByInputValues,
    PasswordMetaOrderByInput: PasswordMetaOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'user', args?: QueryUserArgs[] | false, alias?: string  } 
  | { name: 'users', args?: QueryUsersArgs[] | false, alias?: string  } 
  | { name: 'usersConnection', args?: QueryUsersConnectionArgs[] | false, alias?: string  } 
  | { name: 'passwordMeta', args?: QueryPasswordMetaArgs[] | false, alias?: string  } 
  | { name: 'passwordMetas', args?: QueryPasswordMetasArgs[] | false, alias?: string  } 
  | { name: 'passwordMetasConnection', args?: QueryPasswordMetasConnectionArgs[] | false, alias?: string  } 
  | { name: 'node', args?: QueryNodeArgs[] | false, alias?: string  } 

type QueryFields =
  | 'user'
  | 'users'
  | 'usersConnection'
  | 'passwordMeta'
  | 'passwordMetas'
  | 'passwordMetasConnection'
  | 'node'


type QueryUserArgs =
  | 'where'
type QueryUsersArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryUsersConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryPasswordMetaArgs =
  | 'where'
type QueryPasswordMetasArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryPasswordMetasConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryNodeArgs =
  | 'id'
  

export interface QueryFieldDetails {
  user: {
    type: 'User'
    args: Record<QueryUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  users: {
    type: 'User'
    args: Record<QueryUsersArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User[]> | prisma.User[]
  }
  usersConnection: {
    type: 'UserConnection'
    args: Record<QueryUsersConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserConnection> | prisma.UserConnection
  }
  passwordMeta: {
    type: 'PasswordMeta'
    args: Record<QueryPasswordMetaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: PasswordMetaWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMeta | null> | prisma.PasswordMeta | null
  }
  passwordMetas: {
    type: 'PasswordMeta'
    args: Record<QueryPasswordMetasArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: PasswordMetaWhereInput | null, orderBy?: prisma.PasswordMetaOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMeta[]> | prisma.PasswordMeta[]
  }
  passwordMetasConnection: {
    type: 'PasswordMetaConnection'
    args: Record<QueryPasswordMetasConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: PasswordMetaWhereInput | null, orderBy?: prisma.PasswordMetaOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMetaConnection> | prisma.PasswordMetaConnection
  }
  node: {
    type: 'Node'
    args: Record<QueryNodeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { id: string }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Node | null> | prisma.Node | null
  }
}
  

// Types for User

type UserObject =
  | UserFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'email', args?: [] | false, alias?: string  } 
  | { name: 'password', args?: [] | false, alias?: string  } 
  | { name: 'firstName', args?: [] | false, alias?: string  } 
  | { name: 'lastName', args?: [] | false, alias?: string  } 
  | { name: 'phone', args?: [] | false, alias?: string  } 
  | { name: 'passwordMeta', args?: [] | false, alias?: string  } 

type UserFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'email'
  | 'password'
  | 'firstName'
  | 'lastName'
  | 'phone'
  | 'passwordMeta'



  

export interface UserFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  email: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  password: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  firstName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  lastName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  phone: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  passwordMeta: {
    type: 'PasswordMeta'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"User">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMeta | null> | prisma.PasswordMeta | null
  }
}
  

// Types for PasswordMeta

type PasswordMetaObject =
  | PasswordMetaFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'resetToken', args?: [] | false, alias?: string  } 

type PasswordMetaFields =
  | 'id'
  | 'createdAt'
  | 'resetToken'



  

export interface PasswordMetaFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  resetToken: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for UserConnection

type UserConnectionObject =
  | UserConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type UserConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface UserConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'UserEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserEdge[]> | prisma.UserEdge[]
  }
  aggregate: {
    type: 'AggregateUser'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateUser> | prisma.AggregateUser
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for UserEdge

type UserEdgeObject =
  | UserEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type UserEdgeFields =
  | 'node'
  | 'cursor'



  

export interface UserEdgeFieldDetails {
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateUser

type AggregateUserObject =
  | AggregateUserFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateUserFields =
  | 'count'



  

export interface AggregateUserFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for PasswordMetaConnection

type PasswordMetaConnectionObject =
  | PasswordMetaConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type PasswordMetaConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface PasswordMetaConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PasswordMetaConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'PasswordMetaEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"PasswordMetaConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMetaEdge[]> | prisma.PasswordMetaEdge[]
  }
  aggregate: {
    type: 'AggregatePasswordMeta'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PasswordMetaConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregatePasswordMeta> | prisma.AggregatePasswordMeta
  }
}
  

// Types for PasswordMetaEdge

type PasswordMetaEdgeObject =
  | PasswordMetaEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type PasswordMetaEdgeFields =
  | 'node'
  | 'cursor'



  

export interface PasswordMetaEdgeFieldDetails {
  node: {
    type: 'PasswordMeta'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PasswordMetaEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMeta> | prisma.PasswordMeta
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregatePasswordMeta

type AggregatePasswordMetaObject =
  | AggregatePasswordMetaFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregatePasswordMetaFields =
  | 'count'



  

export interface AggregatePasswordMetaFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createUser', args?: MutationCreateUserArgs[] | false, alias?: string  } 
  | { name: 'updateUser', args?: MutationUpdateUserArgs[] | false, alias?: string  } 
  | { name: 'updateManyUsers', args?: MutationUpdateManyUsersArgs[] | false, alias?: string  } 
  | { name: 'upsertUser', args?: MutationUpsertUserArgs[] | false, alias?: string  } 
  | { name: 'deleteUser', args?: MutationDeleteUserArgs[] | false, alias?: string  } 
  | { name: 'deleteManyUsers', args?: MutationDeleteManyUsersArgs[] | false, alias?: string  } 
  | { name: 'createPasswordMeta', args?: MutationCreatePasswordMetaArgs[] | false, alias?: string  } 
  | { name: 'updatePasswordMeta', args?: MutationUpdatePasswordMetaArgs[] | false, alias?: string  } 
  | { name: 'updateManyPasswordMetas', args?: MutationUpdateManyPasswordMetasArgs[] | false, alias?: string  } 
  | { name: 'upsertPasswordMeta', args?: MutationUpsertPasswordMetaArgs[] | false, alias?: string  } 
  | { name: 'deletePasswordMeta', args?: MutationDeletePasswordMetaArgs[] | false, alias?: string  } 
  | { name: 'deleteManyPasswordMetas', args?: MutationDeleteManyPasswordMetasArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createUser'
  | 'updateUser'
  | 'updateManyUsers'
  | 'upsertUser'
  | 'deleteUser'
  | 'deleteManyUsers'
  | 'createPasswordMeta'
  | 'updatePasswordMeta'
  | 'updateManyPasswordMetas'
  | 'upsertPasswordMeta'
  | 'deletePasswordMeta'
  | 'deleteManyPasswordMetas'


type MutationCreateUserArgs =
  | 'data'
type MutationUpdateUserArgs =
  | 'data'
  | 'where'
type MutationUpdateManyUsersArgs =
  | 'data'
  | 'where'
type MutationUpsertUserArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteUserArgs =
  | 'where'
type MutationDeleteManyUsersArgs =
  | 'where'
type MutationCreatePasswordMetaArgs =
  | 'data'
type MutationUpdatePasswordMetaArgs =
  | 'data'
  | 'where'
type MutationUpdateManyPasswordMetasArgs =
  | 'data'
  | 'where'
type MutationUpsertPasswordMetaArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeletePasswordMetaArgs =
  | 'where'
type MutationDeleteManyPasswordMetasArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createUser: {
    type: 'User'
    args: Record<MutationCreateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  updateUser: {
    type: 'User'
    args: Record<MutationUpdateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateInput, where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updateManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertUser: {
    type: 'User'
    args: Record<MutationUpsertUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  deleteUser: {
    type: 'User'
    args: Record<MutationDeleteUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  deleteManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createPasswordMeta: {
    type: 'PasswordMeta'
    args: Record<MutationCreatePasswordMetaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PasswordMetaCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMeta> | prisma.PasswordMeta
  }
  updatePasswordMeta: {
    type: 'PasswordMeta'
    args: Record<MutationUpdatePasswordMetaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PasswordMetaUpdateInput, where: PasswordMetaWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMeta | null> | prisma.PasswordMeta | null
  }
  updateManyPasswordMetas: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyPasswordMetasArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PasswordMetaUpdateManyMutationInput, where?: PasswordMetaWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertPasswordMeta: {
    type: 'PasswordMeta'
    args: Record<MutationUpsertPasswordMetaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: PasswordMetaWhereUniqueInput, create: PasswordMetaCreateInput, update: PasswordMetaUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMeta> | prisma.PasswordMeta
  }
  deletePasswordMeta: {
    type: 'PasswordMeta'
    args: Record<MutationDeletePasswordMetaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: PasswordMetaWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMeta | null> | prisma.PasswordMeta | null
  }
  deleteManyPasswordMetas: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyPasswordMetasArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: PasswordMetaWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'user', args?: SubscriptionUserArgs[] | false, alias?: string  } 
  | { name: 'passwordMeta', args?: SubscriptionPasswordMetaArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'user'
  | 'passwordMeta'


type SubscriptionUserArgs =
  | 'where'
type SubscriptionPasswordMetaArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  user: {
    type: 'UserSubscriptionPayload'
    args: Record<SubscriptionUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: UserSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserSubscriptionPayload | null> | prisma.UserSubscriptionPayload | null
  }
  passwordMeta: {
    type: 'PasswordMetaSubscriptionPayload'
    args: Record<SubscriptionPasswordMetaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: PasswordMetaSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMetaSubscriptionPayload | null> | prisma.PasswordMetaSubscriptionPayload | null
  }
}
  

// Types for UserSubscriptionPayload

type UserSubscriptionPayloadObject =
  | UserSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type UserSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface UserSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'UserPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserPreviousValues | null> | prisma.UserPreviousValues | null
  }
}
  

// Types for UserPreviousValues

type UserPreviousValuesObject =
  | UserPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'email', args?: [] | false, alias?: string  } 
  | { name: 'password', args?: [] | false, alias?: string  } 
  | { name: 'firstName', args?: [] | false, alias?: string  } 
  | { name: 'lastName', args?: [] | false, alias?: string  } 
  | { name: 'phone', args?: [] | false, alias?: string  } 

type UserPreviousValuesFields =
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'email'
  | 'password'
  | 'firstName'
  | 'lastName'
  | 'phone'



  

export interface UserPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  email: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  password: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  firstName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  lastName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  phone: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for PasswordMetaSubscriptionPayload

type PasswordMetaSubscriptionPayloadObject =
  | PasswordMetaSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type PasswordMetaSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface PasswordMetaSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PasswordMetaSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'PasswordMeta'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"PasswordMetaSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMeta | null> | prisma.PasswordMeta | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'PasswordMetaPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"PasswordMetaSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PasswordMetaPreviousValues | null> | prisma.PasswordMetaPreviousValues | null
  }
}
  

// Types for PasswordMetaPreviousValues

type PasswordMetaPreviousValuesObject =
  | PasswordMetaPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 
  | { name: 'resetToken', args?: [] | false, alias?: string  } 

type PasswordMetaPreviousValuesFields =
  | 'id'
  | 'createdAt'
  | 'resetToken'



  

export interface PasswordMetaPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  resetToken: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  


export interface UserWhereUniqueInput {
  id?: string | null
  email?: string | null
}
export type UserWhereUniqueInputInputObject =
  | Extract<keyof UserWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'email', alias?: string  } 
  
export interface UserWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[]
  email_not_in?: string[]
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  password?: string | null
  password_not?: string | null
  password_in?: string[]
  password_not_in?: string[]
  password_lt?: string | null
  password_lte?: string | null
  password_gt?: string | null
  password_gte?: string | null
  password_contains?: string | null
  password_not_contains?: string | null
  password_starts_with?: string | null
  password_not_starts_with?: string | null
  password_ends_with?: string | null
  password_not_ends_with?: string | null
  firstName?: string | null
  firstName_not?: string | null
  firstName_in?: string[]
  firstName_not_in?: string[]
  firstName_lt?: string | null
  firstName_lte?: string | null
  firstName_gt?: string | null
  firstName_gte?: string | null
  firstName_contains?: string | null
  firstName_not_contains?: string | null
  firstName_starts_with?: string | null
  firstName_not_starts_with?: string | null
  firstName_ends_with?: string | null
  firstName_not_ends_with?: string | null
  lastName?: string | null
  lastName_not?: string | null
  lastName_in?: string[]
  lastName_not_in?: string[]
  lastName_lt?: string | null
  lastName_lte?: string | null
  lastName_gt?: string | null
  lastName_gte?: string | null
  lastName_contains?: string | null
  lastName_not_contains?: string | null
  lastName_starts_with?: string | null
  lastName_not_starts_with?: string | null
  lastName_ends_with?: string | null
  lastName_not_ends_with?: string | null
  phone?: string | null
  phone_not?: string | null
  phone_in?: string[]
  phone_not_in?: string[]
  phone_lt?: string | null
  phone_lte?: string | null
  phone_gt?: string | null
  phone_gte?: string | null
  phone_contains?: string | null
  phone_not_contains?: string | null
  phone_starts_with?: string | null
  phone_not_starts_with?: string | null
  phone_ends_with?: string | null
  phone_not_ends_with?: string | null
  passwordMeta?: PasswordMetaWhereInput | null
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
}
export type UserWhereInputInputObject =
  | Extract<keyof UserWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'email_not', alias?: string  } 
  | { name: 'email_in', alias?: string  } 
  | { name: 'email_not_in', alias?: string  } 
  | { name: 'email_lt', alias?: string  } 
  | { name: 'email_lte', alias?: string  } 
  | { name: 'email_gt', alias?: string  } 
  | { name: 'email_gte', alias?: string  } 
  | { name: 'email_contains', alias?: string  } 
  | { name: 'email_not_contains', alias?: string  } 
  | { name: 'email_starts_with', alias?: string  } 
  | { name: 'email_not_starts_with', alias?: string  } 
  | { name: 'email_ends_with', alias?: string  } 
  | { name: 'email_not_ends_with', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'password_not', alias?: string  } 
  | { name: 'password_in', alias?: string  } 
  | { name: 'password_not_in', alias?: string  } 
  | { name: 'password_lt', alias?: string  } 
  | { name: 'password_lte', alias?: string  } 
  | { name: 'password_gt', alias?: string  } 
  | { name: 'password_gte', alias?: string  } 
  | { name: 'password_contains', alias?: string  } 
  | { name: 'password_not_contains', alias?: string  } 
  | { name: 'password_starts_with', alias?: string  } 
  | { name: 'password_not_starts_with', alias?: string  } 
  | { name: 'password_ends_with', alias?: string  } 
  | { name: 'password_not_ends_with', alias?: string  } 
  | { name: 'firstName', alias?: string  } 
  | { name: 'firstName_not', alias?: string  } 
  | { name: 'firstName_in', alias?: string  } 
  | { name: 'firstName_not_in', alias?: string  } 
  | { name: 'firstName_lt', alias?: string  } 
  | { name: 'firstName_lte', alias?: string  } 
  | { name: 'firstName_gt', alias?: string  } 
  | { name: 'firstName_gte', alias?: string  } 
  | { name: 'firstName_contains', alias?: string  } 
  | { name: 'firstName_not_contains', alias?: string  } 
  | { name: 'firstName_starts_with', alias?: string  } 
  | { name: 'firstName_not_starts_with', alias?: string  } 
  | { name: 'firstName_ends_with', alias?: string  } 
  | { name: 'firstName_not_ends_with', alias?: string  } 
  | { name: 'lastName', alias?: string  } 
  | { name: 'lastName_not', alias?: string  } 
  | { name: 'lastName_in', alias?: string  } 
  | { name: 'lastName_not_in', alias?: string  } 
  | { name: 'lastName_lt', alias?: string  } 
  | { name: 'lastName_lte', alias?: string  } 
  | { name: 'lastName_gt', alias?: string  } 
  | { name: 'lastName_gte', alias?: string  } 
  | { name: 'lastName_contains', alias?: string  } 
  | { name: 'lastName_not_contains', alias?: string  } 
  | { name: 'lastName_starts_with', alias?: string  } 
  | { name: 'lastName_not_starts_with', alias?: string  } 
  | { name: 'lastName_ends_with', alias?: string  } 
  | { name: 'lastName_not_ends_with', alias?: string  } 
  | { name: 'phone', alias?: string  } 
  | { name: 'phone_not', alias?: string  } 
  | { name: 'phone_in', alias?: string  } 
  | { name: 'phone_not_in', alias?: string  } 
  | { name: 'phone_lt', alias?: string  } 
  | { name: 'phone_lte', alias?: string  } 
  | { name: 'phone_gt', alias?: string  } 
  | { name: 'phone_gte', alias?: string  } 
  | { name: 'phone_contains', alias?: string  } 
  | { name: 'phone_not_contains', alias?: string  } 
  | { name: 'phone_starts_with', alias?: string  } 
  | { name: 'phone_not_starts_with', alias?: string  } 
  | { name: 'phone_ends_with', alias?: string  } 
  | { name: 'phone_not_ends_with', alias?: string  } 
  | { name: 'passwordMeta', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PasswordMetaWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  resetToken?: string | null
  resetToken_not?: string | null
  resetToken_in?: string[]
  resetToken_not_in?: string[]
  resetToken_lt?: string | null
  resetToken_lte?: string | null
  resetToken_gt?: string | null
  resetToken_gte?: string | null
  resetToken_contains?: string | null
  resetToken_not_contains?: string | null
  resetToken_starts_with?: string | null
  resetToken_not_starts_with?: string | null
  resetToken_ends_with?: string | null
  resetToken_not_ends_with?: string | null
  AND?: PasswordMetaWhereInput[]
  OR?: PasswordMetaWhereInput[]
  NOT?: PasswordMetaWhereInput[]
}
export type PasswordMetaWhereInputInputObject =
  | Extract<keyof PasswordMetaWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'resetToken', alias?: string  } 
  | { name: 'resetToken_not', alias?: string  } 
  | { name: 'resetToken_in', alias?: string  } 
  | { name: 'resetToken_not_in', alias?: string  } 
  | { name: 'resetToken_lt', alias?: string  } 
  | { name: 'resetToken_lte', alias?: string  } 
  | { name: 'resetToken_gt', alias?: string  } 
  | { name: 'resetToken_gte', alias?: string  } 
  | { name: 'resetToken_contains', alias?: string  } 
  | { name: 'resetToken_not_contains', alias?: string  } 
  | { name: 'resetToken_starts_with', alias?: string  } 
  | { name: 'resetToken_not_starts_with', alias?: string  } 
  | { name: 'resetToken_ends_with', alias?: string  } 
  | { name: 'resetToken_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PasswordMetaWhereUniqueInput {
  id?: string | null
}
export type PasswordMetaWhereUniqueInputInputObject =
  | Extract<keyof PasswordMetaWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface UserCreateInput {
  email?: string
  password?: string
  firstName?: string | null
  lastName?: string | null
  phone?: string | null
  passwordMeta?: PasswordMetaCreateOneInput | null
}
export type UserCreateInputInputObject =
  | Extract<keyof UserCreateInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'firstName', alias?: string  } 
  | { name: 'lastName', alias?: string  } 
  | { name: 'phone', alias?: string  } 
  | { name: 'passwordMeta', alias?: string  } 
  
export interface PasswordMetaCreateOneInput {
  create?: PasswordMetaCreateInput | null
  connect?: PasswordMetaWhereUniqueInput | null
}
export type PasswordMetaCreateOneInputInputObject =
  | Extract<keyof PasswordMetaCreateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface PasswordMetaCreateInput {
  resetToken?: string
}
export type PasswordMetaCreateInputInputObject =
  | Extract<keyof PasswordMetaCreateInput, string>
  | { name: 'resetToken', alias?: string  } 
  
export interface UserUpdateInput {
  email?: string | null
  password?: string | null
  firstName?: string | null
  lastName?: string | null
  phone?: string | null
  passwordMeta?: PasswordMetaUpdateOneInput | null
}
export type UserUpdateInputInputObject =
  | Extract<keyof UserUpdateInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'firstName', alias?: string  } 
  | { name: 'lastName', alias?: string  } 
  | { name: 'phone', alias?: string  } 
  | { name: 'passwordMeta', alias?: string  } 
  
export interface PasswordMetaUpdateOneInput {
  create?: PasswordMetaCreateInput | null
  update?: PasswordMetaUpdateDataInput | null
  upsert?: PasswordMetaUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: PasswordMetaWhereUniqueInput | null
}
export type PasswordMetaUpdateOneInputInputObject =
  | Extract<keyof PasswordMetaUpdateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface PasswordMetaUpdateDataInput {
  resetToken?: string | null
}
export type PasswordMetaUpdateDataInputInputObject =
  | Extract<keyof PasswordMetaUpdateDataInput, string>
  | { name: 'resetToken', alias?: string  } 
  
export interface PasswordMetaUpsertNestedInput {
  update?: PasswordMetaUpdateDataInput
  create?: PasswordMetaCreateInput
}
export type PasswordMetaUpsertNestedInputInputObject =
  | Extract<keyof PasswordMetaUpsertNestedInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface UserUpdateManyMutationInput {
  email?: string | null
  password?: string | null
  firstName?: string | null
  lastName?: string | null
  phone?: string | null
}
export type UserUpdateManyMutationInputInputObject =
  | Extract<keyof UserUpdateManyMutationInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'firstName', alias?: string  } 
  | { name: 'lastName', alias?: string  } 
  | { name: 'phone', alias?: string  } 
  
export interface PasswordMetaUpdateInput {
  resetToken?: string | null
}
export type PasswordMetaUpdateInputInputObject =
  | Extract<keyof PasswordMetaUpdateInput, string>
  | { name: 'resetToken', alias?: string  } 
  
export interface PasswordMetaUpdateManyMutationInput {
  resetToken?: string | null
}
export type PasswordMetaUpdateManyMutationInputInputObject =
  | Extract<keyof PasswordMetaUpdateManyMutationInput, string>
  | { name: 'resetToken', alias?: string  } 
  
export interface UserSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: UserWhereInput | null
  AND?: UserSubscriptionWhereInput[]
  OR?: UserSubscriptionWhereInput[]
  NOT?: UserSubscriptionWhereInput[]
}
export type UserSubscriptionWhereInputInputObject =
  | Extract<keyof UserSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PasswordMetaSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: PasswordMetaWhereInput | null
  AND?: PasswordMetaSubscriptionWhereInput[]
  OR?: PasswordMetaSubscriptionWhereInput[]
  NOT?: PasswordMetaSubscriptionWhereInput[]
}
export type PasswordMetaSubscriptionWhereInputInputObject =
  | Extract<keyof PasswordMetaSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type UserOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'lastName_ASC'
  | 'lastName_DESC'
  | 'phone_ASC'
  | 'phone_DESC'
  
export type PasswordMetaOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'resetToken_ASC'
  | 'resetToken_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  