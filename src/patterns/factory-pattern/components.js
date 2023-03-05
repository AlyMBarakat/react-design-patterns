import { DARK } from "../../App";
import { memo } from "react";

function A({ name }) {
  console.log(`component: A Rendered`);
  return <div style={{ color: DARK }}>Type A Component for name: {name}</div>;
}
function B({ name }) {
  console.log(`component: B Rendered`);
  return <div style={{ color: DARK }}>Type B Component for name: {name}</div>;
}
function C({ name }) {
  console.log(`component: C Rendered`);
  return <div style={{ color: DARK }}>Type C Component for name: {name}</div>;
}
function D({ name }) {
  console.log(`component: D Rendered`);
  return <div style={{ color: DARK }}>Type D Component for name: {name}</div>;
}

const shouldInvalidate = (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
};

const CachedA = memo(A, shouldInvalidate);
const CachedB = memo(B, shouldInvalidate);
const CachedC = memo(C, shouldInvalidate);
const CachedD = memo(D, shouldInvalidate);

function Factory({ card }) {
  const { type, name } = card;

  switch (type) {
    case "A":
      return <CachedA name={name} />;
    case "B":
      return <CachedB name={name} />;
    case "C":
      return <CachedC name={name} />;
    case "D":
      return <CachedD name={name} />;
    default:
      return null;
  }
}

export { Factory };
