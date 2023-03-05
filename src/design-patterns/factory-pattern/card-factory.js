import { DARK } from "../../App";
import { memo } from "react";

function A({ name }) {
  console.log(`Component ${name} is rendering `);
  return <div style={{ color: DARK }}>Type A Component for name: {name}</div>;
}
function B({ name }) {
  console.log(`Component ${name} is rendering `);
  return <div style={{ color: DARK }}>Type B Component for name: {name}</div>;
}
function C({ name }) {
  console.log(`Component ${name} is rendering `);
  return <div style={{ color: DARK }}>Type C Component for name: {name}</div>;
}
function D({ name }) {
  console.log(`Component ${name} is rendering `);
  return <div style={{ color: DARK }}>Type D Component for name: {name}</div>;
}

// Memoize cards to disable unnecessary re renders
const returnCached = (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
};

const CachedA = memo(A, returnCached);
const CachedB = memo(B, returnCached);
const CachedC = memo(C, returnCached);
const CachedD = memo(D, returnCached);

function CardFactory({ card }) {
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

export default CardFactory;
