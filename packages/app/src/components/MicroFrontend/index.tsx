import React, { useCallback, useEffect, useState } from 'react';

import { NotPage } from '@shared/components';
import { History } from 'history';

interface MicroFrontendProps {
  history: History;
  name: string;
  host: string;
}

const MicroFrontend: React.FC<MicroFrontendProps> = ({
  history,
  name,
  host,
}) => {
  const [error, setError] = useState(false);
  const renderMicroFrontend = useCallback(() => {
    (window as any)[`render${name}`](`${name}-container`, history);
  }, [name, history]);

  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
    } else {
      fetch(`${host}/asset-manifest.json`)
        .then(res => res.json())
        .then(manifest => {
          const promises = Object.keys(manifest.files)
            .filter(key => key.endsWith('.js'))
            .reduce((sum, key) => {
              sum.push(
                new Promise<void>(resolve => {
                  const path = `${host}${manifest.files[key]}`;
                  const script = document.createElement('script');

                  if (key === 'main.js') {
                    script.id = scriptId;
                  }

                  script.onload = (): void => {
                    resolve();
                  };

                  script.crossOrigin = '';
                  script.src = path;

                  document.body.appendChild(script);
                }),
              );
              return sum;
            }, [] as any);

          window.Promise.all(promises).then(() => {
            renderMicroFrontend();
          });
        })
        .catch(() => {
          setError(true);
        });
    }

    return (): any => {
      if ((window as any)[`unmount${name}`])
        (window as any)[`unmount${name}`](`${name}-container`);
    };
  }, [renderMicroFrontend, setError, host, name]);

  return (
    <main id={`${name}-container`}>
      {!error && <div className="container-loader" />}
      {error && <NotPage />}
    </main>
  );
};

export default MicroFrontend;
