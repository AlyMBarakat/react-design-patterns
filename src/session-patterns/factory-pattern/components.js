import { DARK } from "../../App";

function A({ name }) {
  return <div style={{ color: DARK }}>Type A Component for name: {name}</div>;
}
function B({ name }) {
  return <div style={{ color: DARK }}>Type B Component for name: {name}</div>;
}
function C({ name }) {
  return <div style={{ color: DARK }}>Type C Component for name: {name}</div>;
}
function D({ name }) {
  return <div style={{ color: DARK }}>Type D Component for name: {name}</div>;
}

export { A, B, C, D };
