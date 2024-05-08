import React from "react";

const Graph = () => {
  return (
    <div className="w-full h-full rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-center mb-4">Sales Performance</h2>
      <div className="w-full h-full">
        <Line 
          data={data} 
          options={options}
        >
        </Line>
      </div>
    </div>
  );
};

export default Graph;
