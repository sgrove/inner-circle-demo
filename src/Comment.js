/* Comment.js */
import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {useFragment} from 'react-relay/hooks';
import {stringifyRelayData} from './utils';
import Author from './Author';

export default function Comment(props) {
  const data = useFragment(
    graphql`
      fragment Comment_fragment on GitHubIssueComment {
        author {
          ...Author_fragment
        }
        bodyHTML
        createdAt
      }
    `,
    props.comment,
  );

  const authorUses = <Author actor={data?.author} />;

  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{__html: data?.bodyHTML}} />
        by {authorUses}
      </div>
    </>
  );
}
