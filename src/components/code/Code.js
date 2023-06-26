import React from 'react';

function Code() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://code.atvit.in/?folder=/config/workspace"
        title="Embedded Content"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Code;
