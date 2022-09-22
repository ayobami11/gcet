import React from 'react'

import styled from 'styled-components';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

import authorImg1 from '../../assets/images/blog/author-1.jpg';

const Middot = styled.span`
    font-size: 2.5rem;
`;

const CommentSC = styled.article`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1em;

    margin: 1em 0;

    .comment__fig {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .comment__author {
        font-weight: 600;
    }

    .comment__message {
        color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .8)};
        flex: 1;
    }
`;

const Comment = ({ name, comment }) => {
    return (
        <CommentSC>
            <figure className='comment__fig'>
                <img src={authorImg1} alt="" />
                <figcaption className='comment__author'>{name}</figcaption>
            </figure>
            <Middot>&middot;</Middot>
            <p className='comment__message'>{comment}</p>
        </CommentSC>
    )
}

export default Comment