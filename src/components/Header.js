import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GitHub, Book } from "react-feather";

import SearchBooks from "./SearchBooks";

const ListContainer = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`;

const Container = styled.header`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    background-color: #282d2e;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const Title = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    color: #00ebff;
`;

export default function Header(props) {
    return (
        <Container>
            <Link
                to="/"
                style={{ textShadow: `none`, backgroundImage: `none` }}
            >
                <Book color="#00ebff" size={28} />
                <Title>{props.title}</Title>
            </Link>
            <ListContainer>
                <SearchBooks />
                <a
                    href="https://github.com/atapas/flicks"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub size={28} />
                </a>
            </ListContainer>
        </Container>
    );
}