const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;

  return (
    <div className="novedadescont">
      <h1 className="titulonov">{title}</h1>
      <h2>{subtitle}</h2>
      <div className="imgnov">
        <img src={imagen} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <hr />
    </div>
  );
};

export default NovedadItem;
