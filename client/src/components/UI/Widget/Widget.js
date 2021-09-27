import Icon from "../Icon/Icon";

import widget from "./widget.module.css";

const Widget = ({ src }) => {
  return (
    <div className={widget.widgetBox}>
      <Icon className={widget.iconBox} src={src} />
    </div>
  );
};

export default Widget;
