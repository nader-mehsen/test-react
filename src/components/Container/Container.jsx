import './ContainerStyle.css'
export default function Container(props) {
  console.log()
  return (
    <div className={'container ' + props.class}>
        <div className="desc">
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
        <div className="images">
            <img src={props.firstPic} alt="" />
            <img src={props.secPic} alt="" />
        </div>

    </div>
  )
}
