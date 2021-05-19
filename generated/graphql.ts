import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable/dist';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUsageStats: UsageStats;
  revokeRefreshTokensForUser: User;
  registerUser: LoginResponse;
  loginUser: LoginResponse;
  logoutUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateUsageStatsArgs = {
  data: UsageStatsCreateInput;
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  data: UserInput;
};


export type MutationLoginUserArgs = {
  data: UserInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type Query = {
  __typename?: 'Query';
  findFirstUsageStats?: Maybe<UsageStats>;
  findManyUsageStats: Array<UsageStats>;
  users: Array<User>;
  hello: Scalars['String'];
  bye: Scalars['String'];
  me?: Maybe<User>;
};


export type QueryFindFirstUsageStatsArgs = {
  where?: Maybe<UsageStatsWhereInput>;
  orderBy?: Maybe<Array<UsageStatsOrderByInput>>;
  cursor?: Maybe<UsageStatsWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UsageStatsScalarFieldEnum>>;
};


export type QueryFindManyUsageStatsArgs = {
  where?: Maybe<UsageStatsWhereInput>;
  orderBy?: Maybe<Array<UsageStatsOrderByInput>>;
  cursor?: Maybe<UsageStatsWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UsageStatsScalarFieldEnum>>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type UsageStats = {
  __typename?: 'UsageStats';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deployments: Scalars['Int'];
  published: Scalars['Int'];
  projects: Scalars['Int'];
};

export type UsageStatsCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deployments: Scalars['Int'];
  published: Scalars['Int'];
  projects: Scalars['Int'];
};

export type UsageStatsOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deployments?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  projects?: Maybe<SortOrder>;
};

export enum UsageStatsScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Deployments = 'deployments',
  Published = 'published',
  Projects = 'projects'
}

export type UsageStatsWhereInput = {
  AND?: Maybe<Array<UsageStatsWhereInput>>;
  OR?: Maybe<Array<UsageStatsWhereInput>>;
  NOT?: Maybe<Array<UsageStatsWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  deployments?: Maybe<IntFilter>;
  published?: Maybe<IntFilter>;
  projects?: Maybe<IntFilter>;
};

export type UsageStatsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  tokenVersion: Scalars['Int'];
};

export type UserInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Username = 'username',
  Password = 'password',
  TokenVersion = 'tokenVersion'
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  tokenVersion?: Maybe<IntFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ByeQueryVariables = Exact<{ [key: string]: never; }>;


export type ByeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'bye'>
);

export type LoginUserMutationVariables = Exact<{
  options: UserInput;
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  ) }
);

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logoutUser'>
);

export type RegisterUserMutationVariables = Exact<{
  options: UserInput;
}>;


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type LastUsageStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type LastUsageStatsQuery = (
  { __typename?: 'Query' }
  & { findFirstUsageStats?: Maybe<(
    { __typename?: 'UsageStats' }
    & Pick<UsageStats, 'deployments' | 'published' | 'projects'>
  )> }
);


export const ByeDocument = gql`
    query Bye {
  bye
}
    `;

/**
 * __useByeQuery__
 *
 * To run a query within a Vue component, call `useByeQuery` and pass it any options that fit your needs.
 * When your component renders, `useByeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useByeQuery();
 */
export function useByeQuery(options: VueApolloComposable.UseQueryOptions<ByeQuery, ByeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ByeQuery, ByeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ByeQuery, ByeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ByeQuery, ByeQueryVariables>(ByeDocument, {}, options);
}
export type ByeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ByeQuery, ByeQueryVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($options: UserInput!) {
  loginUser(data: $options) {
    accessToken
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginUserMutation({
 *   variables: {
 *     options: // value for 'options'
 *   },
 * });
 */
export function useLoginUserMutation(options: VueApolloComposable.UseMutationOptions<LoginUserMutation, LoginUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LoginUserMutation, LoginUserMutationVariables>>) {
  return VueApolloComposable.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
}
export type LoginUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser
}
    `;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLogoutUserMutation();
 */
export function useLogoutUserMutation(options: VueApolloComposable.UseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
}
export type LogoutUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($options: UserInput!) {
  registerUser(data: $options) {
    accessToken
    user {
      id
      username
    }
  }
}
    `;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRegisterUserMutation({
 *   variables: {
 *     options: // value for 'options'
 *   },
 * });
 */
export function useRegisterUserMutation(options: VueApolloComposable.UseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>>) {
  return VueApolloComposable.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
}
export type RegisterUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RegisterUserMutation, RegisterUserMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a Vue component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMeQuery();
 */
export function useMeQuery(options: VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MeQuery, MeQueryVariables>(MeDocument, {}, options);
}
export type MeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MeQuery, MeQueryVariables>;
export const LastUsageStatsDocument = gql`
    query LastUsageStats {
  findFirstUsageStats(orderBy: {id: desc}) {
    deployments
    published
    projects
  }
}
    `;

/**
 * __useLastUsageStatsQuery__
 *
 * To run a query within a Vue component, call `useLastUsageStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastUsageStatsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLastUsageStatsQuery();
 */
export function useLastUsageStatsQuery(options: VueApolloComposable.UseQueryOptions<LastUsageStatsQuery, LastUsageStatsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LastUsageStatsQuery, LastUsageStatsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LastUsageStatsQuery, LastUsageStatsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LastUsageStatsQuery, LastUsageStatsQueryVariables>(LastUsageStatsDocument, {}, options);
}
export type LastUsageStatsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LastUsageStatsQuery, LastUsageStatsQueryVariables>;