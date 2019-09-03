import React from "react";

export default function LeaveBlock(props) {
  const {
    state,
    setNewDay,
    setIsOver,
    setNewMessage
  } = props;

  return (
    <div className="leave-block">
      <h2 className="leave-h2">Leave:</h2>
      <button
        className="leave-variants"
        disabled={!state.people.includes(1)}
        onClick={() => {
          setIsOver(true);
          setNewDay(false);
          setNewMessage(false);
        }}
      >
        <h2>Use a car</h2>
        <h3>You need to have a Racer in your team</h3>
      </button>
      <button
        className="leave-variants"
        disabled={state.daysInside < 10}
        onClick={() => {
          setIsOver(true);
          setNewDay(false);
          setNewMessage(false);
        }}
      >
        <h2>Use a tunnel</h2>
        <h3>{10 - state.daysInside} Days left for tunnel be ready</h3>
      </button>
      <button
        className="leave-variants"
        onClick={() => {
          setIsOver(true);
          setNewDay(false);
          setNewMessage(false);
        }}
      >
        <h2>Leave with hostages</h2>
        <h3>You can't take money with you!</h3>
      </button>
    </div>
  );
}
