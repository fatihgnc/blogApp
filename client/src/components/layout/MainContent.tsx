import React from 'react';

const MainContent: React.FC<{
  backgroundColor: string;
  padding: string;
  width: string;
}> = (props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
      }}>
      <main
        style={{
          backgroundColor: props.backgroundColor,
          padding: props.padding,
          width: props.width,
        }}>
        {props.children}
      </main>
    </div>
  );
};

export default MainContent;
