import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import canvasState from '@Store/canvasState';
import toolState from '@Store/toolState';
import Brush from '../../Tools/Brush';

import * as UI from './ui';

const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <UI.WorkSpace>
      <UI.DrowSpace ref={canvasRef} width={900} height={600} />
    </UI.WorkSpace>
  );
});

export default Canvas;
