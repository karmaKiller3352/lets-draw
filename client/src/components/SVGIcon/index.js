import InlineSvg from 'react-inlinesvg';

const Isvg = (props) => <InlineSvg {...props} src={`/images/${props.src}`} />;

export default Isvg;
