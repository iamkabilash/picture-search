function ImageShow({ image }) {
    return (
        <div className="image-show">
            <img src={image.urls.small} />
        </div>
    );
}
  
export default ImageShow;