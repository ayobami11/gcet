import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blog = styled.article`
    background: rgba(0, 0, 0, 0.05);
    border-radius: .3125em;
    
    padding: calc(1em + 1vw);

    display: flex;
    flex-direction: column;
    gap: 1.25em 2em;
    
    .article__text {
        max-width: 610px;
    }

    .article__heading {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: .75em;
    }
    
    .article__p {
        line-height: 1.5625;
        
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .article__menu {
        display: flex;
        align-items: center;
        gap: 1.5em;
    }

    .article__link {
        background: ${({ theme }) => theme.colors.lightBlue};
        border-radius: .3125em;
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.25rem;
        font-weight: 700;
        padding: .5em clamp(.5em, 4vw, 2.75em);
    }

    .article__delete-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        color: #ff0000;
        font-size: 1rem;

        display: flex;
        align-items: center;
        gap: .75em;
    }

    @media (min-width: 700px) {
        & {
            flex-direction: row;
            justify-content: space-between;
        }

        .article__menu {
            gap: calc(1.5em + 4vw);
        }
    }
`;

const BlogEntry = ({ id, title, text, openDeleteDialog }) => {
    return (
        <Blog>
            <div className='article__text'>
                <h3 className='article__heading'>{title}</h3>
                <p className='article__p'>
                    {text}
                </p>
            </div>
            <menu className='article__menu'>
                <li>
                    <Link className='article__link' to='/blog/update'>View</Link>
                </li>
                <li>
                    <button onClick={() => openDeleteDialog(id)} className='article__delete-btn'>
                        <FontAwesomeIcon icon='fa-solid fa-trash-can' /> Delete
                    </button>
                </li>
            </menu>
        </Blog>
    )
}

export default BlogEntry;