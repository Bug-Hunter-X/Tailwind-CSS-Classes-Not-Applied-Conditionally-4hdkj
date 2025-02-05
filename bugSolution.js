```javascript
// bugSolution.js
import { useState } from 'react';

function MyComponent() {
  const [showContent, setShowContent] = useState(true);

  return (
    <div>
      <button onClick={() => setShowContent(!showContent)}>
        Toggle Content
      </button>
      {showContent && (
        <div className="bg-gray-100 p-4">
          <h1 className="text-3xl font-bold">Tailwind CSS Bug</h1>
          <p className="text-gray-700">This is some text.</p>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
```