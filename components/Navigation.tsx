import Link from "next/link";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps } from "react";
import styled from "styled-components";

const Navigation = () => {
  const router = useRouter();
  return (
    <Nav>
      <Link href="/image">
        <Lis tab={router.pathname === "/image"}>Image</Lis>
      </Link>
      <Link href="/video">
        <Lis tab={router.pathname === "/video"}>Video</Lis>
      </Link>
      <Link href="note">
        <Lis tab={router.pathname === "/note"}>Note</Lis>
      </Link>
      <Link href="todo">
        <Lis tab={router.pathname === "/todo"}>Todo</Lis>
      </Link>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.2em;
`;

const Lis = styled.li`
  margin-top: 0.1em;
  text-align: center;
  user-select: none;
  padding: 1em 3em;
  font-weight: 600;
  font-size: 0.8rem;
  border-radius: 2px;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.primary};
  color: ${({ tab }: { tab: any }) => (tab ? "white" : "#ff7b00")};
  background-color: ${({ tab }: { tab: any }) => (tab ? "#ff7b00" : "white")};
  transition: all 0.5s ease;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;
