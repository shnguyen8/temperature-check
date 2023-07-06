import styled from "styled-components";

export const ImageDescriptionLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(36, 62, 206, 0.6);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s, visibility 0.2s;
`;

export const ImageDescription = styled.p`
  transition: 0.9s;
  transform: translateY(1em);
`;

export const ImageWrap = styled.div`
  &:hover ${ImageDescriptionLayer} {
    visibility: visible;
    opacity: 1;
  }

  &:hover ${ImageDescription} {
    transform: translateY(0);
  }
  position: relative;
`;
