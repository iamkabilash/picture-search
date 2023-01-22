import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderedImages = images.map((image) => <ImageShow image={image} key={image.id} />);
    return (
        <div className="image-show">
            {renderedImages}
        </div>
    );
}
  
export default ImageList;