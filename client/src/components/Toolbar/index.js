import * as R from 'ramda';
import { observer } from 'mobx-react-lite';
import * as UI from './ui';
import toolState from '@Store/toolState';
import canvasState from '@Store/canvasState';
import { useCallback, useEffect, useState } from 'react';
import Line from '../../Tools/Line';
import Brush from '../../Tools/Brush';
import Rect from '../../Tools/Rect';
import Eraser from '../../Tools/Eraser';
import { getUniqId } from '../../helpers/utils';

const tools = {
  drawTools: [
    {
      name: 'Brush',
      instance: Brush,
      icon: 'icons/brush.svg',
    },
    {
      name: 'Rect',
      instance: Rect,
      icon: 'icons/rect.svg',
    },
    {
      name: 'Circle',
      instance: Brush,
      icon: 'icons/circle.svg',
    },
    {
      name: 'Line',
      instance: Line,
      icon: 'icons/line.svg',
    },
    {
      name: 'Eraser',
      instance: Eraser,
      icon: 'icons/eraser.svg',
    },
  ],
  options: [
    {
      name: 'Color Picker',
      // icon: 'icons/color-picker.svg',
      changeHandler: ({ target }) => {
        toolState.setStrokeColor(target.value);
        console.log(toolState.tool.strokeColor);
      },
      type: 'color',
    },
  ],
  actionTools: [
    {
      name: 'Undo',
      instance: Brush,
      icon: 'icons/undo.svg',
    },
    {
      name: 'Redo',
      instance: Brush,
      icon: 'icons/redo.svg',
    },
    {
      name: 'Save',
      instance: Brush,
      icon: 'icons/save.svg',
    },
    {
      name: 'Copy Link',
      instance: Brush,
      icon: 'icons/copy.svg',
    },
  ],
};

const InputTool = observer((props) => {
  const id = getUniqId();

  useEffect(() => {
    console.log(toolState);
  });

  return (
    <UI.LabelIcon alt={props.name} htmlFor="id">
      <UI.Input hidden={!!props.icon} onChange={props.changeHandler} type={props.type} id="id" />
    </UI.LabelIcon>
  );
});

const ToolPicker = ({ name, input, instance, icon, isActive, setActive }) => {
  const changeToolHandler = useCallback(
    () => (e) => {
      toolState.setTool(new instance(canvasState.canvas, toolState));
      setActive(name);
    },
    [canvasState.canvas, instance, name, isActive],
  );

  return <UI.ToolIcon active={isActive} title={name} onClick={changeToolHandler()} src={icon} />;
};

const Toolbar = (props) => {
  const [active, setActive] = useState('Brush');

  return (
    <UI.ToolbarWrapper color={toolState.tool?.strokeColor}>
      <UI.ToolbarContainer>
        {R.map(
          (tool) => (
            <ToolPicker
              setActive={setActive}
              isActive={active === tool.name}
              {...tool}
              key={tool.name}
            />
          ),
          tools.drawTools,
        )}
      </UI.ToolbarContainer>

      <UI.ToolbarContainer>
        {R.map(
          (tool) => (
            <InputTool {...tool} key={tool.name} />
          ),
          tools.options,
        )}
      </UI.ToolbarContainer>
    </UI.ToolbarWrapper>
  );
};

export default Toolbar;
