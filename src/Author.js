/* Author.js */
import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {useFragment} from 'react-relay/hooks';
import {stringifyRelayData} from './utils';

export default function Author(props) {
  const data = useFragment(
    graphql`
      fragment Author_fragment on GitHubActor {
        avatarUrl(size: 50)
        login
        url
      }
    `,
    props.actor,
  );

  return (
    <>
      <div>
        <img
          src={data?.avatarUrl}
          style={{padding: '0px', borderRadius: '50px', width: '50px'}}
        />
        <a href={data?.url}>{data?.login}</a>
      </div>
    </>
  );
}
