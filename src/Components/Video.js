function Video({title}) {

    let topic = "Programming Class"; // We can store text in a variable.
    let background = "dark";
  return (
    <>
          <div className={background}>{title}</div>
          <img src="https://placebear.com/240/100" alt="bear" />
          {topic}
    </>
  );
}

// function Thumbnail() {
//     return (
//         <div> Thubnails</div>
//     )
// }

export default Video;

// export { Video, Thumbnail };
