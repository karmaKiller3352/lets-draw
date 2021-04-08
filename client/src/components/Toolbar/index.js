import * as R from 'ramda';

import * as UI from './ui';
import toolState from '@Store/toolState';
import canvasState from '@Store/canvasState';
import { useCallback, useState } from 'react';
import Line from '../../Tools/Line';
import Brush from '../../Tools/Brush';
import Rect from '../../Tools/Rect';

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
      instance: Brush,
      icon: 'icons/eraser.svg',
    },
    {
      name: 'Color Picker',
      // icon: 'icons/color-picker.svg',
      input: {
        changeHandler: ({ target }) => {
          toolState.setStrokeColor(target.value);
        },
        type: 'file',
      },
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

const ColorPicker = ({ name, setColorHandler, icon, active }) => {
  return (
    <UI.LabelIcon htmlFor="file">
      {icon && <UI.ToolIcon active={active} title={name} src={icon} />}
      <UI.Input hidden={!!icon} alt={name} onChange={setColorHandler} type="color" id="file" />
    </UI.LabelIcon>
  );
};

const ToolPicker = ({ name, input, instance, icon, isActive, setActive }) => {
  const changeToolHandler = useCallback(
    () => (e) => {
      toolState.setTool(new instance(canvasState.canvas));
      setActive(name);
    },
    [canvasState.canvas, instance, name, isActive],
  );

  if (input && R.equals(input.type, 'file')) {
    return (
      <ColorPicker
        active={isActive}
        name={name}
        icon={icon}
        setColorHandler={input.changeHandler}
      />
    );
  }

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
    </UI.ToolbarWrapper>
  );
};

export default Toolbar;
