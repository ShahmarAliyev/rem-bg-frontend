import React, { CSSProperties } from "react";
import SyncLoader from 'react-spinners/SyncLoader';


const Loader: React.FC = () => {
  return (
    <div>
      <SyncLoader
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
