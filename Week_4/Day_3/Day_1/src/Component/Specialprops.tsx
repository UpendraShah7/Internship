import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function Card({ children, className, style }: CardProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}


function App() {
  return (
    <Card className="highlight" style={{ padding: "10px" }}>
      <h1>Title</h1>
      <p>Some content</p>
    </Card>
  );
}

export { Card, App };